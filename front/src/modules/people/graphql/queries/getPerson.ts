import { gql } from '@apollo/client';

export const GET_PERSON = gql`
  query GetPerson($id: String!) {
    findUniquePerson(id: $id) {
      id
      firstName
      lastName
      displayName
      email
      createdAt
      city
      jobTitle
      linkedinUrl
      xUrl
      avatarUrl
      phone
      _activityCount
      company {
        id
        name
        domainName
      }
      Favorite {
        id
        person {
          id
        }
        company {
          id
        }
      }
    }
  }
`;
