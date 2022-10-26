import React from 'react'
import { styleHeader, styleInput, styleParagraph } from './style/appStyle.js'
import './App.css'

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <div className="bg-title">
          <div className="title-container">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="14px"
                height="14px"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#878787"
                  d="M16.62 2.99a1.25 1.25 0 0 0-1.77 0L6.54 11.3a.996.996 0 0 0 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"
                ></path>
              </svg>
            </button>
            <h3 style={styleHeader}>Your Name</h3>
            <p style={styleParagraph}>Bangkok, Thailand</p>
            <input type="text" placeholder="Search" style={styleInput} />
          </div>
        </div>
        <div className="bg-friend-list">
          <div className="friend-list"></div>
        </div>
      </div>
    </div>
  )
}

export default App
