import React from 'react'

export default ({ children }) => (
  <div
    style={{
      maxWidth: '960px',
      width: '100%',
      margin: '0 auto',
      textAlign: 'left'
    }}>
    {children}
  </div>
)