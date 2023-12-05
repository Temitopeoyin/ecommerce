import React from 'react'
import styles from '../loginpage/styles.module.css'
import Loginform from './Loginform'
export default function page() {
  return (
    <div className={`${styles.login_background} max-w-[90rem]`}>
        <Loginform />
    </div>
  )
}
