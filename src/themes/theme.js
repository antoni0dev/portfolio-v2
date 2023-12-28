export const breakpoints = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500
};

export const QUERIES = {
  tabletAndUp: `min-width: ${breakpoints.tabletMin / 16}rem`,
  laptopAndUp: `min-width: ${breakpoints.laptopMin / 16}rem`,
  desktopAndUp: `min-width: ${breakpoints.desktopMin / 16}rem`
};

export const theme = {
  colors: {
    body: '#FCF6F4',
    text: '#000000',
    fontFamily: "'Source Sans Pro', sans-serif",
    bodyRgba: 'rgba(252, 246, 244, 0.6)',
    textRgba: 'rgba(252, 246, 244, 0.1)'
  }
};
