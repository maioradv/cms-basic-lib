import { PaginatedGQLQueryDto } from "../core/dto/pagination";
import { Resolvers } from "../core/types/resolver";

export const ReservationsResolvers:Resolvers<['reservations'],['removeReservations','pushReservation']> = {
  query:{
    reservations:{
      name:'reservations',
      query: `query ReservationList($limit: Int, $after: Int, $before: Int, $sorting: String){
        reservations(limit: $limit, after: $after, before: $before, sorting: $sorting){
          edges {
            node {
              id
            }
            cursor
          }
          nodes {
            id
            source
            status
            date
            guestCount
            name
            lastName
            phone
            email
            notes
            metafields {
              key
              value
            }
            createdAt
            updatedAt
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
  mutation:{
    removeReservations:{
      name:'removeReservations',
      query: `mutation ReservationDelete($id: [Int!]!){
        removeReservations(id: $id) {
          count
        }
      }`,
    },  
    pushReservation:{
      name:'pushReservation',
      query: `mutation ReservationPush($source: ReservationSource, $date: DateTime!, $guestCount: Int!, $name: String!, $lastName: String, $phone: String!, $email: String, $notes: String, $metafields: [MetafieldEntry!]){
        pushReservation(
          source: $source,
          date: $date,
          guestCount: $guestCount,
          name: $name,
          lastName: $lastName,
          phone: $phone,
          email: $email,
          notes: $notes,
          metafields: $metafields
        ) {
          id
          source
          status
          date
          guestCount
          name
          lastName
          phone
          email
          notes
          metafields {
            key
            value
          }
          createdAt
          updatedAt
        }
      }`
    },
  }
}

export type QueryReservationGQLDto = PaginatedGQLQueryDto