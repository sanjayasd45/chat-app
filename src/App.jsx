import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainComponent from './components/MainComponent.jsx'
import Login from './components/Login.jsx'
import SingUp from './components/SingUp.jsx'
import WelcomePage from './components/WelcomePage.jsx'
import ChatAera from './components/ChatAera.jsx'
import Users from './components/Users.jsx'
import Groups from './components/Groups.jsx'
import CreateGroup from './components/CreateGroup.jsx'
import { useEffect, useState } from 'react'
import io from 'socket.io-client'


function App() {
  const senderId = JSON.parse(localStorage.userData).data._id
  // setSocketId(socket.id)
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Initialize socket connection
    const newSocket = io('http://localhost:3000');
    setSocket(newSocket);

    // Cleanup on component unmount
    return () => {
      if (newSocket) {
        newSocket.disconnect();
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  useEffect(() => {
    if (socket) {
      // Listen for socket connection
      socket.on('connect', () => {
        console.log('Socket connected:', socket.id);
        // Emit the event after socket is connected
        socket.emit('set-socket-id', {senderId});
        console.log('Event emitted:', 'set-socket-id', senderId);
      });

      // Optionally handle socket disconnection
      socket.on('disconnect', () => {
        console.log('Socket disconnected');
      });
    }
  }, );

  return (
    <div className='app '>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/singup' element={<SingUp/>}/>
        <Route path='app' element={<MainComponent/>}>
          <Route path='welcome' element={<WelcomePage/>}></Route>
          <Route path='chat' element={<ChatAera/>}>
            <Route path=':_id' element={<ChatAera/>}></Route>
          </Route>
          <Route path='users' element={<Users/>}></Route>
          <Route path='groups' element={<Groups/>}></Route> 
          <Route path='create-group' element={<CreateGroup/>}></Route> 
        </Route>
      </Routes>
      {/* <MainComponent/> */}
    </div>
  )
}

export default App
