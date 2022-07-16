const QueryTargetFilter = ({ selected, setQueryTarget }) => {
	const handleChange = (e) => {
		setQueryTarget(e.target.value);
	} 

	return (
		<label htmlFor='queryTarget'>
			Query Target: 
			<select id='queryTarget' onChange={handleChange} defaultValue={selected}>
				<option value='recording'>Albums</option>
				<option value='artist'>Artists</option>
			</select>
		</label>
	);
}

export default QueryTargetFilter;