
import { Outlet } from 'react-router-dom'
import '../App.css'
import SideBar from '../components/SideBar'
// import CreateGroup from './CreateGroup.jsx'
// import SingUp from '../components/SingUp'
// import WelcomePage from './WelcomePage.jsx'



export default function MainComponent() {
  return (
    <div className='main-component'>
        <div className='main-component-part1'>
            <div className='main-component-sidebar'>
              <SideBar/>
            </div>
            <div className='main-component-chatarea'>
              <Outlet/>
            </div>
        </div>
    </div>
  )
}
