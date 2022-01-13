// import { Route } from 'react-router';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import App from './App';
import AnotherPage from './App/components/AnotherPage';

const Main = (): JSX.Element => {

	return (
		<>
			<Router>
				<Link to="/">
					<button>Main Page</button>
				</Link>
				<Link to="/anotherPage">
					<button>Another Page</button>
				</Link>
				<Routes>
					<Route path="/" element={<App/>}/>
					<Route path="/anotherPage" element={<AnotherPage/>}/>
				</Routes>
			</Router>
		</>
	);
};

export default Main;