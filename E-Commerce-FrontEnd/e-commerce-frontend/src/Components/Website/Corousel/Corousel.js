import React, {Component} from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import axios from 'axios'
import './corousel.css'

export default class Corousel extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          galleryItems: [],
        };
    }
    getData (){
        axios.get(`https://picsum.photos/v2/list?limit=6`, {})
            .then(res => {
                    const data = res.data
                  const img = data.map(m => 
                    <img src={m.download_url} alt=""/>
                  )
                  this.setState({
                    galleryItems: img
                  })
                }).catch((error) => {
                    console.log(error)
                })
      }
   
      componentDidMount() {
       this.getData()
    }
    render() {
        return (
            <div>
        <AliceCarousel
        items={this.state.galleryItems}
        responsive="800x600"
        autoPlayInterval={2000}
        autoPlayDirection="rtl"
        autoPlay={true}
        fadeOutAnimation={true}
        mouseTrackingEnabled={true}
        disableAutoPlayOnAction={true}
      />
      </div>
        )
    }
}