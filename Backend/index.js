import app from './src/app.js';
import dotenv from 'dotenv'
import { dbConnect } from './src/dbConnect/db.js';
dotenv.config();

dbConnect().then(
    app.listen(process.env.PORT , (req, res)=>{
        console.log(`Server is running on http://localhost:${process.env.PORT}`)
    })
)
