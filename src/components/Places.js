import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
// https://api.foursquare.com/v2/venues/explore?client_id=F3312LCN1V4BQDQ02EIN2LQEQ52JUP0UJHYF3JHQ2NTPELD2&client_secret=4ZTKSYIE2YS4XUXM3WQWEPB4JV4DBSAWARYJTR2XLOO4YS4H&v=20180323&near=germany
class Places extends Component {

  componentWillMount() {
    const URL = 'https://api.foursquare.com/v2/venues/explore?'
    const client_id = 'F3312LCN1V4BQDQ02EIN2LQEQ52JUP0UJHYF3JHQ2NTPELD2';
    const client_secret = '4ZTKSYIE2YS4XUXM3WQWEPB4JV4DBSAWARYJTR2XLOO4YS4H'
    const city = this.props.country[0].capital;
    const url = `${URL}client_id=${client_id}&client_secret=${client_secret}&v=20180323&near=${city}`;
    axios.get(url)
      .then(res => {
        console.log('res', res.data);
      })
  }

  render() {
    return (
      <div>
        <h1>Get places</h1>
      </div>
    )
  }
}

const mapStateToProps = ({ country }) => {
  return { country }
}

export default connect(mapStateToProps)(Places);