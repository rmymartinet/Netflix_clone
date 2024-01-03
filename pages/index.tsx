import { NextPageContext } from 'next'
import { getSession, signOut } from 'next-auth/react'

import NavBar from '../components/NavBar.jsx'

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }
  console.log(session)
  return {
    props: {}
  }
}

export default function Home() {

  return (
    <>
      <NavBar />
    </>
  )
}
