import React from "react"
import { useQuery, gql } from "@apollo/client"

const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      name
      age
      username
    }
  }
`

const DisplayData = () => {
  const { data, loading, error } = useQuery(QUERY_ALL_USERS)

  if (loading) {
    return <h2>Data is Loading...</h2>
  }

  if (data) {
    console.log(data)
  }

  if (error) {
    console.log(error)
  }

  return (
    <div>
      {data &&
        data.users.map((user) => {
          return (
            <div>
              <h3>Name: {user.name}</h3>
              <h3>Username: {user.username}</h3>
              <h3>Age: {user.age}</h3>
            </div>
          )
        })}
    </div>
  )
}

export default DisplayData
