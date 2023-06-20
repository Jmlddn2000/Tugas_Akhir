import { useEffect, useRef, useState  } from "react";
import { Link } from 'react-router-dom';
import h337 from "heatmap.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/canvas.css";
import Homepage from "./Web/Homepage";

export default function HeatmapFix({ hasil }) {
  const heatmapRef = useRef(null);
  const [datas, setDatas] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [popup1, setPopup1] = useState([]);
  const [popup2, setPopup2] = useState([]);
  const [grupCluster, setgrupCluster] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(true);
  const [isBlueHeatmapVisible, setIsBlueHeatmapVisible] = useState(true);
  const [isGreenHeatmapVisible, setIsGreenHeatmapVisible] = useState(true);

  function handleFiles(e) {
    setIsDataLoaded(false);
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onload = function (event) {
      const jsonData = JSON.parse(event.target.result);
      setDatas(jsonData);
      setIsDataLoaded(true);
    };

    reader.readAsText(file);
  }

  useEffect(() => {
    if (!isDataLoaded) {
      console.log("Data belum dimuat.");
      return;
    }

    const heatmapInstance = h337.create({
      container: heatmapRef.current,
      radius: 50,
    });

    const points = datas.map((list) => ({
      x: Math.floor(list.x),
      y: Math.floor(list.y),
      value: 1,
    }));

    const data = {
      max: 1,
      data: points,
    };

    heatmapInstance.setData(data);
  }, [datas, isDataLoaded]);



  return (
    <div >
      {!isDataLoaded ? (
        <label htmlFor="file-input" className="file-input-label" style={{
          position: "fixed",
          top: "10px",
          // right: "-10px",
          backgroundColor: "#ffffff",
          color: "#333333",
          borderRadius: "10px",
          cursor: "pointer",
          zIndex: "999",
          // boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        }}>
          <span>Choose File</span>
          <input id="file-input" type="file" onChange={handleFiles} />
        </label>
      ) : (
        <input style={{ display: "none" }} type="file" onChange={handleFiles} />
      )}

      {isPopupVisible && (
        <>
          <button
            onClick={() => setIsPopupVisible(!isPopupVisible)}
            style={{
              position: "fixed",
              top: "10px",
              right: "10px",
              padding: "8px",
              backgroundColor: "#ffffff",
              color: "#333333",
              borderRadius: "10px",
              cursor: "pointer",
              zIndex: "999",
              // boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            {isPopupVisible ? "Show Popup" : "Hide Popup"}
          </button>

          
        </>
      )}

      {!isPopupVisible && (
        
        <div
          className="popup"
          style={{
            position: "fixed",
            top: "50px",
            right: "50px",
            padding: "20px",
            backgroundColor: "#e9692c",
            color: "#333333",
            borderRadius: "10px",
            // boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
        <h4 style={{
          textAlign: "center",
        }}>Deskripsi Koordinat </h4>

          <button
            onClick={() => setIsPopupVisible(!isPopupVisible)}
            style={{
              position: "absolute",
              top: "5px",
              right: "5px",
              padding: "5px",
              paddingRight: "10px",
              paddingLeft: "10px",
              backgroundColor: "#ffffff",
              color: "#333333",
              borderRadius: "10px",
              cursor: "pointer",
             
              // boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            X
          </button>

          
          <button type="button" className="btn btn-outline-dark fs-4 fw-bold">
              <Link style={{textDecoration: "none",  marginLeft: "20px",}} to="/Titik_Fokus_Heatmap" state={{ from : datas}}>Titik Fokus Heatmap</Link>
          </button>

        </div>
      )}

      <div className="App" ref={heatmapRef}>
        <Homepage />
      </div>
    </div>


  )
}