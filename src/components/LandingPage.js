import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCountry, getWeather } from '../actions/index';

import MainView from './MainView';
import SideDetails from './SideDetails';



class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      view: false
    };
  }

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.setState({ term: e.target.value });
    this.props.getCountry(this.state.term);
    console.log(this.props.country)
    this.setState({ view: !this.state.view });
  }

  renderView = () => {
    console.log(this.props);
    console.log(this.state.term);
    // const capital =
    return (
      <div className="wrapper">
        <MainView />
        <SideDetails />
      </div>
    )
  }

  renderForm = () => {
    return (
      <div className='background'>
        <form className="container" onSubmit={this.onFormSubmit}>
          <div className='title'>
            Travelon<br />
            <h5>What Country Would You Like To Visit?</h5>
          </div>
          <input
            value={this.state.term}
            onChange={this.onInputChange}
            placeholder="Enter Country"
            type="text"
          />

          <div className="search" />

        </form>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.state.view ? this.renderView() : this.renderForm()}
      </div>
    )
  }
}

const mapStateToProps = ({ country, weather }) => {
  return { country, weather }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getCountry, getWeather }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
