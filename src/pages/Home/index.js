import React from 'react'
import Menu from 'components/Menu'
import styles from './Home.module.css'
import Searchbar from '../../components/SearchBar'
import Page from '../../components/Page'

const Home = () => {
  return (

<Page>
    <div className={styles.container}>
      <h1 className={styles.title}>SYMPHONIAL</h1>
      <Searchbar />
    </div>
</Page>

  )
}

export default Home
