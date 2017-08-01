import React from 'react';

const asyncComponent = (getComponent) => {
  return class AsyncComponent extends React.Component {
    static Component = null;
    state = { Component: AsyncComponent.Component };

    componentWillMount() {
      const { Component } = this.state;
      if (!this.state.Component) {
        getComponent().then(Component => {
          AsyncComponent.Component = Component;
          this.setState({ Component });
        });
      }
    }

    render() {
      const { Component } = this.state;
      if (!Component) return null;
      return <Component {...this.props} />;
    }
  };
};

const Login = asyncComponent(() => import('./components/login').then(module => module.default));
const Register = asyncComponent(() => import('./components/register').then(module => module.default));
const Account = asyncComponent(() => import('./components/me').then(module => module.default));
const ConfirmEmail = asyncComponent(() => import('./components/confirmEmail').then(module => module.default));

const routes = [
  {
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    path: '/me',
    exact: true,
    default: true,
    auth: true,
    component: Account,
  },
  {
    path: '/register',
    exact: true,
    component: Register,
  },
  {
    path: '/confirm_email',
    exact: true,
    component: ConfirmEmail,
  },
];

export const defaultRoute = () => routes.filter(r => r.default)[0];
export default routes;
