import ResultCard from './ResultCard';

const Results = ({ data, queryTarget }) => {
	let title;
	switch (queryTarget) {
		case 'recording':
			title = "Albums";
			break;
		case 'artist':
			title = "Artists";
			break;
		default:
			title = "Results";
	}
	
	if (!data) return null;
	
	return (
		<section className="results">
			<h2>{title}</h2>
			{data.map((data, index) => {
				return <ResultCard data={data} key={index} />;
			})}
		</section>
	);
}

export default Results;