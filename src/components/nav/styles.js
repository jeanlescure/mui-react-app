import {connect} from 'react-redux';

export default (colors) => ({
  link: {
    textDecoration: 'none',
    color: colors.link,
  },
  selectedMenuItem: {
    backgroundColor: colors.selectedMenuItem,
  },
  selectedLink: {
    fontWeight: 'bold',
  },
});