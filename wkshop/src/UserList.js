import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UserList() {

    const [listOfUsers,setListOfUsers]=useState([])

useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then(function (response) {
  
    
    setListOfUsers(response.data)
  }).catch(function (error) {
    
    console.log(error);
  })
},[])
  return (
    <div>
        <table  border="1">
          < thead style={{color:"red"}}>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>username</th>
                <th>city</th>
                <th>phone</th>

            </tr>
            </thead>
<tbody style={{color:'blue'}}>

  {listOfUsers.map(user=>{
  return <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.address.city}</td>
            <td>{user.phone}</td>
            </tr>

  
  
  }
  
  
  )}
  </tbody>
</table>
    </div>
  )
}

export default UserList
