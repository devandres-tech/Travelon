import React from 'react';
import { connect } from 'react-redux';

function SideDetails(props) {
  console.log('props', props)
  return (
    <div className="details">
      Side Details
    </div>
  )
}

function mapStateToProps({ country }) {
  return { country }
}

export default connect(mapStateToProps)(SideDetails);