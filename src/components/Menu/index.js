import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Menu.module.css'
import Logo from "./logo.png"

const Menu = () => {
  return (
    <aside>
      <ul>
        <li>
          <NavLink to="/about">A propos</NavLink>
        </li>
        <li>
          <NavLink to="/history">Histoire du mois</NavLink>
        </li>
        <li>
          <NavLink to="/Playlists">Playlists</NavLink>
        </li>
        <li>
          <NavLink to="/mostlistened">Les plus écoutés</NavLink>
        </li>
        <li>
          <NavLink to="/" activeClassName={styles.active}>Accueil</NavLink>
        </li>
        <li>
          <img className={styles.logo} src={Logo} alt="logo"></img>
        </li>
      </ul>
    </aside>
  )
}
export default Menu;
