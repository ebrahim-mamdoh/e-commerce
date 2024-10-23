import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Home() {
  const [data, setData] = useState([])

 async function getMovies(){
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const fianlData = await data.json()
  console.log(fianlData);
  setData(fianlData)
  }

  useEffect(() => {
    getMovies()
  }, [])
  
  



  return (<>
    <div>Home</div>
    <ul>
      {data.map(
        (title)=>(
          <li key={title.id}> {title.title}</li>
        )
      )}
    </ul>
  </>
  )
}

export default Home