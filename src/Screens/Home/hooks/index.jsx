import {useEffect, useState} from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
const useHome =()=>{
    const api = 'https://api.github.com';
    const [repos, setRepos] = useState([]);
    const [user, setUser] = useState({username:'',favorites:[]});
    const history = useHistory();
    const getRepos=  ()=>{
      const Allusers = JSON.parse(localStorage.getItem('users'));
      const user = Allusers[Allusers.currentUser];
      if(!Allusers.currentUser) return history.push('/login');
      setUser(user);
      console.log('======>> ', user);
      return  axios.get(`${api}/users/${user.username}/repos`)
    }
    const getList = async ()=>{
        const response =  await getRepos();
        const {data} = response;
        setRepos(data);
     }
     const addFavorites = (item) =>{
        const Allusers = JSON.parse(localStorage.getItem('users'));
        const user = Allusers[Allusers.currentUser];
        const favorites = user.favorites.filter((fav)=> fav.id === item.id)
        if(favorites.length > 0) return;
        const users = {...Allusers,[Allusers.currentUser]:{...user, favorites: [...user.favorites, item]}};
        localStorage.setItem('users', JSON.stringify(users));
        console.log({...user, favorites: [...user.favorites, item]})
        setUser({...user, favorites: [...user.favorites, item]})
      
     }
     const logout = ()=>{
      const Allusers = JSON.parse(localStorage.getItem('users'));
      const user = Allusers[Allusers.currentUser];
      const users = {...Allusers,currentUser:null};
      localStorage.setItem('users', JSON.stringify(users));
      
      history.push('/login');
     }
     
     useEffect(()=>{
      getList();
    },[])
     return [repos, user,addFavorites,logout];
}

export default useHome;