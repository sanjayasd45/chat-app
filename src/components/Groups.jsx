import { IconButton } from '@mui/material';
import '../App.css'
import logo from '../assets/img/live-chat.png'
import SearchIcon from '@mui/icons-material/Search';

export default function Groups() {
  return (
    <div className='users'>
        <div className='users-header'>
            <img src={logo}></img>
            <h3>Find Groups</h3>
        </div>
        <div className='sb-search'>
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <input type="search" placeholder='search' />
        </div>
        <div className='users-list'>
            <div className="users-user">
                <p className='con-icon'>S</p>
                <p className='con-title'>Sanjay Kumar</p>
            </div>
            <div className="users-user">
                <p className='con-icon'>S</p>
                <p className='con-title'>Sanjay Kumar</p>
            </div>
            <div className="users-user">
                <p className='con-icon'>S</p>
                <p className='con-title'>Sanjay Kumar</p>
            </div>
            <div className="users-user">
                <p className='con-icon'>S</p>
                <p className='con-title'>Sanjay Kumar</p>
            </div>
            <div className="users-user">
                <p className='con-icon'>S</p>
                <p className='con-title'>Sanjay Kumar</p>
            </div>
            <div className="users-user">
                <p className='con-icon'>S</p>
                <p className='con-title'>Sanjay Kumar</p>
            </div>
            <div className="users-user">
                <p className='con-icon'>S</p>
                <p className='con-title'>Sanjay Kumar</p>
            </div>
            <div className="users-user">
                <p className='con-icon'>S</p>
                <p className='con-title'>Sanjay Kumar</p>
            </div>
            <div className="users-user">
                <p className='con-icon'>S</p>
                <p className='con-title'>Sanjay Kumar</p>
            </div>
            <div className="users-user">
                <p className='con-icon'>S</p>
                <p className='con-title'>Sanjay Kumar</p>
            </div>
            <div className="users-user">
                <p className='con-icon'>S</p>
                <p className='con-title'>Sanjay Kumar</p>
            </div>
            <div className="users-user">
                <p className='con-icon'>S</p>
                <p className='con-title'>Sanjay Kumar</p>
            </div>
            <div className="users-user">
                <p className='con-icon'>S</p>
                <p className='con-title'>Sanjay Kumar</p>
            </div>
        </div>
    </div>
  )
}
