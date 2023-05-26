import { useEffect, useRef, useState } from "react";
import h337 from "heatmap.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/canvas.css";
import Homepage from "./Web/Homepage";
import { kmeans } from 'ml-kmeans';

export default function HeatmapFix({ hasil }) {
  const heatmapRef = useRef(null);
  const [datas, setDatas] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [popUp, setPopup] = useState([]);
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [varian , setVariance] = useState(0);
  const [deviasi , setDeviasi] = useState(0);

  

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

    const heatmapInstance2 = h337.create({
      container: heatmapRef.current,
    //   radius: 20,
      gradient: {
        0: 'black',
        0.5: 'black',
        1: 'black',
      },
    });

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

    
// Menghitung frekuensi kemunculan setiap nilai terakhir
    let frequency = {};
    for (let i = 0; i < sortedData.length; i++) {
        let lastValue = sortedData[i][sortedData[i].length - 1];
        if (frequency[lastValue]) {
            frequency[lastValue]++;
        } else {
            frequency[lastValue] = 1;
        }
    }

    // Menghilangkan data dengan jumlah value terakhir yang sama jika tidak mencapai 20 data
    let filteredData = [];
        for (let i = 0; i < sortedData.length; i++) {
        let lastValue = sortedData[i][sortedData[i].length - 1];
        if (frequency[lastValue] > 20) {
            filteredData.push(sortedData[i]);
        }
    }
    

    // console.log(filteredData)
    const groupedData = {};

    filteredData.forEach(subarray => {
        const lastValue = subarray[subarray.length - 1];
        if (groupedData[lastValue]) {
        groupedData[lastValue].push(subarray);
        } else {
        groupedData[lastValue] = [subarray];
        }
    });

    console.log(groupedData);
    const mergedData = Object.values(groupedData).reduce((acc, curr) => acc.concat(curr), []);

    
    
    

    
  const newData = [];

  for(let x = 0; x < mergedData.length; x++) { 
    const arr = {
      x : mergedData[x][0],
      y : mergedData[x][1]
    }
    newData.push(arr);
  }

  const points = newData.map((list) => ({
    x: Math.floor(list.x),
    y: Math.floor(list.y),
    value: 1,
  }));

  const data2 = {
    max: 1,
    data: points,
  };

    heatmapInstance2.setData(data2);

    // menghitung data deviasi dan variance
    function calculateVariance(data) {
      const mean = calculateMean(data);
      const differences = data.map(value => (value - mean) ** 2);
      const variance = calculateMean(differences);
      return variance;
    }
    
    function calculateStandardDeviation(data) {
      const variance = calculateVariance(data);
      const standardDeviation = Math.sqrt(variance);
      return standardDeviation;
    }
    
    function calculateMean(data) {
      const sum = data.reduce((acc, value) => acc + value, 0);
      const mean = sum / data.length;
      return mean;
    }

    const variances = [];
    const standardDeviations = [];

for (let i = 0; i < mergedData[0].length; i++) {
  const columnData = mergedData.map(row => row[i]);
  const variance = calculateVariance(columnData);
  const standardDeviation = calculateStandardDeviation(columnData);

  variances.push(variance);
  standardDeviations.push(standardDeviation);
}
setVariance(variances)
setDeviasi(standardDeviations)
console.log("Variance:", variances);
console.log("Standard Deviation:", standardDeviations);

  }, [datas, isDataLoaded]);

  function handleHeatmapHover(event) {
    const containerRect = heatmapRef.current.getBoundingClientRect();
    const x = event.clientX - containerRect.left;
    const y = event.clientY - containerRect.top;

    setHoveredPoint({ x, y });
    setPopupVisible(true);
  }

  function handleHeatmapHover(event) {
    const containerRect = heatmapRef.current.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;
  
    // Calculate random coordinates within a range
    const rangeX = containerWidth - 200; // Adjust the range as needed
    const rangeY = containerHeight - 200; // Adjust the range as needed
  
    const randomX = Math.floor(Math.random() * rangeX);
    const randomY = Math.floor(Math.random() * rangeY);
  
    setHoveredPoint({ x: randomX, y: randomY });
    setPopupVisible(true);
  }

  return (
    <div>
      {!isDataLoaded ? (
        <input type="file" onChange={handleFiles} />
      ) : (
        <input style={{ display: "none" }} type="file" onChange={handleFiles} />
      )}

      <div className="App" ref={heatmapRef} onMouseMove={handleHeatmapHover}>
        <Homepage />
        {isPopupVisible && (
         <div className="popup" style={{ top: hoveredPoint.y, left: hoveredPoint.x }}>
         Hovered Point: X: {hoveredPoint.x}, Y: {hoveredPoint.y}
         <p>Heatmap yang berwarna hitam merupakan <br /> object yang paling menarik pengguna</p>
         <ul>
           <li>Variance: x: {Math.floor(varian[0])}, y: {Math.floor(varian[1])}</li>
           <li>Deviation: x: {Math.floor(deviasi[0])}, y: {Math.floor(deviasi[1])}</li>
         </ul>
       </div>
        )}
      </div>
    </div>
  )
        }