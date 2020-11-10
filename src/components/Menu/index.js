import React from 'react'

const Menu = () => {
  return (
    <aside>
      <ul>
        <li>A propos</li>
        <li>Histoire du mois</li>
        <li>Playlists</li>
        <li>Les plus écoutés</li>
        <li className='active'>Accueil</li>
      </ul>
    </aside>
  )
}

export default Menu
