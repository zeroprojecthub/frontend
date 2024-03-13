import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
function App() {
  const [data, setData] = useState([])

  useEffect(() => {

    axios.get('/api/jokes')
      .then(function (response) {
        // handle success
        setData(response.data);
        console.log("got",response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

  })

  return (
    <>
      <h2>This is fontend + Backend</h2>
      {
        data.map((item, index) =>
        (
          <div key={item.id}>
            <h3>{item.id}</h3>
            <h3>{item.joke}</h3>
            <h3>{item.auther}</h3>
          </div>
        )

        )
      }

    </>
  )
}

export default App
