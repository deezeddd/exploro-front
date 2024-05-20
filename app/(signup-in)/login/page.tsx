'use client';
import Link from 'next/link';
import { Form } from '@/app/(signup-in)/login/login-form';
import { SubmitButton } from '@/app/(signup-in)/submit-button';
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from '@/components/ui/button';




export default function Login() {
  const { data: session } = useSession();
  async function login(formData: FormData) {
    let email = formData.get('email') as string;
    let password = formData.get('password') as string;
    console.log(email, password);

  }
  // async function git() {

  // }
  if (!session) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
        <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
          <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
            <h3 className="text-xl font-semibold">Sign In</h3>
            <p className="text-sm text-gray-500">
              Use your email and password to sign in
            </p>
          </div>
          <Form action={login}>
            <SubmitButton>Sign in</SubmitButton>
            <p className="text-center text-sm text-gray-600">
              {"Don't have an account? "}
              <Link href="/register" className="font-semibold text-gray-800 hover:border-b-2 hover:border-blue-300 hover:text-blue-400">
                Sign Up
              </Link>
              {' for free.'}
            </p>
          </Form>

          <Button onClick={() => signIn("github")}>Sign in With Github</Button>
          <Button onClick={() => signIn("google")}>Sign in With Google</Button>

        </div>
      </div>
    )
  }
  else{
    return(
      <div>
        <h1>Hello ={'>'} {session?.user?.name}</h1>
        <Button onClick={() => signOut()}>Sign out</Button>
      </div>
    )

  }
}