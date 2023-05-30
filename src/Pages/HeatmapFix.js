import { useEffect, useRef, useState } from "react";
import h337 from "heatmap.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/canvas.css";
import Homepage from "./Web/Homepage";
import { kmeans } from 'ml-kmeans';
import { map } from "jquery";

export default function HeatmapFix({ hasil }) {
  const heatmapRef = useRef(null);
  const [datas, setDatas] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [data1 , setData1] = useState([]);
  const [data2 , setData2] = useState([]);
  const [popup1 , setPopup1] = useState([]);
  const [popup2 , setPopup2] = useState([]);

  

  

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
    
    // sorting data cluster terbanyak
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
  } else if (groupedData[cluster].length > 30 && groupedData[cluster].length <= 50) {
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
  },[isDataLoaded,data1])

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
  },[isDataLoaded,data2])
  

  return (
    <div>
      {!isDataLoaded ? (
        <input type="file" onChange={handleFiles} />
      ) : (
        <input style={{ display: "none" }} type="file" onChange={handleFiles} />
      )}

      <div className="App" ref={heatmapRef}>
        <Homepage />
      </div>

    </div>
  )
        }