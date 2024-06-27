import { useState } from 'react';
import '../App.css';
import { IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import axios from 'axios';

export default function CreateGroup() {
    const [groupName, setGroupName] = useState('');
    const [userData , setUserData] = useState(JSON.parse(localStorage.getItem('userData')))


    const handleChange = (e) => {
        setGroupName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(userData.data.token);
            const groupChat = await axios.post("http://localhost:3000/chat/create-group", {
                groupName,
                userData
            }, {
                headers: {
                    Authorization: `Bearer ${userData.data.token}`
                }
            });
            console.log(groupChat);
            setGroupName('');
        } catch (error) {
            console.error('Error occurred while creating group:', error);
        }
    };
    

    return (
        <div className='create-group-container'>
            <h2>Create New Group</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="groupName"
                    name="groupName"
                    placeholder='Enter Group Name'
                    value={groupName}
                    onChange={handleChange}
                />
                <IconButton type='submit'>
                    <CheckIcon/>
                </IconButton>
            </form>
        </div>
    );
}
