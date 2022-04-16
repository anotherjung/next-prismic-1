// slices/LinkCards/index.js

import { PrismicRichText, PrismicLink } from '@prismicio/react'
import styles from '../../styles/Home.module.css'

const LinkCards = ({ slice }) => (
  <section className={styles.grid}>
    {slice.items.map((item) => (
      <PrismicLink
        key={item.link.url}
        field={item.link}
        className={styles.card}
      >
        <h2>{item.name} &rarr;</h2>
        <PrismicRichText field={item.description} />
      </PrismicLink>
    ))}
  </section>
)

export default LinkCards