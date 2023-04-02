import React from 'react'
import User from './componets/User.js';
import { useState, useEffect } from 'react'

const App = () => {

  const [users, setUser] = useState([]);
  useEffect(() => {
    fetchData();
  },[])

  const fetchData = async () => {
    await fetch ('https://jsonplaceholder.typicode.com/users')
    .than((res) => res.json())
    .than((data) => setUser(data))
    .catch((err) => {
      console.log(err);
    })
  }
  console.log(users);
  return (
    <>
      <h1>walcome to croud operation</h1>
      <div>
        {
          users.map((user) => (
            <User id={user.id} key={user.id} name={user.name} email={user.email} />
          ))
        }
      </div>
    </>
  )
}

export default App