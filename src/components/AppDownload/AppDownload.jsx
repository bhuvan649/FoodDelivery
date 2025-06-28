import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import './AppDownload.css'
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download <br/> Out App</p>
      <img src={assets.play_store} alt="" />
      <img src={assets.app_store} alt="" />
    </div>
  )
}

export default AppDownload
