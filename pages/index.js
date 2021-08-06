import Head from 'next/head'

import Banner from '../components/Banner'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/airbnbicon.svg" />
      </Head>

    {/* Header  */}
    <Header/>
    {/* Banner */}
    <Banner/>
    

    <style jsx global>{`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: "Poppins", sans-serif; 
  }

  * {
    box-sizing: border-box;
  }
`}</style>
    </div>
  )

  
}

