// slices/LinkCards/index.js

import { PrismicRichText, PrismicLink } from '@prismicio/react'
import styled from 'styled-components';
import tw from "tailwind-styled-components"

const Grid = tw.div`
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
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