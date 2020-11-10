import React from 'react'

const Menu = () => {
  return (
    <aside>
      <ul>
        <li><a href="default.asp">A propos</a></li>
        <li><a href="default.asp">Histoire du mois</a></li>
        <li><a href="default.asp">Playlists</a></li>
        <li><a href="default.asp">Les plus écoutés</a></li>
        <li className='active'><a href="default.asp">Accueil</a></li>
      </ul>
    </aside>
  )
}
export default Menu;
