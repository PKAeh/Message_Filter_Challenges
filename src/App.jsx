import React from 'react'
import { styleHeader, styleInput, styleParagraph } from './style/appStyle.js'
import './App.css'

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <div className="bg-title">
          <h3 style={styleHeader}>Your Name</h3>
          <p style={styleParagraph}>Bangkok, Thailand</p>
          <input type="text" placeholder="Search" style={styleInput} />
        </div>
        <div className="bg-friend-list">
          <div className="friend-list"></div>
        </div>
      </div>
    </div>
  )
}

export default App
