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
    era: '#922729',
    dark: '#181818',
    statedark: '#2B2C35',
    erawhite: '#E8E8E8',
    Aeon: '#FCFE00',
    Millinnium: '#007B0B',
    Equinox: '#5B01A6',
    Chronos: '#FF00C6',
    Eternal: '#FF7A01',
    LostTime: '#019092',
    Solstice: '#9F9F9F',
    Tempo: '#67FF00',
    Zenith: '0166FF'
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