import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "react-router"
const Register = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault()
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-10">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <FieldSet className="border border-border p-8 rounded-3xl bg-card/95 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <div className="mb-6">
            <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
              Create account
            </p>
            <h1 className="text-foreground font-bold text-4xl mt-3">
              Register
            </h1>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Fill in your details to get started.
            </p>
          </div>

          <FieldGroup>
            <Field>
              <FieldLabel className="text-base font-semibold" htmlFor="username">
                Username
              </FieldLabel>
              <Input id="username" type="text" placeholder="Rohan Singh" />
            </Field>
            <Field>
              <FieldLabel className="text-base font-semibold" htmlFor="email">
                E-mail
              </FieldLabel>
              <Input id="email" type="email" placeholder="example@gmail.com" />
            </Field>
            <Field>
              <FieldLabel className="text-base font-semibold" htmlFor="password">
                Password
              </FieldLabel>
              <FieldDescription>Must be at least 8 characters long.</FieldDescription>
              <Input id="password" type="password" placeholder="••••••••" />
            </Field>
          </FieldGroup>

          <Button type="submit" className="mt-6 w-full text-base ">
            Register
          </Button>
          <p className="pl-16">Already have an account? <Link to={'/login'} className="text-blue-400">Login</Link></p>
        </FieldSet>
      </form>
     
    </div>
  )
}

export default Register