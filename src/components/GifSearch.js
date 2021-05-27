import React, { Component } from 'react'

export default class GifSearch extends Component {

    state = {
        query: ''
    }

    handleChange = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    handleClick = (event) => {
        event.preventDefault()

        this.props.fetchGifs(this.state.query)

    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor='search'>Search:</label>

                    <input name='search' onChange={event => this.handleChange(event)}/>

                    <button type='submit' onClick={this.handleClick}>Search</button>
                </form>
            </div>
        )
    }
}