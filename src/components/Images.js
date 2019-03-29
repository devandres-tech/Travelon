import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import ImageDetail from './ImageDetail';

class Images extends Component {

  state = {
    images: [],
    imagesView: ''
  }

  componentWillMount() {
    const PHOTO_ROOT_UTL = 'https://pixabay.com/api/?'
    const PHOTO_KEY = '12028009-236b40a361370a5be5a372059';
    const city = this.props.country[0].capital;
    const url = `${PHOTO_ROOT_UTL}&key=${PHOTO_KEY}&q=${city}&image_type=photo`;
    axios.get(url)
      .then(res => {
        console.log('res', res.data);
        for (let i = 0; i < res.data.hits.length; i += 4) {
          this.state.images.push(res.data.hits[i]);
        }

        console.log('im', this.state.images);
        const imgElement = this.state.images.map(function (img) {
          console.log('img', img.userImageURL);
          return <ImageDetail tags={img.tags} img={img.webformatURL} />
        })

        this.setState({ imagesView: imgElement })
      });
  }

  render() {
    return (
      <div className="images-container">
        {this.state.imagesView}
      </div>
    )
  }
}

const mapStateToProps = ({ country }) => {
  return { country }
}

export default connect(mapStateToProps)(Images);

