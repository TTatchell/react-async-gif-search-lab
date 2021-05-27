import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

    state = {
        gifs: []
    }

    fetchGifs = async (query) => {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${query}n&api_key=PJ6603vU1izmeUG1pcSTRNBj1rVh828S&rating=g`)

        const json = await response.json()
        this.setState({
            gifs: json.data.slice(0, 3).map(gif => gif.images.original.url)
        })

    }

    render() {
        //this.fetchGifs('dogs')
        return (
            <div>
                < GifSearch fetchGifs={this.fetchGifs}/>
                < GifList imageSrc = {this.state.gifs}/>

            </div>
        )
    }


}
