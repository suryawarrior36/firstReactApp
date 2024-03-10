
import React, { useState } from 'react';

const DataPageComponent = () => {
   const[userData , setUserData] = useState(null)
   const getDataFromApi = async() =>{
    console.log("button click");
    const response =await fetch("https://fakestoreapi.com/users")
    const data = await response.json();
    console.log(data);
    setUserData(data)
    
    // setUserData(response.data)
    // console.log(userData);
   }
  return (
    <React.Fragment>
        <h1>Character Data</h1>
        <button onClick={getDataFromApi}> Add User</button>
        <ul>
            {
                userData && userData.map((iterator) =>(
                    <div class="cont">
                    <li >
                        <p>{iterator.username}</p>
                    </li>
                    </div>
                    
                ))
            }
        </ul>
    </React.Fragment>
  )
}

export default DataPageComponent