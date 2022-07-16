import Search from './Search';
import QueryTargetFilter from './QueryTargetFilter';
import { useState } from 'react';

const Filters = ({ setQueryTarget, queryTarget, setData }) => {
	const [query, setQuery] = useState('');

	const sendRequest = (e) => {
		e.preventDefault();
		fetch(`https://musicbrainz.org/ws/2/${queryTarget}?query=${query}&limit=10&fmt=json`)
			.then(raw => raw.json())
			.then(res => {
				console.log('setting data from filters comp', res);
				setData(res);
			})
	}

	return (
		<form className="filters">
			<Search setQuery={setQuery} query={query} />
			<QueryTargetFilter selected={queryTarget} setQueryTarget={setQueryTarget} />
			<button className='search-button' onClick={sendRequest}>Search</button>
		</form>
	);
}

export default Filters;