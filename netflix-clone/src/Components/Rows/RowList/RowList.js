import React from 'react'
import Row from "../Row/Row"
import requests from '../../../Utils/requests'

const RowList = () => {
  return (
    <>
    <Row title="FetchComedyMovies" fetchURL={requests.FetchComedyMovies}/>
    <Row title="Horror" fetchURL={requests.FetchHorrorMovies}/>
    <Row title="Romantic" fetchURL={requests.FetchRomanticMovies}/>
    </>
  )
}

export default RowList