import React, { useState, useEffect } from "react";
import { BASE_URL } from "../constants/BaseUrl";
import Search from "./SearchRecipe";
import Spinner from "react-bootstrap/Spinner";
import PropTypes from "prop-types";



function RecipeList({ title, thumbnail, ingredients }) {
		const [ recipeItems, setRecipeItems ] = useState([]);
		const [ filteredItems, setFilteredItems ] = useState([]);
		const [ loading, setLoading ] = useState(true);
		
	useEffect(function() {
		fetch(BASE_URL)
		.then(function(response) {
			return response.json();
		})
		.then(function(json) {
			setRecipeItems(json.results);
			setFilteredItems(json.results);
		})
		.catch(function(error) {
			console.log(error)
		})
		.finally(() => setLoading(false));
	}, []);

	if (loading) {
    return <Spinner animation="border" className="spinner" />;
}


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
						<h1>{title}</h1>
						<img src={thumbnail} alt={title}/>
						<p>Ingredients: {ingredients}</p>
					</div>
					</>
				)

			})}
			
			
		</>
	)
	RecipeList.propTypes = {
		title: PropTypes.string
	}
};


export default RecipeList;