import React from 'react'

import './search-panel.css'

const SearchPanel = ({ onSearchChange }) => {
  const onSearchChanged = (event) => {
    onSearchChange(event.target.value)
  }

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="type to search"
      onChange={onSearchChanged}
    />
  )
}

export default SearchPanel
