import React from 'react';

export default class App extends React.Component {
  render() {
    return (<div>
      <p>React boilerplate</p>
    </div>);
  }
}
App.propTypes = { children: React.PropTypes.object };
