import { useState } from 'react';
import '../App.css'
import logo from '../assets/img/live-chat.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function SingUp() {
  const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name : '',
        username: '',
        email: '',
        password: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        console.log('Form data:', formData);
        setFormData({
          name:'',
          username: '',
          email: '',
          password: '',
        })
        console.log("+++++",formData);
        const response = await axios.post('http://localhost:3000/user/singup', formData)
        console.log(response);
        localStorage.setItem("userData", JSON.stringify(response))
        navigate('/app/welcome')
      };

      return (
      <div className='main-component'>
        <div className='singup-page'>
          <div className='singup-page-logo'>
            <img src={logo}></img>

          </div>
          <div className='singup-page-input'>
            <form onSubmit={handleSubmit}>
              <h2>SingUp</h2>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder='Enter Name'
                  required="true"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div >
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder='Enter Username'
                  required="true"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required="true"
                  placeholder='Enter Email'
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  required="true"
                  name="password"
                  placeholder='Enter Password'
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className='switch-link'>
                <p>Already have an account <a onClick={() => navigate('/')}>Login</a></p>
              </div>
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
      );
}
