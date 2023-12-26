import React from 'react';

const ResumeSVG = ({ fill = 'currentColor', ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fillRule="evenodd"
    clipRule="evenodd"
    {...rest}
  >
    <path
      fill={fill}
      d="M22 0H2v24h14l6-6V0zm-6 18h4.36L16 22.385V18zm-3 1H5v1h8v-1zm0-3H5v1h8v-1zm6-2v-1H5v1h14zm-7.059-4.968c-1.147-.265-2.214-.497-1.697-1.473C11.817 4.589 10.661 3 9 3 7.306 3 6.179 4.65 7.756 7.559c.532.982-.575 1.214-1.697 1.473-1.024.237-1.062.745-1.059 1.635l.001.333h7.997l.001-.323c.004-.896-.03-1.407-1.058-1.645zM19 10h-4v1h4v-1zm0-2V7h-4v1h4zm0-4h-4v1h4V4z"
    />
  </svg>
);

export default ResumeSVG;
