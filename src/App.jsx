
import { useEffect, useState } from "react"
import FormUser from "./components/FormUser"
import UserCard from "./components/UserCard"
import useCrud from "./hooks/useCrud"
import './App.css'


function App() {

  const [closeForm, setCloseForm] = useState(true)

  
  const [updateInfo, setUpdateInfo] = useState()

  const {users, createNewUser, getAllUsers, 
    deleteUserById, udpateUserById}
    = useCrud()

  useEffect(() => {
     getAllUsers()
   }, [])

    

  return (
    <div className="App">
      <h1>Users</h1>
      <button className="App__btn" onClick={()=>setCloseForm(false)}>Open Form</button>

      <div className={`form-container ${closeForm && 'close__form'}`}>

        <FormUser 
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        udpateUserById ={udpateUserById}
        setUpdateInfo={setUpdateInfo}
        setCloseForm={setCloseForm}/>
      </div>

      <div className="user-container">
        {
          users?.map(user =>(
            <UserCard
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
            setCloseForm={setCloseForm}
            />
            ))
        }
      </div>
    </div>
  )
}

export default App
