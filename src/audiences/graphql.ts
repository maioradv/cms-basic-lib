import { PaginatedGQLQueryDto, Resolvers } from "@maioradv/client-core";

export const AudiencesResolvers: Resolvers<['audiences'],['removeAudiences','unsubscribeAudience','restoreAudience']> = {
  query: {
    audiences: {
      name: 'audiences',
      query: `query AudienceList($limit: Int, $after: Int, $before: Int, $sorting: String) {
        audiences(limit: $limit, after: $after, before: $before, sorting: $sorting) {
          edges { node { id } cursor }
          nodes {
            id
            name
            phone
            email
            lastName
            customerId
            uuid
            locale
            metadata
            createdAt
            updatedAt
            deletedAt
          }
          meta {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
        }
      }`,
    },
  },
  mutation: {
    removeAudiences: {
      name: 'removeAudiences',
      query: `mutation AudienceDelete($id: [Int!]!) {
        removeAudiences(id: $id) { count }
      }`,
    },
    unsubscribeAudience: {
      name: 'unsubscribeAudience',
      query: `mutation AudienceUnsubscribe($token: String!) {
        unsubscribeAudience(token: $token) {  
          id
          name
          phone
          email
          lastName
          customerId
          uuid
          locale
          metadata
          createdAt
          updatedAt
          deletedAt
        }
      }`,
    },
    restoreAudience: {
      name: 'restoreAudience',
      query: `mutation AudienceRestore($id: Int!) {
        restoreAudience(id: $id) {  
          id
          name
          phone
          email
          lastName
          customerId
          uuid
          locale
          metadata
          createdAt
          updatedAt
          deletedAt
        }
      }`,
    },
  },
};

export type QueryAudienceGQLDto = PaginatedGQLQueryDto;