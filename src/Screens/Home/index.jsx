import React,{useEffect, useState} from "react";
import useHome from "./hooks";



export default function Home() {
    const [repos, user,addFavorites,logout] = useHome();
    const [tab, setTab] = useState('REPOS');
    return(
        <div className='container mx-auto shadow-md bg-white p-5 mt-5 rounded-lg'>
                <ul className='flex cursor-pointer'>
                    <a onClick={()=> setTab('REPOS')} > <li className={`py-2 px-6 bg-white rounded-t-lg ${('REPOS' === tab ? 'bg-white-200': 'bg-gray-200')}`}>Repositories</li></a>
                    <a onClick={()=> setTab('FAVORITES')} ><li className={`py-2 px-6 bg-white rounded-t-lg ${('FAVORITES' === tab ? 'bg-white-200': 'bg-gray-200')}`}>Favorites({user['favorites']?user['favorites'].length : '0'})</li></a>
                    <a onClick={()=> setTab('PROFILE')} ><li className={`py-2 px-6 bg-white rounded-t-lg ${('PROFILE' === tab ? 'bg-white-200': 'bg-gray-200')}`}>Profile</li></a>
                </ul>
            {
                tab === 'REPOS' && (
                    <div className="p-5" >
                                    {repos.length < 1 && (<p>No tienes Repositorios</p>) }
                                    {
                                    repos.map((item, key)=>(
                                        <div key={key} className='p-5 border-grey-600'>
                                            <b  >Name: {item.name}</b> <br/>
                                            <b >User: {item.full_name}</b><br/>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>addFavorites(item)}>
                                                Add to favorites
                                            </button>
                                        </div>
                                        
                                    ))
                                    }
                   </div>
                )
            }
            
            {
                tab === 'FAVORITES' && (
                    <div className="p-5" >
                        {user.favorites.length < 1 && (<p>No tienes Repositorios</p>) }
                                    {
                                    user.favorites.map((item, key)=>(
                                        <div key={key} className='p-5 border-grey-600'>
                                            <b  >Name: {item.name}</b> <br/>
                                            <b  >User: {item.name}</b>
                                        </div>
                                        
                                    ))
                                    }
                   </div>
                )
            }
            {
                tab === 'PROFILE' && (
                    <div>
                        <p className="font-bold mt-5" >Profile</p>
                        <span className="mb-5 font-medium">Name: </span><span>{user.username} </span> <br /> <br />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={logout}>
                            Logout
                        </button>
                    </div>
                    )
            }
          
        
        </div>
    )
}