import React from 'react'
import styles from './History.module.css'
import Menu from 'components/Menu'

const History = () => {
    return (
        <div className={styles.History}>
            <Menu/>
            <h1 className={styles.classictitle}>Histoire du mois</h1>
        </div>
    )
}

export default History