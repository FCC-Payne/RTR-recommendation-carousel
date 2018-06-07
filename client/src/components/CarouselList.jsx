import React from 'react';
import CarouselListEntries from './CarouselListEntries.jsx';
import axios from 'axios'

class CarouselList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendations: [],
      products: [
        'https://s3-us-west-1.amazonaws.com/hr-fec-proj/FEC+Images/100-1.jpeg',
        'https://s3-us-west-1.amazonaws.com/hr-fec-proj/FEC+Images/101-1.jpeg',
        'https://s3-us-west-1.amazonaws.com/hr-fec-proj/FEC+Images/102-1.jpeg',
        'https://s3-us-west-1.amazonaws.com/hr-fec-proj/FEC+Images/103-1.jpeg',
        'https://s3-us-west-1.amazonaws.com/hr-fec-proj/FEC+Images/104-1.jpeg',
        'https://s3-us-west-1.amazonaws.com/hr-fec-proj/FEC+Images/105-1.jpeg',
        'https://s3-us-west-1.amazonaws.com/hr-fec-proj/FEC+Images/106-1.jpeg',
        'https://s3-us-west-1.amazonaws.com/hr-fec-proj/FEC+Images/107-1.jpeg',
        'https://s3-us-west-1.amazonaws.com/hr-fec-proj/FEC+Images/108-1.jpeg',
        'https://s3-us-west-1.amazonaws.com/hr-fec-proj/FEC+Images/109-1.jpeg',
      ]
    };
  }

  componentDidMount(props) {
    var recList = []
    this.props.recommendationData.forEach((elem)=>{
      recList.push(elem)
    })
    recList.forEach((elem)=>{
      //axios.get() use param
    })
    // console.log(this.props)
    // console.log('recList', recList)
  }

  render() {
    const mainListContainerStyle = {
      position: 'center',
      overflow: 'scroll',
      display: 'flex',
      flexDirection: 'row',
      minWidth: '850px',
      minHeight: '200px',
      maxWidth: '850px',
      backgroundColor: 'white',
      justifyContent: 'left',
      marginLeft: '50px',
      marginRight: '50px',
    };

    return (
      <div style={mainListContainerStyle} >
        {this.state.products.map((elem, i)=>{
          return <div key={elem + i}><CarouselListEntries product={elem} /></div>
        })}
      </div>
    );
  }
}

export default CarouselList;
