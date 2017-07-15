import React from 'react';
import store from '../store';
import {
  fetchPages
} from '../pages';
import Add from './Add.jsx';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
    store.dispatch(fetchPages());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
            <ul>
            {this.state.pages.pages && this.state.pages.pages.map(page => {
                return (
                 <li key={page.id}>{page.title}</li>
                 )
            })}
          </ul>
          <Add />
        </div>
    )
  }
}
