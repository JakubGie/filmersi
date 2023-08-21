import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import axios from 'axios'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({profile}) {
    
      axios.get('https://api.filmer.wkbdhkmuzv.cfolks.pl/checkIfUserExists/'+profile.email+'/'+profile.given_name+'/'+profile.family_name).then((res) => {
        
      })

      return true

    }
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }