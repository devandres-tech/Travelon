import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Images extends Component {

  componentWillMount() {
    const PHOTO_ROOT_UTL = 'https://pixabay.com/api/?'
    const PHOTO_KEY = '12028009-236b40a361370a5be5a372059';
    const city = this.props.country[0].capital;
    const url = `${PHOTO_ROOT_UTL}&key=${PHOTO_KEY}&q=${city}&image_type=photo`;
    axios.get(url)
      .then(res => {
        console.log('res', res.data);
      })
  }

  render() {
    return (
      <div>
        <h1>hello imgaes</h1>
      </div>
    )
  }
}


const mapStateToProps = ({ country }) => {
  return { country }
}


export default connect(mapStateToProps)(Images);

