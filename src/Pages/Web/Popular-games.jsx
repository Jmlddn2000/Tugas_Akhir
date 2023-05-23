import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/home.css';
// import { gql, useQuery, useMutation } from '@apollo/client';
import { Link } from 'react-router-dom'


export default function Populargames() {

  return (
    <div className='popularcontent'>
        <div className='titlecontent'>
            <h1>Popular Games</h1>
        </div>
        <div className="container row row-cols-md-3 g-3 ms-5 ps-5 py-5">
        </div>
    </div>
    )
}