// slices/Text/index.js

import { PrismicRichText } from '@prismicio/react'
import styled from 'styled-components';

const Title = styled.h1`
  color: red;
`;

const Text = ({ slice }) => (
  <section>
    <PrismicRichText
      field={slice.primary.text}
      components={{
        heading1: ({ children }) => (
          <Title>{children}</Title>
        ),
      }}
    />
  </section>
)

export default Text