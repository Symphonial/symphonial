import React from 'react'
import styles from './MostListened.module.css'
//import Menu from 'components/Menu'
import Page from '../../components/Page'
import Boutons from 'components/Boutons'

const MostListened = () => {
    return (
<Page>        
        <div className={styles.mostlistened}>
        
            <h1 className={styles.titre}> Les plus écoutés</h1>
            <h2 className={styles.mois}> Novembre </h2>
            <Boutons/>

        </div>
       
</Page>
    )
}

export default MostListened;
