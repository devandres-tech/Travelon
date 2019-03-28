import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import axios from 'axios';
import tz from 'tz-lookup';

import { fetchTime } from '../actions/index';

class SideDetails extends Component {

  componentDidUpdate() {
    this.getTime();
  }

  getTime = (coords) => {
    if (this.props.country[0]) {
      console.log(this.props.country)
      const coords = this.props.country[0].latlng;
      const timeZ = tz(coords[0], coords[1]);
      const options = {
        timeZone: timeZ,
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric',
      },
        formatter = new Intl.DateTimeFormat([], options)
      const time = formatter.format(new Date());
      return time.slice(11, 22);
    }
  }

  render() {
    const time = this.getTime();
    console.log('time', time);

    if (this.props.country[0]) {

    }

    return (
      <div className="details">
        <p>current time: {time}</p>
      </div>
    )
  }
}

function mapStateToProps({ country }) {
  return { country }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchTime }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SideDetails);
