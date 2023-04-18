import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import UserList from './UserList';



function App() {

  
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      let result = await axios.get("https://jsonplaceholder.typicode.com/users/")
      setUsers(result.data)
      
      
    }

   fetchData()
   

  }, []);


  return (
    <div className="App">
      <div className='users-list'>
        {users.map((el) => (

      <UserList user={el}/>
      ))}

      </div>
    </div>
  );
}

export default App;
