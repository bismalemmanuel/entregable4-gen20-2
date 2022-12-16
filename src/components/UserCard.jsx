import React from 'react'
import './styles/userCard.css'

const UserCard = ({user,deleteUserById,setUpdateInfo, setCloseForm}) => {
    const handleEdit=()=>{
        setUpdateInfo(user)
        setCloseForm(false)
        
    }
    
  return (
<article className='card'>
      <h3 className='card__title'>
        {user.first_name} {user.last_name}
      </h3>
      <ul className='card__body'>
        <li className='card__item'>
          <span className='card__span'>Email</span><br/>
          {user.email}
        </li>
        <li className='card__item'>
          <span className='card__span'>Birthday</span><br/>
          {user.birthday}
        </li >
      </ul>
      <footer className='card_footer'>
        <button className='card__btn card__btn__trash' onClick={()=>deleteUserById(user.id)}>
        <i class='bx bxs-trash'></i></button>
        <button className='card__btn card__btn__edit' onClick= {handleEdit}>
        <i class='bx bx-edit-alt'></i></button>
      </footer>
    </article>

  )
}

export default UserCard