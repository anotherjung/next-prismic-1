import Head from 'next/head'
import Image from 'next/image'
// pages/index.js, top of the file
import { SliceZone, PrismicText, PrismicRichText } from '@prismicio/react'
import { createClient } from '../prismicio'
import { components } from '../slices'
import styled from 'styled-components';

const Title = styled.h1`
  color: red;
`;
const Subtitle = styled.h2`
  color: blue;
`;

const Main= styled.div`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function Index({ page }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title>
          <PrismicText field={page.data.greeting} />
        </Title>

        <Subtitle>
          <PrismicRichText field={page.data.description} />
        </Subtitle>

        <SliceZone
          slices={page.data.slices}
          components={components}
        />
      </Main>

    </div>
  )
}


// pages/[[...path]].js, bottom of the file

// This function fetches the Page document from the CMS.
// The document is passed to the page as a prop.
export async function getStaticProps({ params }) {
  // Client used to fetch CMS content.
  const client = createClient();

  // Page document from the CMS.
  const uid = params.path?.[params.path?.length - 1] || "index";
  const page = await client.getByUID("page", uid);

  // Pass the document as prop to our page.
  return {
    props: { page },
    revalidate: 60, // In seconds
  };
}

// This function tells Next.js which URLs to accept.
// Each Page document from the CMS will be given a URL.
export async function getStaticPaths() {
  // Client used to fetch CMS content.
  const client = createClient();

  // Page documents from the CMS.
  const pages = await client.getAllByType("page");

  // URL paths for each Page document from the CMS.
  return {
    paths: pages.map((page) => ({
      params: {
        path: page.uid === "index" ? [] : [page.uid],
      },
    })),
    fallback: false,
  };
}