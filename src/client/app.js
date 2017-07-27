import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import routes, { defaultRoute } from './routes';
// import { logout } from '../../actions/login';
import { Auth } from './kontrolo';

export class App extends Component {

  render() {
    const { user, history, logout } = this.props;
    // const handleClick = () => history.push(`/people/${user._id}`);
    // const handleLogout = () => logout();
    const makeAuthRoute = route => (props) => {
      console.log(route);
      if (route.auth) {
        return (
          <Auth redirect>
            <route.component {...props} />
          </Auth>
        );
      }
      return <route.component {...props} />;
    };

    return (
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={makeAuthRoute(route)}
          />
        ))}
        <Auth redirect>
          <Route component={defaultRoute().component} />
        </Auth>
      </Switch>
    );
  }
}

App.propTypes = {
  user: PropTypes.object,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.currentUser.user,
});

const actions = {}; //{ logout };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));