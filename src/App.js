import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Geosuggest from 'react-geosuggest'

class App extends Component {
  render() {
    if ('geolocation' in navigator) {
      console.log('brrrp, yas')
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log(
          'Latitude: ' + position.coords.latitude,
          'Longitude: ' + position.coords.longitude
        )
      })
    } else {
      console.log('brrrp, nah')
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <main>
          <div className="react-geosuggest">
            <Geosuggest />
          </div>
        </main>
      </div>
    )
  }
}

export default App
