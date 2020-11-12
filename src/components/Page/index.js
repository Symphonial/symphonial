import React from 'react'
import Menu from '../Menu'
import styles from './Page.module.css'

const Page = (props) => {
    return (
        <div className={styles.page}>
        <Menu />
        {props.children}
        </div>
    )  
}

export default Page