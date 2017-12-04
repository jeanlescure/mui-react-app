import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createMuiTheme, MuiThemeProvider, withStyles} from 'material-ui/styles';
import {CircularProgress} from 'material-ui/Progress';

import * as ThemeActions from '../redux/theme/actions';
import * as Themes from '../themes';

const StyleWrapper = (props) => {
  return (
    <div {...props}/>
  );
};

class App extends Component {
  props: {
    themeSet: (string, any) => void,
    children: Children,
    themeState: ?any,
  };

  componentWillMount() {
    this.initTheme(this.props.defaultThemeName, this.props.defaultThemeShade);
  }

  initTheme = (name: string, shade: string) => {
    const theme = Object.assign({}, Themes[name], {type: shade});
    this.props.themeSet(name, shade, theme);
  };

  render() {
    const {
      children,
      themeState: {
        shade,
        theme,
      }
    } = this.props;

    const muiTheme = (theme)? createMuiTheme(theme) : null;
    const ShadedStyleWrapper = (muiTheme)? withStyles(muiTheme.styles(shade))(StyleWrapper) : (<div></div>);

    return (
      <div>
        {(theme)? 
          (
            <MuiThemeProvider theme={muiTheme}>
              <ShadedStyleWrapper>
                {children}
              </ShadedStyleWrapper>
            </MuiThemeProvider>
          )
          :
          (<div></div>)
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    themeState: state.themeRedux,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ThemeActions, dispatch);
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App)
);
