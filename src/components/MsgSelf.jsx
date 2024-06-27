import '../App.css'
import PropTypes from 'prop-types';

export default function MsgSelf({props}) {
  return (
    <div className='self-msg-container'>
        <div className='chat-msg-container'>
            <p>{props?.content}</p>
            <p className='chat-timestamps'>{props?.createdAt.slice(11, 16)}</p>
        </div>
        
    </div>
  )
}

MsgSelf.propTypes = {
  content : PropTypes.string.isRequired,
  createdAt : PropTypes.string.isRequired,
  props: PropTypes.object.isRequired
}