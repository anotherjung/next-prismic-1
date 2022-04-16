// slices/LinkCards/index.js

import { PrismicRichText, PrismicLink } from '@prismicio/react'
import styled from 'styled-components';

const Grid = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
`;

const Card = styled.div`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  max-width: 300px;
  `
  
const LinkCards = ({ slice }) => (
  <Grid>
    {slice.items.map((item) => (
      <PrismicLink
        key={item.name}
        field={item.link}
      ><Card>{item.name} &rarr;
        <PrismicRichText field={item.description} /></Card>
      </PrismicLink>
    ))}
  </Grid>
)

export default LinkCards