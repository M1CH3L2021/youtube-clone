import React, { useState } from 'react';
import { Container } from './styles'
import { TextField } from '@material-ui/core'

function SearchBar({ onFormSubmit }) {
  const [searchValue, setSearchValue] = useState('')

  function handleSubmit(e) {
    onFormSubmit(searchValue)
    e.preventDefault()
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField className="input" fullWidth label="Search..." value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
      </form>
    </Container>
  )
}

export default SearchBar;