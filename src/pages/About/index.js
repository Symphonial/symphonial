import React from 'react'
import styles from './About.module.css'
import Menu from 'components/Menu'

const About = () => {
    return (
        <div className={styles.container}>
            <Menu/>
            
                
                <p className={styles.texte1}>SYMPHONIAL est une plateforme de streaming audio ayant pour but de démocratiser la musique classique. Pour cela, nous souhaitons mettre en avant les compositeurs les plus connus, mais également des mélodies moins populaires mais qui sont reliées à des histoires étonnantes. Il s’agit pour nous de rendre la musique classique ludique pour les novices, tout en permettant aux passionnés de pouvoir s’instruire. En effet, ils découvriront des titres qu’ils ne connaissent pas et surtout ils apprendront des histoires intéressantes sur ce genre musical. </p>
                <p className={styles.texte2}>Chaque musique que nous proposons sur notre plateforme est donc accompagnée d’une histoire. Cette dernière est présente sous deux formes : un texte et un enregistrement audio d’une voix-off. Il est possible de lire ou d’écouter cette histoire, et ce avant, pendant ou après la lecture de la musique. </p>
                <p className={styles.texte3}>Notre plateforme est entièrement gratuite et l’équipe SYMPHONIAL ne tire aucun bénéfice de ce service. Notre seul et unique objectif est de mettre en avant la musique classique ! </p>
            
        </div>
    )
}

export default About

