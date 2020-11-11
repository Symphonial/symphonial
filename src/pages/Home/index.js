import React from 'react'
import Menu from 'components/Menu'
import styles from './Home.module.css'

const Home = () => {
  return (
    
    <div className={styles.container}>
      <Menu/>
      <h1 className={styles.title}>SYMPHONIAL</h1>
      <p className={styles.footer}>Ce site est la propriété exclusive de SYMPHONIAL</p>
    </div>
   

  )
}

export default Home
