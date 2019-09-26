import React from 'react'

import styles from './index.module.scss'

const About = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.aboutWrapper}>
        <p className={styles.title}>Om K-play</p>
        <p className={styles.content}>
          K-Play erbjuder kompetensutveckling med såväl spets som bredd för professionella
          verksamheter, grupper och individer inom scenkonst, musik, film och tv i Västsverige.
          Ägare är Film i Väst, Göteborgs Operan, Göteborgs Symfoniker, Folkteatern, Regionteater
          Väst samt Teater Halland
        </p>
        <p className={styles.content}>
          Läs mer på <a href="http://kulturakademin.com">Kulturakademin.com</a>
        </p>
      </div>
    </div>
  )
}

export default About
