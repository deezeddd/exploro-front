import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import CredentialProvider from 'next-auth/providers/credentials'

//TODO => Bring client id from process.env
const handler = NextAuth({
  session: {
    strategy : 'jwt'
  },
    providers:[
      CredentialProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
        name: "Credentials",
        // `credentials` is used to generate a form on the sign in page.
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          email: { label: "Username", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          // Add logic here to look up the user from the credentials supplied
          const {email , password } = credentials as {
            email : string,
            password : string
          }
          //TODO Db -> Hash and check credentials 
          if(email == "test@test.com" && password == '1234'){

            const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
      
            if (user) {
              // Any object returned will be saved in `user` property of the JWT
              return user
            } else {
              // If you return null then an error will be displayed advising the user to check their details.
              return null
      
              // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
            }
          }
          else{
            throw new Error("Invalid Credentials")
            return null;
          }
        }
      }),    
        GithubProvider({
            clientId: 'Ov23liyt2F2xfsRi5EJX',
            clientSecret: '3b661d7cb9c07d8edb83b40f55500fe881b9a307'
        }),
    ],
    pages:{
      signIn: '/login'
    }
      
    
})

export {handler as GET, handler as POST};