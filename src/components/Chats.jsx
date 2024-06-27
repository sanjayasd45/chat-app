import { useNavigate } from 'react-router-dom';
import '../App.css'
import PropTypes from 'prop-types';
export default function Chats({props}) {

  const navigate = useNavigate()
  const handleClick = (receiverId) => {
    navigate(`/app/chat/${receiverId}`)
    // console.log("asdfasdfasdf ",receiverId);
  }
  return (
    <div className='chats-container' onClick={() => handleClick(props._id) } >
        <p className='con-icon'>{props.name[0]}</p>
        <p className='con-title'>{props.name}</p>
        <p className='con-lastmessage'>{props.lastMessage}</p>
        <p className='con-timestamp'>{props.timeStamp}</p>
    </div>
  )
}

Chats.propTypes = {
  name: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  chatId: PropTypes.string.isRequired,
  lastMessage: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  props: PropTypes.object.isRequired
};
