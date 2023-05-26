import { useEffect, useRef, useState } from "react";
import h337 from "heatmap.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/canvas.css"
import Homepage from "./Web/Homepage";
// import heatmap from 'heatmap.js';
import { kmeans } from 'ml-kmeans';
import { data } from "jquery";


export default function Headmap({hasil}) {
  const heatmapRef = useRef(null);
  const [datas, isDAtas] = useState([]);
  const inputElement = document.getElementById("json-file");
  const [isdata, setHilang] = useState("init");
  const [popUp, isPopup] = useState([])
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);


  // const height = window.innerHeight
  

  const height = document.documentElement.clientHeight;
  const width = document.documentElement.clientWidth;
  // console.log(height,width)


  function handleFiles(e) {
    setHilang("hilang")
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onload = function (event) {
      const jsonData = JSON.parse(event.target.result);
      isDAtas(jsonData);
    };

    reader.readAsText(file);
  }


  useEffect(() => {
    var heatmapInstance = h337.create({
      container: heatmapRef.current,
      // gradient : {
      //   '0': 'yellow',
      //   '0.5': 'green',
      //   '1.0': 'blue'
      // }
    });

    var points = [];
    var max = 0;

    if (datas.length === 0) {
      console.log("blm ada datanya");
    } else {
      datas.forEach((list) => {
        isPopup(list)
        var point = {
          x: Math.floor(list.x),
          y: Math.floor(list.y),
          value: 1,
        };
        points.push(point);
      });
    }

    var data = {
      max: max,
      data: points,
    };

    


    // console.log(hasil, "hasil")
   

    heatmapInstance.setData(data);
  }, [datas]);

  useEffect(() => {
    const heatmapInstance2 = h337.create({
      container: heatmapRef.current,
      radius: 20,
      gradient: {
        0: 'black',
        0.5: 'black',
        1: 'black',
      },
    });

    var points = [];
    var max = 0;


    if (hasil.length === 0) {
      console.log("blm ada datanya");
    } else {
      hasil.forEach((list) => {
        isPopup(list)
        var point = {
          x: Math.floor(list.x),
          y: Math.floor(list.y),
          value: 1,
        };
        points.push(point);
      });
    }

    var data = {
      max: max,
      data: points,
    };

    //  const data2 = {
    //   max: 1,
    //   data: [
    //     { x: 105, y: 15, value: 0.8 },
    //     { x: 225, y: 255, value: 0.3 },
    //     { x: 152, y: 145, value: 0.8 },
    //     { x: 215, y: 254, value: 0.3 },
    //     { x: 145, y: 151, value: 0.8 },
    //     { x: 256, y: 251, value: 0.3 },
    //     { x: 158, y: 154, value: 0.8 },
    //     { x: 253, y: 245, value: 0.3 },
    //   ],
    // };

    // console.log(hasil, "hasil")

    heatmapInstance2.setData(data);

  },[datas])


  function handleHeatmapHover(event) {
    const containerRect = heatmapRef.current.getBoundingClientRect();
    const x = event.clientX - containerRect.left;
    const y = event.clientY - containerRect.top;
  
    setHoveredPoint({ x, y });
    setPopupVisible(true);
  }

  // useEffect(()=> {
  //   console.log(hasil, "bisa")
  // },[])

  

  return (
    <div>
      {isdata === "init" ? (
        <input type="file" onChange={handleFiles} />
      ) : (
        <input style={{ display: "none" }} type="file" onChange={handleFiles} />
      )}

      <div className="App" ref={heatmapRef} onMouseMove={handleHeatmapHover}>
        <Homepage />
        {isPopupVisible && (
          <div className="popup">
            Hovered Point: X: {hoveredPoint.x}, Y: {hoveredPoint.y}
          </div>
        )}

      </div>


    </div>
  );
}