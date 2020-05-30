import React from "react"
import RecipeList from "./RecipeList"

function IngredientList( {ingredients}) {

	const newArray = ingredients.split(",")
	return (
		<>
			<ul>
				{newArray.map(function(item) {
					return <li>{item}</li>
				})}
			</ul>
		</>
	)
}

export default IngredientList;