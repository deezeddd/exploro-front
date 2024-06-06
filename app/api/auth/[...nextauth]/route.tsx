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
        name: "Credentials",

        credentials: {
          email: { label: "Username", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          let flag = null;
          const {email , password } = credentials as {
            email : string,
            password : string
          }
          //TODO Db -> Hash and check credentials 
          if(email == "test@test.com" && password == '1234'){

            const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
      
            if (user) {
              // Any object returned will be saved in `user` property of the JWT
              flag = user
              console.log("Auth-Method => ",flag)
              return user
            } else {
              // If you return null then an error will be displayed advising the user to check their details.
              flag = null
              return flag
      
              // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
            }
          }
          else{
            // return Error("Invalid Credentials")
            flag = null
            return flag;
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