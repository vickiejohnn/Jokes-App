import axios from 'axios'
import React, {useState} from 'react'

const Hook = () => {
    const endpoint = 'https://v2.jokeapi.dev/joke/Any?type=single'
    const [response, setResponse] = useState([])
    const getJokes = ()=> {
    axios.get(endpoint)
    .then((result)=> {
        console.log(result.data);
        setResponse(result.data);
        console.log(response);
    })
    .catch((err)=> {
        console.log(err);
    })
}

  return (
    <>
        <h1>JOKES APP</h1>

        {
            <>
                <div className='loading'></div>
                <div className='jokes-box'>
                    <p className='category'>{response.category}</p>
                    <p>{response.joke}</p>
                </div>
            </>
        }
        <button onClick={getJokes}>Next</button>
    </>
  )
}

export default Hook