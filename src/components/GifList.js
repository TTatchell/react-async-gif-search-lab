import React, { Component } from 'react'

export default class GifList extends Component {



    render() {
        return(
            <div className='image-lidt'>
                {this.props.imageSrc.map(gifUrl => <img src={gifUrl} alt='Gif image'/>)}
            </div>
        )
    }
}