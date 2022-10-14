import axios from "axios";


export const registerUser = async (user) =>{
    return await axios.post("http://localhost:8000/users", user);
}

export const loginUser = async () => {
  const user = {
    username: "",
    password: "",
  };

  return await axios.post("http://localhost:8000/login", user);
};
export const Urlogin = "http://localhost:8000/login";