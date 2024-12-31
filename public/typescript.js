import React from 'react';

const DynamicTypescript = ({ color }) => {
  return (
    <svg
      width="50px"
      height="50px"
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="5"
        width="40"
        height="40"
        style={{
          fill: "none",
          stroke: color || "#000000",
          strokeWidth: 2,
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
        }}
      />
      <g>
        <polygon
          points="15,26.445 20,26.445 20,42 24,42 24,26.445 29,26.445 29,23 15,23"
          fill={color}
        />
        <path
          d="M34.209,28.15c0-1.083,0.769-2.096,2.9-2.096s4.018,1.258,4.018,1.258l0.14-3.704c0,0-11.25-3.075-11.25,4.717
            c0,5.73,7.721,5.73,7.721,8.315c0,0.245,0.105,2.026-2.62,2.026c-2.725,0-4.996-1.712-4.996-1.712v4.158
            c0,0,11.879,3.843,11.879-4.822C42,30.665,34.209,30.945,34.209,28.15z"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default DynamicTypescript;
