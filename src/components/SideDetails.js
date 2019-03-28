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
      const coords = this.props.country[0].latlng;
      const timeZ = tz(coords[0], coords[1]);
      const options = {
        timeZone: timeZ,
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric',
      },
        formatter = new Intl.DateTimeFormat([], options)
      const time = formatter.format(new Date());
      return time.slice(11, 21);
    }
  }

  render() {
    const time = this.getTime();
    console.log('time', time);

    if (this.props.country[0]) {

    }

    return (
      <p>current time: {time}</p>
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


// import React from 'react';
// import { connect } from 'react-redux';
// import moment from 'moment';

// const SideDetails = (props) => {

//   if (!props.country[0]) {
//     return <p>Loading...</p>
//   }

//   const country = props.country[0];
//   const date = moment.utc(country.timezones[0]);

//   console.log('date', date);
//   console.log('country', country)
//   return (
//     <div className="details">
//       <p>current time: {country.timezones[0]}</p>
//     </div>
//   )
// }

// function mapStateToProps({ country }) {
//   return { country }
// }

// export default connect(mapStateToProps)(SideDetails);