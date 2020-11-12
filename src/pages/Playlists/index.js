import React from 'react'
import styles from './Playlists.module.css'
import Menu from 'components/Menu'
import Page from '../../components/Page'

const Playlists = () => {
    return (
<Page>     
        <div className={styles.playlists}>
            <h1 className={styles.classictitle}>Playlists</h1>
        </div>
</Page>   
    )
}

export default Playlists