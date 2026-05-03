import type { FormEvent } from "react"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const Login = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault()
  }

  return (
    <div className="dark min-h-screen flex items-center justify-center bg-background px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <FieldSet className="border border-border p-8 rounded-lg bg-card shadow-lg">
          <h1 className="text-foreground font-bold text-3xl mb-6">Login</h1>
          <FieldGroup>
            <Field>
              <FieldLabel 
              className="text-lg font-bold"
              htmlFor="username">E-mail</FieldLabel>
              <Input id="username" 
              className="p-5 text-white" 
              type="text" placeholder="example@gmail.com" />
              <FieldDescription />
            </Field>
            <Field>
              <FieldLabel 
              className="text-lg font-bold"
              htmlFor="password">Password</FieldLabel>
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
              <Input id="password" 
              className="p-5 text-white"
              type="password" placeholder="••••••••" />
            </Field>
          </FieldGroup>
          <Button type="submit" className="mt-4 w-full hover:bg-stone-50 active:scale-90">
            Login
          </Button>
        </FieldSet>
      </form>
    </div>
  )
}

export default Login