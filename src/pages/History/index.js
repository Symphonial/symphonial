import React from 'react'
import styles from './History.module.css'
import Menu from 'components/Menu'
import Page from '../../components/Page'
import img from "./img.png"

const History = () => {
    return (
<Page>        
        <div className={styles.history}>

            <h2 className={styles.titre}> Sonate des trilles du diable </h2>

            <h2 className={styles.artiste}> Giuseppe Tartini </h2>

            <img className={styles.imghistoire} src={img} alt="logo"></img>

            <h3 className={styles.titrehistoire}> Découvir l'Histoire </h3>   

            <p className={styles.histoire}> Giuseppe Tartini a eu une inspiration très étrange pour composer ce morceau. Une nuit, il rêva qu’il avait vendu son âme et que le diable était devenu son serviteur. Il décida alors de lui donner un violon, afin de voir ce dont il était capable.  Il fut si étonné de la qualité de la musique produite par le diable qu’il se réveilla en sursaut. Il se jeta alors sur du papier pour écrire tout ce dont il se souvenait. </p> 

            <p className={styles.histoire}> Ce morceau spectaculaire est diaboliquement difficile même pour les musiciens les plus accomplis. Tartini considère le sonate des trilles du diable comme sa meilleure composition, même s’il pense que cela n’a rien à voir avec l’œuvre que lui a joué le diable lors de son rêve. </p>
            
        </div>
</Page>
    )
    
}

export default History;