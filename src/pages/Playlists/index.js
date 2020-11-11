import React from 'react'
import styles from './Playlists.module.css'
import Menu from 'components/Menu'

const Playlists = () => {
    return (
        <div>
            <Menu/>
            <h1 className={styles.classictitle}>Playlists</h1>
        </div>
    )
}

export default Playlists