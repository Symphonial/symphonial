import React from 'react'
import styles from './SearchBar.module.css'

const Searchbar = () => {
    return (
    <input className={styles.recherche} type="text" placeholder="Trouver un artiste, une oeuvre, une playlist..."/> 
    )    
}

export default Searchbar