import { useEffect, useRef, useState } from "react";
import h337 from "heatmap.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/canvas.css";
import { useLocation } from "react-router-dom";
import { kmeans } from 'ml-kmeans';


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
  const location = useLocation()
  const { from } = location.state

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

  useEffect(() => {
    if (!isDataLoaded) {
      console.log("Data belum dimuat.");
      return;
    }

    // merubah data menjadi array
    const data_new = datas.map((obj) => [Math.ceil(obj.x), Math.ceil(obj.y)]);

    // membuat titik
    const titik = [];
    for (let i = 0; i <= 4000; i += 50) {
      titik.push([i, i + 50]);
    }

    // proses kmeans
    const ans = kmeans(data_new, titik.length, { initialization: titik });
    const titik_cluster = ans.clusters;

    const data_cluster = data_new.map((arr, i) => {
      arr.push(titik_cluster[i]);
      return arr;
    });

    // sorting data dari yang terkecil 
    const sortedData = data_cluster.sort((a, b) => a[a.length - 1] - b[b.length - 1]);

    // sorting data by cluster
    const groupedDataCLuster = [];
    for (let i = 0; i < sortedData.length; i++) {
      let lastValue = sortedData[i][sortedData[i].length - 1];
      if (groupedDataCLuster[lastValue]) {
        groupedDataCLuster[lastValue].push(sortedData[i]);
      } else {
        groupedDataCLuster[lastValue] = [sortedData[i]];
      }
    }
    console.log(groupedDataCLuster);
    setgrupCluster(groupedDataCLuster);

    // sorting data cluster terbanyak
    // sorting data cluster terbanyak
    let groupedData = {
      data1: [],
      data2: []
    };

    for (let i = 0; i < sortedData.length; i++) {
      let lastValue = sortedData[i][sortedData[i].length - 1];
      if (groupedData[lastValue]) {
        groupedData[lastValue].push(sortedData[i]);
      } else {
        groupedData[lastValue] = [sortedData[i]];
      }
    }

    // Pemisahan data berdasarkan jumlah cluster
    const data1 = [];
    const data2 = [];
    for (let cluster in groupedData) {
      if (groupedData[cluster].length >= 10 && groupedData[cluster].length <= 30) {
        data1.push(...groupedData[cluster]);
      } else if (groupedData[cluster].length > 30 && groupedData[cluster].length <= 60) {
        data2.push(...groupedData[cluster]);
      }
    }

    // Mendapatkan rata-rata titik dari keduanya
    const data1_x_mean = data1.reduce((sum, obj) => sum + obj[0], 0) / data1.length;
    const data1_y_mean = data1.reduce((sum, obj) => sum + obj[1], 0) / data1.length;
    const data2_x_mean = data2.reduce((sum, obj) => sum + obj[0], 0) / data2.length;
    const data2_y_mean = data2.reduce((sum, obj) => sum + obj[1], 0) / data2.length;

    setPopup1([data1_x_mean, data1_y_mean]);
    setPopup2([data2_x_mean, data2_y_mean]);

    setData1(data1.map(obj => ({ x: obj[0], y: obj[1], value: 1 })));
    setData2(data2.map(obj => ({ x: obj[0], y: obj[1], value: 1 })));


  }, [datas, isDataLoaded]);

  useEffect(() => {
    if (!isDataLoaded) {
      console.log("Data belum dimuat.");
      return;
    }
    const heatmapInstance = h337.create({
      container: heatmapRef.current,
      gradient: {
        0: 'blue', // Warna untuk nilai 0
        0.5: 'blue', // Warna untuk nilai 0.5
        1: 'blue', // Warna untuk nilai 1
      },
    });

    const points = data1.map((list) => ({
      x: Math.floor(list.x),
      y: Math.floor(list.y),
      value: 1,
    }));

    const data = {
      max: 1,
      data: points,
    };

    heatmapInstance.setData(data);
  }, [isDataLoaded, data1])

  useEffect(() => {
    if (!isDataLoaded) {
      console.log("Data belum dimuat.");
      return;
    }
    const heatmapInstance = h337.create({
      container: heatmapRef.current,
      gradient: {
        0: 'green', // Warna untuk nilai 0
        0.5: 'green', // Warna untuk nilai 0.5
        1: 'green', // Warna untuk nilai 1
      },
    });


    const points = data2.map((list) => ({
      x: Math.floor(list.x),
      y: Math.floor(list.y),
      value: 1,
    }));

    const data = {
      max: 1,
      data: points,
    };

    heatmapInstance.setData(data);
  }, [isDataLoaded, data2])


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
            backgroundColor: "#ffffff",
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
          <div className="border border-3 my-5 border-dark" style={{ backgroundColor: "#F0F0F0", borderRadius: "10px", padding: "20px" }}>
            <h3 style={{ color: "#333333", marginBottom: "10px" }}>Biru</h3>
            {/* <p>Titik tengah : {popup1[0]}, {popup1[1]}</p> */}
            <p style={{ fontWeight: "bold", marginBottom: "5px" }}>
              Note: Cluster yang memiliki data lebih dari 10-30
            </p>
            <p style={{ marginBottom: "5px" }}>Jumlah titik: {data1.length}</p>
          </div>
          <div className="border border-3 my-5 border-dark" style={{ backgroundColor: "#F0F0F0", borderRadius: "10px", padding: "20px" }}>
            <h3 style={{ color: "#333333", marginBottom: "10px" }}>Hijau</h3>
            {/* <p>Titik tengah : {popup2[0]}, {popup2[1]}</p> */}
            <p style={{ fontWeight: "bold", marginBottom: "5px" }}>
              Note: Cluster yang memiliki data lebih dari 30-60
            </p>
            <p style={{ marginBottom: "5px" }}>Jumlah titik: {data2.length}</p>
          </div>
          <div className="border border-3 my-5 border-dark" style={{ maxHeight: "200px", overflow: "auto", backgroundColor: "#F0F0F0", borderRadius: "10px", padding: "20px" }}>
            <h3 style={{ color: "#333333", marginBottom: "10px" }}>grupCluster</h3>
            {grupCluster.map((obj, i) => (
              <div key={i} style={{ marginBottom: "5px" }}>
                <p>
                  Cluster {i}: Jumlah titik: {obj.length}
                </p>
              </div>
            ))}
          </div>

        </div>
      )}

      <div className="App" ref={heatmapRef}>
      <iframe src={from} frameborder="0" style={{width: '100%', height: '100vh', zIndex:999}}></iframe>
      </div>
    </div>


  )
}