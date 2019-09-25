import React from 'react'

import styles from './index.module.scss'

const About = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.aboutWrapper}>
        <p className={styles.title}>Om K-play</p>
        <p className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies eget feugiat lectus
          varius nec amet et ut. Sit viverra sed in vulputate commodo urna tellus. Auctor lobortis
          at neque, arcu quam metus, ac metus lorem. Nunc consectetur vel sed turpis sed aliquet
          lacus, suspendisse. Id dui magna tincidunt ut nisi justo, felis sed ac.
        </p>
        <p className={styles.content}>
          Läs mer på 
          {' '}
          <a href="http://kulturakademin.com">Kulturakademin.com</a>
        </p>
      </div>
    </div>
  )
}

export default About
