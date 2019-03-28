import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import tz from 'tz-lookup';

import { getCountry } from '../actions/index';

// import { fetchTime } from '../actions/index';

class SideDetails extends Component {

  getTime = (coords) => {
    if (this.props.country[0]) {
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



export default connect(mapStateToProps)(SideDetails);
