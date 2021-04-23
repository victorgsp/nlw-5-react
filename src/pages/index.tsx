import { useEffect } from "react"

//SPA
//SSR - Server Side Rendering
//SSG - Static Site Generation

export default function Home(props) {
  // useEffect(()=>{
  //   fetch('http://localhost:3333/episodes')
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // }, [])

  console.log(props.episodes);

  return (
    <>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </>
  )
}

// export async function getServerSideProps(){
//     const response = await fetch('http://localhost:3333/episodes');
//     const data = await response.json();

//     return {
//       props: {
//         episodes: data,
//       }
//     }
// }

export async function getStaticProps(){
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },

    revalidate: 60 * 60 * 8,
  }
}