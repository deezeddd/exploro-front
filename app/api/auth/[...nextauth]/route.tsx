import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github'


const handler = NextAuth({
    providers:[
        GithubProvider({
            clientId: 'Ov23liyt2F2xfsRi5EJX',
            clientSecret: '3b661d7cb9c07d8edb83b40f55500fe881b9a307'
        })
    ]
})

export {handler as GET, handler as POST};