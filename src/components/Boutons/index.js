import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Mozart from './mozart.png'
import Tartini from './tartini.png'
import Vivaldi from './vivaldi.png'
import Beethoven from './beethoven.png'
import styles from './Boutons.module.css'
import { NavLink } from 'react-router-dom'




const Boutons = () => {
  return (
    <div >
        <NavLink to="/"><img className={styles.boutons} src={Mozart} alt="mozart"></img></NavLink>
        <NavLink to="/"><img className={styles.boutons} src={Tartini} alt="tartini"></img></NavLink>
        <NavLink to="/"><img className={styles.boutons} src={Vivaldi} alt="vivaldi"></img></NavLink>
        <NavLink to="/"><img className={styles.boutons} src={Beethoven} alt="beethoven"></img></NavLink>
    </div>
)
}
 export default Boutons