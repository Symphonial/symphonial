import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './menu.module.css'

const Menu = () => {
  return (
    <aside>
      <ul>
        <li>
          <NavLink to="/about">A propos</NavLink>
        </li>
        <li><a href="default.asp">Histoire du mois</a></li>
        <li><a href="default.asp">Playlists</a></li>
        <li><a href="default.asp">Les plus écoutés</a></li>
        <li>
          <NavLink to="/" activeClassName={styles.active}>Accueil</NavLink>
        </li>
      </ul>
    </aside>
  )
}
export default Menu;
