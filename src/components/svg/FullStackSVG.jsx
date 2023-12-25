import React from 'react';

const FullStackSVG = ({ fill = 'currentColor', ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      style={{
        enableBackground: 'new 0 0 128 128'
      }}
      viewBox="0 0 128 160"
      {...rest}
    >
      <path d="M60.5 38.5h3.7c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-3.7c-.3 0-.5.2-.5.5s.3.5.5.5zM60.5 35.7h3.7c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-3.7c-.3 0-.5.2-.5.5s.3.5.5.5z" />
      <circle cx={54.5} cy={42.6} r={2} />
      <path d="M60.5 41.1h3.7c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-3.7c-.3 0-.5.2-.5.5s.3.5.5.5z" />
      <circle cx={62.3} cy={47.5} r={2} />
      <circle cx={70.6} cy={42.6} r={2} />
      <path
        fill={fill}
        d="M68.8 30.8h3.7c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-3.7c-.3 0-.5.2-.5.5.1.3.3.5.5.5zM68.8 33.6h3.7c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-3.7c-.3 0-.5.2-.5.5s.3.5.5.5zM68.8 36.2h3.7c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-3.7c-.3 0-.5.2-.5.5s.3.5.5.5zM52.7 30.8h3.7c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-3.7c-.3 0-.5.2-.5.5.1.3.3.5.5.5zM33.4 83.5H47v5.8H33.4zM82.9 99.2h2.3c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-2.3c-.3 0-.5.2-.5.5.1.3.3.5.5.5zM46.6 90.9H33.9c-.3 0-.5.2-.5.5s.2.5.5.5h12.7c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zM90 86.6H77.5c-.3 0-.5.2-.5.5s.2.5.5.5H90c.3 0 .5-.2.5-.5s-.2-.5-.5-.5z"
      />
      <path
        fill={fill}
        d="M72.2 82.1v13.8c0 .3.2.5.5.5h22.9c.3 0 .5-.2.5-.5V82.1c0-.3-.2-.5-.5-.5h-23c-.2.1-.4.3-.4.5zm.9.5H95v12.9H73.1V82.6z"
      />
      <path
        fill={fill}
        d="M64 4C30.9 4 4 30.9 4 64s26.9 60 60 60 60-26.9 60-60S97.1 4 64 4zm2.1 22.8h9.1v21.4h-7.4V30.8h-1.7v-4zm-.3 33.3c-.6-1.4-1.4-2.7-2.4-3.7 1.6.2 3.1.9 4.3 1.9-.5.8-1.1 1.4-1.9 1.8zm2.6-1.1c1.4 1.4 2.3 3.4 2.4 5.5h-4.1c0-1.2-.2-2.4-.6-3.5.9-.5 1.7-1.2 2.3-2zM65 60.6c-.7.3-1.5.5-2.3.6v-4.1c1 .9 1.8 2.1 2.3 3.5zm.3.8c.3 1 .4 2 .5 3.1h-3.1v-2.4c.9-.1 1.8-.3 2.6-.7zm.5 4c0 1-.2 2-.5 2.9-.8-.3-1.7-.5-2.6-.6v-2.3h3.1zm-.8 3.8c-.5 1.4-1.3 2.6-2.3 3.5v-4.1c.8.1 1.6.3 2.3.6zm.9.4c.8.5 1.5 1 2 1.8-1.3 1.1-2.8 1.8-4.6 2.1 1.1-1.1 2-2.4 2.6-3.9zm.3-.9c.3-1 .5-2.2.6-3.3h4.1c-.1 2.1-.9 3.9-2.2 5.3-.8-.8-1.6-1.5-2.5-2zm-1-37h1.7v21.4h-4.3v3c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-3h-3.9V31.7h7.5zm-6.9 29.4c-.3 1.1-.5 2.2-.5 3.4h-4.1c.1-2.1.9-3.9 2.3-5.4.6.8 1.4 1.5 2.3 2zm-1.7-2.6c1.2-1.1 2.8-1.8 4.4-2-1.1 1-1.9 2.3-2.5 3.8-.7-.5-1.3-1.1-1.9-1.8zm1.2 6.9c0 1.1.2 2.2.5 3.3-.9.5-1.7 1.2-2.4 2-1.3-1.4-2.1-3.3-2.2-5.3h4.1zm.8 4.2c.6 1.5 1.5 2.9 2.6 3.9-1.8-.2-3.4-1-4.6-2.1.5-.8 1.2-1.4 2-1.8zm.8-.4c.7-.3 1.5-.5 2.3-.5v4.1c-.9-1-1.7-2.2-2.3-3.6zm-.2-.9c-.3-.9-.4-1.9-.5-2.9h3.1v2.3c-.9.1-1.8.3-2.6.6zm-.5-3.8c0-1 .2-2 .5-3 .8.3 1.7.5 2.6.6v2.4h-3.1zm.7-3.9c.5-1.4 1.3-2.7 2.3-3.6v4.1c-.7 0-1.5-.1-2.3-.5zM50 26.8h9v4h-2.1v2.1c-.1-.1-.2-.2-.4-.2h-3.7c-.3 0-.5.2-.5.5s.2.5.5.5h3.7c.2 0 .3-.1.4-.2v2.2c-.1-.1-.2-.2-.4-.2h-3.7c-.3 0-.5.2-.5.5s.2.5.5.5h3.7c.2 0 .3-.1.4-.2v12.3H50V26.8zm1.4 70.5c0 .3-.3.6-.6.6h-10v2.3h4c.3 0 .5.2.5.5s-.2.5-.5.5h-9c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h4V98H30c-.3 0-.6-.3-.6-.6v-2h22.1l-.1 1.9zm2-18.2c-.1 0-.2 0-.2-.1-.1 0-.1.1-.2.1H40.2v2h10.7c.2 0 .3.1.4.2.1.1.2.3.2.4v12.7H29.4V81.7c0-.3.3-.6.6-.6h9.3v-2.9H53c.1 0 .2 0 .2.1.1 0 .1-.1.2-.1h8.4v-3.3c0-.3.2-.5.5-.5s.5.2.5.5v3.3h22.6V81h11.7v16.1H71.2V80.9h13.2v-1.8h-31zm43.3 20.7H71.5c-1 0-1.8-.8-1.9-1.8h29.1c-.2 1-1 1.8-2 1.8z"
      />
      <path
        fill={fill}
        d="M90 90.9H77.5c-.3 0-.5.2-.5.5s.2.5.5.5H90c.3 0 .5-.2.5-.5s-.2-.5-.5-.5z"
      />
    </svg>
  );
};

export default FullStackSVG;
