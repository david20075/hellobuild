import {useEffect, useState} from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom"
const useSignUp =()=>{
    const history = useHistory();
    
    const onSubmit = (data)=>{
        const Allusers = JSON.parse(localStorage.getItem('users'));
        const users = {...Allusers,[data.username]:{...data, favorites: []}, currentUser: data.username};
        localStorage.setItem('users', JSON.stringify(users));
        history.push('/')
    }
     return [onSubmit];
}



export default useSignUp;