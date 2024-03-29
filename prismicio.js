import * as prismic from '@prismicio/client' // client to query content
import { enableAutoPreviews } from '@prismicio/next' // plugin for previews
import sm from './sm.json'

export const endpoint = sm.apiEndpoint
export const repositoryName = prismic.getRepositoryName(endpoint)

/* Update the Link Resolver to match your project's route structure,
   previews use this to find your docs */
export function linkResolver(doc) {
  switch (doc.type) {
    case 'index':
      return '/'
    case 'page':
      return `/${doc.uid}`
    default:
      return null
  }
}

// This factory function allows smooth preview setup
export function createClient(config = {}) {
  const client = prismic.createClient(endpoint, {
    ...config,
  })

  enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return client
}