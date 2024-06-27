import { IconButton } from '@mui/material';
import '../App.css'
import Chats from '../components/Chats.jsx'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect } from 'react';
import { useNavigate, useParams  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sideBarChat } from '../features/slices/sideBar.js';


export default function SideBar() {
    const theme = useSelector(state => state.themeKey)
    const  receiverId  = useParams()._id;
    // console.log("params : =>", receiverId);
    const dispatch = useDispatch()
    const id = JSON.parse(localStorage.userData).data._id
    const name = JSON.parse(localStorage.userData).data.name
    useEffect(() => {
        console.log("sidebar");
        dispatch(sideBarChat(id))
    },[])
    // const handleClick = (receiverId) => {
    //     console.log(receiverId);
    //     previousChats(senderId, receiverId)
    //     navigate(`/app/chat/${receiverId}`)
    // }
    const sideChats = useSelector(state => state.sideBarSlice)?.list?.previousChats
    // console.log(theme);
    const navigate = useNavigate()
      
  return (
    <div className='sidebar'>
        <div className='sb-header'>
            <div>
            <IconButton>
                <AccountCircleIcon/>
            </IconButton>
            <span>{name}</span>
            </div>
            <div>
                <IconButton onClick={() => navigate('users')}>
                    <PersonAddIcon />             
                </IconButton>

                <IconButton onClick={() => navigate('groups')}>
                    <GroupAddIcon/>
                </IconButton>

                <IconButton onClick={() => navigate('create-group')}>
                    <AddCircleIcon/>
                </IconButton>

                <IconButton>
                    <NightlightIcon/>
                </IconButton>
            </div>

        </div>
        <div className='sb-search'>
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <input type="search" placeholder='search' />
        </div>
        <div className='sb-chats'>
            {
                sideChats?.map((conversations, index) => {
                    return <Chats key={index} props={conversations}/>
                })
            }
        </div>
    </div>
  )
}
