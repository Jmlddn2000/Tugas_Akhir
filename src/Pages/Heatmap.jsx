import React, { useRef, useEffect, useState } from 'react';
import { Overlay, Tooltip } from 'react-bootstrap';
import h337 from 'heatmap.js';

const HeatmapComponent = () => {
  const heatmapRef = useRef(null);
  const [tooltipData, setTooltipData] = useState(null);

  useEffect(() => {
    const heatmapInstance = h337.create({
      container: heatmapRef.current,
      gradient: {
        0.1: 'blue',
        0.2: 'cyan',
        0.3: 'lime',
        0.4: 'yellow',
        0.5: 'orange',
        0.6: 'red',
      },
    });

    const points = [
      { x: 10, y: 10, value: 1 },
      { x: 20, y: 20, value: 2 },
      { x: 30, y: 30, value: 3 },
      { x: 40, y: 40, value: 4 },
      { x: 50, y: 50, value: 5 },
      { x: 60, y: 60, value: 6 },
      { x: 70, y: 70, value: 7 },
      { x: 80, y: 80, value: 8 },
      { x: 90, y: 90, value: 9 },
      { x: 100, y: 100, value: 10 },
      
    ];
    const max = 100;

    heatmapInstance.setData({
      max,
      data: points,
    });

    const handleMousemove = (event) => {
      const rect = heatmapRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const value = heatmapInstance.getValueAt({ x, y });
      setTooltipData(value);
    };

    heatmapRef.current.addEventListener('mousemove', handleMousemove);

    return () => {
      heatmapRef.current.removeEventListener('mousemove', handleMousemove);
      heatmapInstance.remove();
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <div ref={heatmapRef} style={{ width: '100%', height: '400px' }} />
      {tooltipData !== null && (
        <Overlay target={heatmapRef.current} show={true} placement="top">
          {(props) => (
            <Tooltip id="heatmap-tooltip" {...props}>
              {tooltipData}
            </Tooltip>
          )}
        </Overlay>
      )}
    </div>
  );
};

export default HeatmapComponent;
