import React from 'react'
import styles from './Playlists.module.css'
//import Menu from 'components/Menu'
import Page from '../../components/Page'

const Playlists = () => {
    return (
<Page>     
        <div className={styles.playlists}>

        <h1 className={styles.titre}> Les playlists du moment</h1>
        <h2 className={styles.mois}> Novembre </h2>
 
        </div>
</Page>   
    )
}

export default Playlists