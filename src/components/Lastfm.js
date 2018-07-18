import React, { Component } from 'react'

class Lastfm extends Component {
  constructor(props) {
    super(props)
    this.token = 'sRuRLvmgClP4NJMpIH2DwRlH9ESzD2oA'
    this.apiKey = '7ad9d9405194df8a622c74f88d66862f'
    this.sharedSecret = '52b788ec948cb76b91a1305875b658c5'
    this.authUrl = 'https://www.last.fm/api/auth/?api_key=7ad9d9405194df8a622c74f88d66862f'
    this.baseApiUrl = 'http://ws.audioscrobbler.com/2.0/'
  }

  getAlbumInfo = e => {
    e.preventDefault()

    return fetch(
      `${this.baseApiUrl}?method=album.getinfo&api_key=${this
        .apiKey}&artist=Nordheim&album=Enter+The+Wolf&format=json`
    )
      .then(data => data.json())
      .then(json => {
        const biggestImageUrl = json.album.image[json.album.image.length - 1]['#text']
        console.log(json)
        console.log(biggestImageUrl)
      })
  }

  albumSearch = e => {
    e.preventDefault()

    return fetch(
      `${this.baseApiUrl}?method=album.search&album=Enter+The+Wolf&api_key=${this
        .apiKey}&format=json`
    )
      .then(data => data.json())
      .then(json => console.log(json))
  }

  render() {
    return (
      <div>
        <div>Lastfm page</div>
        <a href='' onClick={this.getAlbumInfo}>
          getAlbumInfo
        </a>
        <a href='' onClick={this.albumSearch}>
          albumSearch
        </a>
      </div>
    )
  }
}

export default Lastfm
