import Head from 'next/head'

import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

export default function Home({exploreData, cardsData}) {
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

    <main className="px-8 mx-auto max-w-7xl sm:px-16">

      <section className="pt-5">
        <h2 className="pb-5 text-4xl font-semibold"> Explore Nearby</h2>

        {/* pull data from a server */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {
          exploreData.map(item=>( 
           <SmallCard
            img={item.img}
             location={item.location}
              distance={item.distance}
               key={item.img} 
               />
          ))
        }
        </div>
      </section>
      
      <section>
      <h2 className="py-8 text-4xl font-semibold">Live Anywhere</h2>  
       <div className="flex p-3 -ml-3 space-x-3 overflow-scroll scrollbar-hide">
      {
        cardsData?.map(item=>(
          <MediumCard key={item.img} img={item.img} title={item.title} />
        ))
      }
         </div> 
      </section>
      <LargeCard
      img="https://links.papareact.com/4cj"
       title="The Greatest Outdoors"
       description="Wishlists curated by Airbnb"
       buttonText="Get Inspired"
       />
    </main>
    

    <Footer/>

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

export async function getStaticProps(){
   const exploreData = await fetch("https://links.papareact.com/pyp").
   then(
     (res)=> res.json()
   )

   const cardsData = await fetch("https://links.papareact.com/zp1").
   then(
     (res)=> res.json()
   )
   
   return {
     props:{
       exploreData,
       cardsData
     }
   }
}
