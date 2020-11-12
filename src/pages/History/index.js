import React from 'react'
import styles from './History.module.css'
import Menu from 'components/Menu'

const History = () => {
    return (
        <div className={styles.history}>
            <Menu/>
            <h1 className={styles.classictitle}>Histoire du mois</h1>
            <h2> Sonate des trilles du diable </h2>
            <h2> Giuseppe Tartini </h2>
            <h3> Découvir l'Histoire </h3>
            <h3> Histoire </h3>
            
            <p>Giuseppe Tartini a eu une inspiration très étrange pour composer ce morceau. Une nuit, il rêva qu’il avait vendu son âme et que le diable était devenu son serviteur. Il décida alors de lui donner un violon, afin de voir ce dont il était capable.  Il fut si étonné de la qualité de la musique produite par le diable qu’il se réveilla en sursaut. Il se jeta alors sur du papier pour écrire tout ce dont il se souvenait. </p> 
            <p>Ce morceau spectaculaire est diaboliquement difficile même pour les musiciens les plus accomplis. Tartini considère le sonate des trilles du diable comme sa meilleure composition, même s’il pense que cela n’a rien à voir avec l’œuvre que lui a joué le diable lors de son rêve. </p>
            
        </div>
    )
    
}

export default History