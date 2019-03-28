import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCountry } from '../actions/index';


class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  }


  onFormSubmit = (e) => {
    e.preventDefault();

    // make call to api..
    this.props.getCountry(this.state.term);
    this.setState({ term: e.target.value })
    this.props.history.push('/main-view');
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          value={this.state.term}
          onChange={this.onInputChange}
          placeholder="Enter Country"
          type="text"
        />
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getCountry }, dispatch)
}

export default connect(null, mapDispatchToProps)(LandingPage);