import { useState } from "react";
import { useHistory } from "react-router-dom"


const useLogin =()=>{
  const history = useHistory();
  const [message, setMessage] = useState('')
    const onSubmit = (data)=>{
      const Allusers = JSON.parse(localStorage.getItem('users'));
      if(!Allusers)return setMessage('user does not exist');
      const user = Allusers[data['username']];
      if(!user) return setMessage('user does not exist');
      if(user['password'] !== data['password']) return setMessage('incorrect password');
      const users = {...Allusers,currentUser: data.username};
      localStorage.setItem('users', JSON.stringify(users));
      setMessage('');
      history.push('/')
    }
  return [onSubmit, message];
}



export default useLogin;