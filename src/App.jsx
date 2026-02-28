import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const getApiData = async () => {
      try {
        setLoading(true)
        const res = await fetch("https://jsonplaceholder.typicode.com/users", { signal })
        const resJson = await res.json();
        setData(resJson);
        setLoading(false);
      } catch (err) {
        if(err.name !== "AbortError"){
          setError(err.message)
        }
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
   
    getApiData();

    return () => controller.abort()

  }, [])
  if (loading) return <h1>Loading ...</h1>
  if (error) return <h1>Error: {error}</h1>
  return (
    <>
      <ul>
        {data.map((i) => <li key={i.id}>{i.username}</li>)}
      </ul>
    </>
  )
}

export default App
