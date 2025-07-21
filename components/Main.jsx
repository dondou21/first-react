import React from "react"

export default function Main() {

    const[ ingredients, setIngredients] = React.useState(["Chicken", "Oregano", "Tomatoes"])

    const ingredientLisstItems = ingredients.map(ingredient => (
    <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get("ingredient")
    
    setIngredients(prev => [...prev, newIngredient])
}

    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form" >
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button type="submit">Add ingredient</button>
            </form>
            <ul>
                {ingredientLisstItems}
            </ul>
        </main>
    )
}