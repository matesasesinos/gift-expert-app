import { useState } from 'react'
import PropsType from 'prop-types'

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setinputValue] = useState('')

  const onInputChange = ({ target }) => {
    setinputValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()

    const value = inputValue.trim()

    if (value.length <= 1) return

    onNewCategory(value)
    setinputValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}

AddCategory.PropsTypes = {
  onNewCategory: PropsType.func.isRequired,
}
