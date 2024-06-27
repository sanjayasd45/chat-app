import axios from "axios";

export const getAllUsers = async() => {
    try{
      const token = JSON.parse(localStorage.userData).data.token
      const headers = {
          Authorization: `Bearer ${token}`,
        };
      const data = await axios.post("http://localhost:3000/user/fetchUsers", {headers})
      return data.data
    }catch(err){
        console.log(err);
    }
}

export const getUser = async() => {
    try{
      const token = JSON.parse(localStorage.userData).data.token
      const headers = {
          Authorization: `Bearer ${token}`,
        };
      const data = await axios.post("http://localhost:3000/user/fetchUsers", {headers})
      return data.data
    }catch(err){
        console.log(err);
    }
}
export const sideBarChat = async(id) => {
    try{
        const token = JSON.parse(localStorage.userData).data.token
        const headers = {
            Authorization: `Bearer ${token}`,
          };
          console.log(id, "from api");
        const data = await axios.post("http://localhost:3000/user/getSideChat", {id}, {headers})
        return data.data
      }catch(err){
          console.log(err);
      }
}