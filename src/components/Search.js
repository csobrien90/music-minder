const Search = ({ query, setQuery }) => {
	const handleChange = (e) => {
		setQuery(e.target.value);
	}
	
	return (
		<input type='text' id='query' name='query' placeholder='Search term...' value={query} onChange={handleChange} />
	);
}

export default Search;