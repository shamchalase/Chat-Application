import React from 'react'
import CreateTwitte from './CreateTwitte';
import Posts from './Posts';

const Twittes = () => {
  return (
    <div className="posts">
      <div className="posts__home">
        Home
      </div>
      <CreateTwitte />
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
    </div>
  )
}

export default Twittes ;