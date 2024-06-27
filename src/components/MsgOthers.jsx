import '../App.css'
import PropTypes from 'prop-types';

export default function MsgOthers({props}) {
  // console.log(props);
  // const userData = JSON.parse(localStorage.userData).data
  return (
    <div className='other-msg-container'>
        <div className='chat-msg-container'>
            <p className='con-icon'>{}</p>
            <div className='other-text-content'>
                <p className='con-title'> {}</p>
                <p className='con-lastmessage'>{props?.content}</p>
                <p className='chat-timestamps'>{props?.createdAt.slice(11, 16)}</p>
            </div>
        </div>
    </div>
  )
}

MsgOthers.propTypes = {
  content : PropTypes.string.isRequired,
  createdAt : PropTypes.string.isRequired,
  props: PropTypes.object.isRequired
}
