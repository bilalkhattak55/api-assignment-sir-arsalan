// import axios from 'axios';
// import { useEffect, useState } from 'react';
import './App.css';
import UserApi from './components/UserApi';

function App() {
  // const [users, setUser] = useState([]);

  // useEffect(()=> {
  //   axios
  //   .get("https://reqres.in/api/users?page=2")
  //   .then((res) => {
  //     setUser(res.data.data);
      
  //   })
  // }, [])

  return (
    <div>
     <UserApi />
    </div>
  );
}

export default App;
