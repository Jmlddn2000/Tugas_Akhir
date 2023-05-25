import { useEffect, useRef, useState } from "react";
import h337 from "heatmap.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/canvas.css"
import Homepage from "./Web/Homepage";

export default function Headmap() {
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

    heatmapInstance.setData(data);
  }, [datas]);


  function handleHeatmapHover(event) {
    const containerRect = heatmapRef.current.getBoundingClientRect();
    const x = event.clientX - containerRect.left;
    const y = event.clientY - containerRect.top;
  
    setHoveredPoint({ x, y });
    setPopupVisible(true);
  }
  

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