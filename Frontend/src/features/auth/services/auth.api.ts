import axios from 'axios'
// /api/auth
const apiInstance = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials:true
})
interface Credentials {
    username: string;
    email:string;
    password:string;
}

export async function register (cred:Credentials){
    try {
        const response = await apiInstance.post('/api/auth/register' , cred);
        return response.data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            return error.response?.data || error.message
        }else if(error  instanceof Error){
            return error.message;
        }else{
            console.log("Error : "  , error)
        } 
    }

}
export async function login (cred:Pick<Credentials , 'email' | 'password'>){
    try {
        const response = await apiInstance.post('/api/auth/login' , cred);
        return response.data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            return error.response?.data || error.message;
        }else if(error  instanceof Error){
            return error.message;
        }else{
            console.log("Error : "  , error);
        } 
    }

}
export async function logout (){
    try {
        const response = await apiInstance.post('/api/auth/logout' );
        return response.data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            return error.response?.data || error.message
        }else if(error  instanceof Error){
            return error.message;
        }else{
            console.log("Error : "  , error)
        } 
    }

}

export async function getme() {
    try {
        const response = await apiInstance.get('/api/auth/get-me');
        return response.data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            return error.response?.data || error.message;
        }else if(error instanceof Error){
            return error.message;
        }else{
            console.log("Error: " , error);
        }
        
    }
    
}