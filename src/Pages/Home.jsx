import React, {useState, createContext} from 'react'
import { Link } from 'react-router-dom'
import Taks_3 from './Taks_3';


export const webcontext = createContext();

export default function Home() {
  const [web, setWeb] = useState("")

  const handleChange = (e) => {
    setWeb(String(e.target.value))
  }

  return (
    <div>
        <h1>Tugas</h1>
      <ul>
        <li>
        <button type="button" className="btn border fs-2 fw-bold text-decoration-none   ">
            <Link to="/Taks_1">a.	Melihat dan mengeksplorasi sistus website selama 30 detik</Link>
        </button>
        </li>

        <li>
        <button type="button" className="btn border fs-2 fw-bold text-decoration-none   ">
            <Link to="/Taks_2">b.	Mencari fitur pada header dalam 10 detik</Link>
        </button>
        </li>

        <li>
        <button type="button" className="btn border fs-2 fw-bold text-decoration-none   ">
            <Link to="/Taks_3">c.	Mencari list game pada website dalam 10 detik </Link>
        </button>
        </li>

        <li>
        <button type="button" className="btn border fs-2 fw-bold text-decoration-none   ">
            <Link to="/Taks_4">d.	Mencari game yang paling disukai dalam 10 detik</Link>
        </button>
        </li>

        <li>
        <button type="button" className="btn border fs-2 fw-bold text-decoration-none   ">
            <Link to="/Headmap">heatmap</Link>
        </button>
        </li>


        <li>
          WEBSITE LAIN
        </li>

        <li>
        <button type="button" className="btn border fs-2 fw-bold text-decoration-none   ">
            <Link to="/OtherWeb">Other Website</Link>
        </button>
        </li>

        <li>
        <button type="button" className="btn border fs-2 fw-bold text-decoration-none   ">
            <Link to="/OtherHeatmap">Other Heatmap</Link>
        </button>
        </li>



      </ul>

    </div>
  )
}
