import React from 'react'
import styles from './MostListened.module.css'
import Menu from 'components/Menu'

const MostListened = () => {
    return (
        <div className={styles.mostlistened}>
            <Menu/>
            <h1 className={styles.classictitle}>Les plus écoutés</h1>
        </div>
    )
}

export default MostListened