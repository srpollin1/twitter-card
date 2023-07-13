import React from 'react'
import ReactDOM from 'react-dom/client'
import { TwitterFollowcard } from './App.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <section className='App'>

    <TwitterFollowcard isFollowing
      userName='shedo.exe'
      name='Edu'
      />
      

    <TwitterFollowcard isFollowing={false}
      userName='_.aneurys.m'
      name='Cris' />
      
    <TwitterFollowcard isFollowing
      userName='satur.n.o_'
      name='Manu' />

  </section>
)
