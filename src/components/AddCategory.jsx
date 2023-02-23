import { useState } from 'react'

const AddCategory = ({onAddCategory}) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({target}) => setInputValue(target.value)

  const onSumit = ( event ) => {
    event.preventDefault();
    if(inputValue.trim().length <= 1) return;

    onAddCategory(inputValue.trim())
    setInputValue('')
  }

  return (
    <form onSubmit={onSumit}>
      <input 
        type="text"
        placeholder='Buscar Gif'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}

export default AddCategory