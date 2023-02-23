import { useState } from "react"
import AddCategory from "./Components/AddCategory";
import GifGrid from "./Components/GifGrid";



const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Naruto'])

  const onAddCategory = (value) => {
    if( categories.includes(value)) return;

    setCategories(
      [
        value,
        ...categories
      ]
    )
  };

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory onAddCategory={(value) => onAddCategory(value)} categories={categories}/>
        
        {
          categories.map((c) => {
            return <GifGrid key={c} category={c}/>
          })
        }
        
    </>
  )
}

export default GifExpertApp