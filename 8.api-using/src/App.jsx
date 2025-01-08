import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const BASE_URL = "http://localhost:3000";

function App() {

  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data);
  }

  const getUserByID = async (userID) => {
    const response = await axios.get(BASE_URL + "/users/" + userID);
    console.log(response.data.postID)
    return response.data.postID;
  }

  const createUser = async (newUser) => {
    //POST: veri eklemek için kullanılır
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log("response: ", response.data);
  }

  const updateUser = async (userID, updatedUser) => {
    //PUT: veri güncellemek için kullanılır
    await axios.put(`${BASE_URL}/users/${userID}`, updatedUser);
  }
  //DELETE: veri silmek için kullanılır
  const deleteUserByID = async (userID) => {
    const deletedUser = await axios.delete(`${BASE_URL}/users/${userID}`);
  }

  const getPostByID = async (postID) => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/" + postID)
    return response.data
  }


  const getPost = async () => {
    const postID = await getUserByID(1);
    const postData = await getPostByID(postID)
    console.log(postData)
  }

  useEffect(() => {
    getPost();
    //getAllUsers();
    //getUserByID(2);
    // const newUser = {
    //   "username": "behzat",
    //   "password": "6666"
    // }
    // createUser(newUser)
    // updateUser("47f2", {
    //   "username": "behzat",
    //   "password": "0606"
    // })
    //deleteUserByID("2")

  }, [])


  return (
    <div>

    </div>
  )
}

export default App
