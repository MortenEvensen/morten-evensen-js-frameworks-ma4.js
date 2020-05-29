import React, { useState, useEffect } from "react";
import { BASE_URL } from "../constants/BaseUrl";
import Search from "./SearchRecipe";
import RecipeItem from "./RecipeItem";

function RecipeList() {
		const [ recipeItems, setRecipeItems ] = useState([]);
		const [ filteredItems, setFilteredItems ] = useState([]);

	useEffect(function() {
		fetch(BASE_URL)
		.then(function(response) {
			return response.json()
		})
		.then(function(json) {
			setRecipeItems(json.results);
			setFilteredItems(json.results);
		})
		.catch(function(error) {
			console.log(error)
		})
	}, []);


	const filterItems = function(e) {
		const searchValue = e.target.value.toLowerCase();

		const filteredArray = recipeItems.filter(function(item) {
			const lowerCaseName = item.title.toLowerCase()

			if (lowerCaseName.includes(searchValue)) {
				return true;
			}
		});

		setFilteredItems(filteredArray);
	}

	return (
		<>	
		<Search handleSearch={filterItems} />
			{filteredItems.map(list => {
				const { title, thumbnail, ingredients } = list;

				return (
					<>
					<div className="wrap">
						<RecipeItem title={title} thumbnail={thumbnail} ingredients={ingredients} />
					</div>
					</>
				)
			})}
			
			
		</>
	)
}


export default RecipeList;