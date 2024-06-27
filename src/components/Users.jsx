import { IconButton } from '@mui/material';
import '../App.css'
import logo from '../assets/img/live-chat.png'
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../features/slices/allUsers';
import { useEffect } from 'react';
import { previousChats } from '../Apis/chatApis';
import { useNavigate } from "react-router-dom";

export default function Users() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const users = useSelector(state => state.allUsersKey)
    const senderId = JSON.parse(localStorage.userData).data._id
    console.log(senderId);

    
    useEffect(() => {
        dispatch(getAllUsers())
    },[dispatch])
    const handleClick = (receiverId) => {
        console.log(receiverId);
        previousChats(senderId, receiverId)
        navigate(`/app/chat/${receiverId}`)
    }
    

  return (
    <div className='users'>
        <div className='users-header'>
            <img src={logo}></img>
            <h3>Online Users</h3>
        </div>
        <div className='sb-search'>
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <input type="search" placeholder='search' />
        </div>
        <div className='users-list'>
            {
                users?.list?.map((e, index) => (
                    <div className="users-user" key={index} onClick={()=>handleClick(e._id)}>
                        <p className='con-icon'>{e.name[0]}</p>
                        <p className='con-title'>{e.name}</p>
                        <p><small>{e.username}</small></p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
