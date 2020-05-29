import React from "react";
import RecipeList from "./RecipeList";

function RecipeItem( { title, thumbnail, ingredients } ) {


	return (
		<>
		<h2>Title: {title}</h2>
		<img src={thumbnail}/>
		<p>Ingredients: {ingredients}</p>
		</>
	)
}

export default RecipeItem;