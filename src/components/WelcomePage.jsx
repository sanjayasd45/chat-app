
import '../App.css'
import logo from '../assets/img/live-chat.png'


export default function WelcomePage() {
  // const id = JSON.parse(localStorage.userData).data._id

  return (
    <div className='wlc-container'>
        <img src={logo}></img>
        <p>View and text dirctly to people present in the chat Rooms.</p>
    </div>
  )
}
