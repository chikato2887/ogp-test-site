import Image from 'next/image'
import { FC } from 'react'
import styles from './OgpTemplate.module.css'
import questionHeadMan from '../../public/question_head_boy.png'

interface Props {
  content: string
}

const OgpTemplate:FC<Props> = ({ content }) => {
  return (
    <div className={styles.ogptemplate}>
        <div className={styles.assetsPlace}>
          <div className={styles.assetsPlaceSide}></div>
          <div className={styles.variables}>
            {content}
          </div>
          <div className={styles.assetsPlaceSide}></div>
          <div className={styles.questionHeadMan}>
            <Image src={questionHeadMan} alt="question head man" height={310} width={250}/>
          </div>
        </div>
    </div>
  )
}

export default OgpTemplate