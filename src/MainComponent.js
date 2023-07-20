import React, { Component } from 'react';
import Moviecomponent from './Moviecomponent';

export default class MainComponent extends Component {
  renderList() {
    return this.props.Movies.map((item) => {
        if(item!=null){
            return <Moviecomponent  film={item} />;
        }
    });
  }

  render() {
    return (
      <main>
        {this.renderList()}
      </main>
    );
  }
}
