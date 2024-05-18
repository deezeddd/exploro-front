'use client'
import Link from 'next/link';
import { Form } from '@/app/(signup-in)/register/register-form';
import { SubmitButton } from '@/app/(signup-in)/submit-button';


export default function Register() {
  async function register(formData: FormData) {   //FormData is empty interface

    let email = formData.get('email') as string;

    let name = formData.get('name') as string;
    let password = formData.get('password') as string;

    console.log("Name ", name)
    console.log("Email ",email)
    console.log("Password ",password)
  }


  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <h3 className="text-xl font-semibold">Sign Up</h3>
          <p className="text-sm text-gray-500">
            Create an account with your email and password
          </p>
        </div>
        <Form action={register}>
          <SubmitButton>Sign Up</SubmitButton>
          <p className="text-center text-sm text-gray-600">
            {'Already have an account? '}
            <Link href="/login" className="font-semibold text-gray-800 hover:border-b-2 hover:border-blue-300 hover:text-blue-400">
              Sign In
            </Link>
            {' instead.'}
          </p>
        </Form>
      </div>
    </div>
  );
}