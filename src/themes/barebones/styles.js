import palette from './palette';
import {darken} from 'material-ui/styles/colorManipulator';

export default shade => ({
  '@global': {
    'body *, html *': {
      boxSizing: 'border-box',
    },
    'html, body': {
      backgroundColor: palette.shades[shade].background.default,
      fontSize: '16px',
      margin: 0,
      padding: 0,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    'h1, h2, h3, h4, h5, h6, p': {
      color: `${palette.shades[shade].text.primary} !important`,
    },
    a: {
      color: palette.common.teal,
      textDecoration: 'underline',
    },
    '.page-content': {
      padding: '10px',
    },
  },
});