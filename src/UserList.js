import React from 'react'

function UserList({user}) {
  return (
    <div className='user-profile'>
      <img src="https://www.citypng.com/public/uploads/small/11639594360nclmllzpmer2dvmrgsojcin90qmnuloytwrcohikyurvuyfzvhxeeaveigoiajks5w2nytyfpix678beyh4ykhgvmhkv3r3yj5hi.png" alt="" />
      <h2>{user.name}</h2>
      <h4>{user.email}</h4>
      
      </div>
  )
}

export default UserList