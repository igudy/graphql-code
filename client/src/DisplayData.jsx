import React, { useState } from "react"
import { useQuery, useLazyQuery, gql, useMutation } from "@apollo/client"

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

const QUERY_ALL_MOVIES = gql`
  query GetAllMovies {
    movies {
      name
    }
  }
`

const GET_MOVIE_BY_NAME = gql`
  query Movie($name: String!) {
    movie(name: $name) {
      name
      yearOfPublication
    }
  }
`

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      name
      id
    }
  }
`

const DisplayData = () => {
  const [movieSearched, setMovieSearched] = useState("")

  // Create user states
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [age, setAge] = useState(0)
  const [nationality, setNationality] = useState("")

  const { data, loading, error, refetch } = useQuery(QUERY_ALL_USERS)
  const { data: movieData } = useQuery(QUERY_ALL_MOVIES)
  const [fetchMovie, { data: movieSearchedData, error: movieError }] =
    useLazyQuery(GET_MOVIE_BY_NAME)

  const [createUser] = useMutation(CREATE_USER_MUTATION)

  if (loading) {
    return <h2>Data is Loading...</h2>
  }

  if (data) {
    console.log(data)
  }

  if (error) {
    console.log(error)
  }

  if (movieError) {
    console.log(movieError)
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value)
          }}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value)
          }}
        />
        <input
          type="number"
          placeholder="Age..."
          onChange={(event) => {
            setAge(event.target.value)
          }}
        />
        <input
          type="text"
          placeholder="Nationality..."
          onChange={(event) => {
            setNationality(event.target.value.toUpperCase())
          }}
        />
        <button
          onClick={() => {
            createUser({
              variables: {
                input: {
                  name,
                  username,
                  age: Number(age),
                  nationality,
                },
              },
            })
            refetch()
          }}
        >
          Create User
        </button>
      </div>
      {data &&
        data?.users?.map((user) => {
          return (
            <div>
              <h3>Name: {user.name}</h3>
              <h3>Username: {user.username}</h3>
              <h3>Age: {user.age}</h3>
            </div>
          )
        })}

      {/* Movie data section */}
      {movieData &&
        movieData.movies.map((movie) => {
          return <h3>Movie Name: {movie.name}</h3>
        })}

      <div>
        <input
          type="text"
          placeholder="Enter movie name here..."
          onChange={(event) => {
            setMovieSearched(event.target.value)
          }}
        />
        <button
          onClick={() => {
            fetchMovie({
              variables: {
                name: movieSearched,
              },
            })
          }}
        >
          Fetch Data
        </button>

        {movieSearchedData && (
          <div>
            <h3>MovieName: {movieSearchedData.movie.name}</h3>
            <h3>
              Year of publication: {movieSearchedData.movie.yearOfPublication}
            </h3>
          </div>
        )}
        {movieError && <h3>There was an error fetching the data</h3>}
      </div>
    </div>
  )
}

export default DisplayData
