import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PlaceDetail from './PlaceDetail';



class Places extends Component {
  state = {
    places: [],
    placeView: ''
  }


  componentWillMount() {
    const URL = 'https://api.foursquare.com/v2/venues/explore?'
    const client_id = 'F3312LCN1V4BQDQ02EIN2LQEQ52JUP0UJHYF3JHQ2NTPELD2';
    const client_secret = '4ZTKSYIE2YS4XUXM3WQWEPB4JV4DBSAWARYJTR2XLOO4YS4H'
    const city = this.props.country[0].capital;
    const url = `${URL}client_id=${client_id}&client_secret=${client_secret}&v=20180323&near=${city}`;
    axios.get(url)
      .then(res => {
        console.log('res???', res.data.response.groups[0].items);
        for (let i = 0; i < res.data.response.groups[0].items.length; i += 5) {
          this.state.places.push(res.data.response.groups[0].items[i]);
        }

        const placeEl = this.state.places.map(function (place) {
          console.log('ejsd', place);
          return <PlaceDetail
            category={place.venue.categories[0].name}
            address={place.venue.location.address}
            key={place.venue.name}
            name={place.venue.name} />
        })

        this.setState({ placeView: placeEl })
      });
  }

  render() {
    return (
      <div className="place-container">
        {this.state.placeView}
      </div>
    )
  }
}

const mapStateToProps = ({ country }) => {
  return { country }
}

export default connect(mapStateToProps)(Places);