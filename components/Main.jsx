import React from "react"

const [ingredients, setIngredients] = React.useState([])

const ingredientLisstItems = ingredients.map(ingredient => (
    <li key={ingredient}>{ingredient}</li>
))

function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get("ingredient")

    
    setIngredients(prev => [...prev, newIngredient])
}

console.log(ingredients)
export default function Main() {
    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form" >
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button type="button">Add ingredient</button>
            </form>
            <ul>
                {ingredientLisstItems}
            </ul>
        </main>
    )
}