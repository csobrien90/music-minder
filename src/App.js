import Header from './components/Header';
import Filters from './components/Filters';
import Results from './components/Results';
import { useState } from 'react';

const App = () => {
	const [queryTarget, setQueryTarget] = useState('recording');
	const [data, setData] = useState([]);

	return (
		<main>
			<Header />
			<Filters setQueryTarget={setQueryTarget} queryTarget={queryTarget} setData={setData} />
			<Results data={data[`${queryTarget}s`]} queryTarget={queryTarget} />
		</main>
	);
}

export default App;