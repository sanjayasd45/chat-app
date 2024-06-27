import axios from "axios";

export const previousChats = async(senderId, receiverId) => {
    try{
        const token = JSON.parse(localStorage.userData).data.token
        const headers = {
            Authorization: `Bearer ${token}`,
          };
        const data = await axios.post("http://localhost:3000/chat/previous-chats",{senderId, receiverId}, {headers})
        return data.data
      }catch(err){
          console.log(err);
      }
}

export const getChat = async( receiverId) => {
  try{
    const senderId = JSON.parse(localStorage.userData).data._id
    const token = JSON.parse(localStorage.userData).data.token
    const headers = {
        Authorization: `Bearer ${token}`,
      };
    const data = await axios.post("http://localhost:3000/chat/get-chat",{senderId, receiverId}, {headers})
    return data.data
  }catch(err){
    console.log(err);
  }
}
export const getUserToChat = async (receiverId) => {
  try{
    const token = JSON.parse(localStorage.userData).data.token
    const headers = {
        Authorization: `Bearer ${token}`,
      };
    const data = await axios.post("http://localhost:3000/chat/get-user-tochat",{ receiverId}, {headers})
    return data.data
  }catch(err){
    console.log(err);
  }
}
export const getCurrentChat = async(receiverId) => {
  try{
    const token = JSON.parse(localStorage.userData).data.token
    const senderId = JSON.parse(localStorage.userData).data._id
    const headers = {
        Authorization: `Bearer ${token}`,
      };
    const data = await axios.post("http://localhost:3000/chat/get-current-chat",{ senderId, receiverId}, {headers})
    return data.data
  }catch(err){
    console.log(err);
  }
}