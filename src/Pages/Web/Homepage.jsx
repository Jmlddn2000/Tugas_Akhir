import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Populargames from './Popular-games'
import Freetoplay from './Freetoplay'
import ListGames from './ListGames'
import Footer from './Footer'



export default function Homepage({exportData}) {
  return (
    <div style={{backgroundColor: 'black'}}>
        <Navbar exportData = {exportData} />
        <Header />
        <Populargames />
        <Freetoplay />
        <ListGames />
        <Footer />
    </div>
  )
}
