// import { Route } from 'react-router';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import styled from 'styled-components';
import App from './App';
import AnotherPage from './App/components/AnotherPage';

const Main = (): JSX.Element => {

	return (
		<>
			<Router>
				<Nav>
					<Link to="/">
						<button>Main Page</button>
					</Link>
					<Link to="/anotherPage">
						<button>Another Page</button>
					</Link>
				</Nav>
				<Routes>
					<Route path="/" element={<App/>}/>
					<Route path="/anotherPage" element={<AnotherPage/>}/>
				</Routes>
			</Router>
		</>
	);
};

const Nav = styled.div`
	width: 80%;
	margin: 10px auto;
	text-align: right;
	@media (max-width: 520px) {
		text-align: center;
	}
	button{
		box-sizing: border-box;
		margin-left: 10px;
		border-radius: 5px;
		:hover {
			box-sizing: border-box;
			border: 1px solid #FA7C91;
			color: #FA7C91;
			font-weight: bold;
			cursor: pointer;
			transition: 0.2s ease-in-out;
		}
	}
`

export default Main;