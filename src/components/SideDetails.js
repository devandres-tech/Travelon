import React, { Component } from 'react';
import { connect } from 'react-redux';
import tz from 'tz-lookup';

class SideDetails extends Component {
  getCountryName = () => {
  if (this.props.country[0]) {
    const name = this.props.country[0].name;
    return name;
    }
  }

  getFlag = () => {
  if (this.props.country[0]) {
    const flag = this.props.country[0].flag;
    return flag;
    }
  }

  getTime = () => {
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

  getCapital = () => {
  if (this.props.country[0]) {
    const capital = this.props.country[0].capital;
    return capital;
    }
  }


  getLanguage = () => {
  if (this.props.country[0]) {
    const language = this.props.country[0].languages[0].name;
    return language;
    }
  }

  getCurrency = () => {
  if (this.props.country[0]) {
    const currency = this.props.country[0].currencies[0].name;
    return currency;
    }
  }

  getCallingCode = () => {
  if (this.props.country[0]) {
    const callingCode = this.props.country[0].callingCodes;
    return callingCode;
    }
  }



  render() {
    //  if (this.props.country[0]) {
    //
    //
    //
    // }
    // console.log("this is the data: ",data.name);
    // console.log(this.props.capital[0].languages[0].name)
    const flag = this.getFlag();
    const language = this.getLanguage();
    const time = this.getTime();
    const name = this.getCountryName();
    const capital = this.getCapital();
    const currency = this.getCurrency();
    const callingCode = this.getCallingCode();

    return (
      <div className="right-panel">
        <ul className="right-panel__list">
        <h5>
        <span className='font'>
          <li  className='flag'> <img src={flag} height='80' width='120'/> </li><br/>
          <li  className="time">{name}'s Current Time: <br/> <strong>{time}</strong> </li><br/>
          <li  className='time'>{name}'s Capital: <br/> <strong>{capital}</strong> </li><br/>
          <li  className='time'>{name}'s Official Language:<br/> <strong>{language}</strong> </li><br/>
          <li  className='time'>{name}'s Currency: <br/> <strong>{currency}</strong> </li><br/>
          <li  className='time'>{name}'s Dialing Code: <br/> <strong>+{callingCode}</strong></li>
          </span>
          </h5>
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ country }) {
  return { country }
}



export default connect(mapStateToProps)(SideDetails);
