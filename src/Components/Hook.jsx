import axios from 'axios'
import React, {useEffect, useState} from 'react'

const Hook = () => {
    useEffect(()=> {
        getJokes()
    }, [])

    const endpoint = 'https://icanhazdadjoke.com/slack'
    const endpoint2 = 'https://v2.jokeapi.dev/joke/Any?type=single'
    const [response, setResponse] = useState([])
    const getJokes = ()=> {
    axios.get(endpoint2)
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
                    <p>{response.joke}</p>
                    <img src="https://media.tenor.com/lOO2pHtjwf0AAAAi/smile-laugh.gif" alt="" className="emoji-image" />
                </div>
            </>
        }
        <button onClick={getJokes}>Next</button>
    </>
  )
}

export default Hook