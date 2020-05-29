import React from "react"; 
import PropTypes from "prop-types";

export default function Search({ handleSearch }) {
	return (
		<>
			<input type="text" placeholder="search by title" onChange={event => handleSearch(event)} />
			
		</>
	)
}

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired,
};