import { IconButton } from '@mui/material'
import DeleteOutlineIcon  from '@mui/icons-material/DeleteOutline';
import SendIcon from '@mui/icons-material/Send';
import '../App.css'
import MsgOthers from './MsgOthers';
import MsgSelf from './MsgSelf';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserToChat } from '../Apis/chatApis';
import { getCurrentChat, saveChat } from '../features/slices/liveChat';
import { useDispatch, useSelector } from 'react-redux';
import io from "socket.io-client"


// import PropTypes from 'prop-types';

export default function ChatAera() {
    const [filteredUsers, setFilteredUsers] = useState("--")
    const dispatch = useDispatch()
    // console.log("socket", socket);
    const socket = io("http://localhost:3000")

    const chats = useSelector(state => state.getChat).list.chat

    const senderId = JSON.parse(localStorage.userData).data._id
    const receiverId = useParams()._id

    const [message, setMessage] = useState("")
    const handleChange = (e) => {
        setMessage(e.target.value)
    }
    useEffect(() => {
        const getUser = async() => {
            const data = await getUserToChat(receiverId)
            if(data){
                setFilteredUsers(data) 
            }
        }
        getUser()
    }, [receiverId])

    useEffect(() => {
        dispatch(getCurrentChat(receiverId))
    }, [receiverId])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            senderId,
            receiverId,
            message,
        }
        socket.emit("msg", data)
        setMessage("")
    }
    // console.log(chats);
    useEffect(() => {
        const handleMsg = (data) => {
          console.log(data);
          dispatch(saveChat(data))
        };
      
        socket.on("message", handleMsg);
      
        return () => {
          socket.off("message", handleMsg);
        };
      }, [socket]);
      
    
  return (
    <div className='chat-container'>
        <div className='chat-header'>
            <p className='con-icon'>{filteredUsers?.userData?.name[0]}</p>
            <div className='header-text'>
                <p className='con-title'>{filteredUsers?.userData?.name}</p>
                <p className='con-timestamp'>{socket.id}</p>
            </div>
            <IconButton>
                <DeleteOutlineIcon/>
            </IconButton>
        </div>
        <div className='chat-mc'>

        {
            chats?.chatMsg.map((item, index) => (
                item.senderId === senderId ? <MsgSelf key={index} props={item}/> : <MsgOthers key={index} props={item}/>
            ) )
        }
        </div>
        <form className='chat-input' onSubmit={handleSubmit}>
            <input type="text" placeholder='Type a Message' value={message} onChange={handleChange} />
            <IconButton type='submit'>
               <SendIcon/>
            </IconButton>
        </form>
    </div>
  )
}

