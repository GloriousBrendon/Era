import { extendTheme } from '@chakra-ui/react'
// import { extendTheme}"@fontsource/alegreya";

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

const colors = {
    red: '#922729',
    dark: '#181818',
    statedark: '#2B2C35',
    white: '#E8E8E8',
    yellow: '#FCFE00',
    green: '#007B0B',
    purple: '#5B01A6',
    pink: '#FF00C6',
    orange: '#FF7A01',
    cyan: '#019092',
    grey: '#9F9F9F',
    lime: '#67FF00',
    blue: '0166FF'
}

const theme = extendTheme({
  fonts: {
    heading: 'sans-serif',
  },
  textStyles: {
  labels: {
    fontSize: '120%',
    fontWeight: 'bold',
    lineHeight: '110%'
  },
},
styles: {
  global: (props) => ({
    'html, body': {
      bg: '#181818',
      color: '#E8E8E8'
    },
  }),
},
components: {
},
breakpoints,
colors
})

export default theme