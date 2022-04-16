// slices/Text/index.js

import { PrismicRichText } from '@prismicio/react'
import styles from '../../styles/Home.module.css'

const Text = ({ slice }) => (
  <section className={styles.description}>
    <PrismicRichText
      field={slice.primary.text}
      components={{
        heading1: ({ children }) => (
          <h1 className={styles.title}>{children}</h1>
        ),
      }}
    />
  </section>
)

export default Text