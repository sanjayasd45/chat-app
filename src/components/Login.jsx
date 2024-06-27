import { useState } from 'react';
import '../App.css'
import logo from '../assets/img/live-chat.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {useDispatch} from 'react-redux'
import { getUser } from '../features/slices/user';

export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [logInStatus, setLogInStatus] = useState({})
  const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        username: '',
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
        setLoading(true)
        e.preventDefault();
        console.log('Form data:', formData);
        setFormData({
          username: '',
          password: '',
        })
        try{
          const config = {
            headers : {
              "content-type" : "application/json"
            }
          }
          const response = await axios.post('http://localhost:3000/user/login', formData, config)
            console.log("login", response);
            setLogInStatus({msg : "Success", key : Math.random()})
            setLoading(false)
            localStorage.setItem("userData", JSON.stringify(response))
            console.log(response);
            dispatch(getUser(response))
            navigate("/app/welcome")
          }catch{(err) => {
          console.log(err);
        }}
      };
    
      return (
        <div className='main-component'>
            <div className='singup-page'>
                <div className='singup-page-logo'>
                <img src={logo}></img>


                </div>
                <div className='singup-page-input'>
                <form onSubmit={handleSubmit}>
                    <h2>LongIn</h2>
                    <div>
                    <label htmlFor="username">Email or Username</label>
                    <input
                        type="text"
                        id="username"
                        required="true"
                        name="username"
                        placeholder='Email or Username'
                        value={formData.username}
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
                      <p>Do not have an account <a onClick={() => navigate('/singup')}>SingUp</a></p>
                    </div>
                    <button type="submit">{loading ? "Loding..." : "Log In"}</button>
                </form>
                </div>
            </div>
        </div>
      );
}
