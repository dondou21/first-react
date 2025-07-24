import React from "react"

export default function Main() {

    const[ ingredients, setIngredients] = React.useState([])

    const ingredientListItems = ingredients.map(ingredient => (
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
            {ingredients.length < 0 &&   <section>
                <h2>Ingredients on hand:</h2>
                <ul>
                {ingredientListItems}
                </ul>
                <div>
                    <div>
                        <h3>Ready for a recip?</h3>
                        <p>Generate o recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>
            </section>}
            
        </main>
    )
}