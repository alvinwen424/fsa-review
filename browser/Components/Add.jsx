import React from 'react';
import store from '../store';
import {
  addPage
} from '../pages';

export default class Add extends React.Component {

  constructor() {
    super();
    this.state = Object.assign({}, store.getState(), {
      title: '',
      content: ''
    })

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    store.dispatch(addPage({
      title: evt.target.title.value,
      content: evt.target.content.value,
      authorId: 1
    }))
    console.log(this.state);
    this.setState({
      title: '',
      content: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Title: </label><br />
          <input
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          /><br />
          <label>Content: </label><br />
          <input
            name="content"
            onChange={this.handleChange}
            value={this.state.content}
          /><br /><br />
          <button type="submit">Add</button>
        </form>
    </div>
    )
  }
}
