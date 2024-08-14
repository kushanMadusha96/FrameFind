import React from 'react'
import styles from './idea.module.css'
import Button from '@/app/(components)/Button/Button'

export default function page() {
  return (
    <div className={styles.container}>
        <span className={styles.title}>Write your idea about the parts of this application that need to be improved?</span>
        <textarea className={styles.input} placeholder='Write Your Idea...' rows={10} aria-checked={false}/>
        <Button text='send' w={'100%'} bc='#FFC107' br={3} color='white' pt={5} pb={5}/>
    </div>
  )
}
