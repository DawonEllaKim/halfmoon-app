import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './App.scss';

function App() {
	// To use theme-color for other pages, I saved theme-color status into the local storage.
	const theme = localStorage.getItem("theme");
	const [themeChange, setThemeChange] = useState(theme);

	const switchToDarkMode = () => {
		setThemeChange("darkMode");
		localStorage.setItem("theme", "darkMode")
	};

	const switchToLightMode = () => {
		setThemeChange("lightMode");
		localStorage.setItem("theme", "lightMode")
	};

    return (
        <Wrap className={ themeChange !== "darkMode" ? "app" : "app dark-mode"}>
					{themeChange === "lightMode" ? <Hello style={{color: "#8A4D76"}} onClick={switchToDarkMode} > Dark mode </Hello> :
					<Hello style={{color: "#fff"}} onClick={switchToLightMode}> Light mode </Hello>}
            <div className="level">
                <div>
										<h1 className="title" data-testid="header">Packative Dark Mode</h1>
                </div>

                <ThemeButton>
								<button className="app__dark-mode-btn icon level-right">
									{ themeChange !== "darkMode" ? <FontAwesomeIcon icon={faMoon}  onClick={switchToDarkMode} /> : <FontAwesomeIcon icon={faSun} style={{ color: "#F89709" }}  onClick={switchToLightMode} /> }
                </button>
								</ThemeButton>
            </div>

            <div className="columns">
                <div className="column">
                    <p>Lollipop powder powder. Cotton candy caramels chupa chups halvah muffin caramels apple pie topping cake. Topping chocolate bar pastry chocolate cake. Cupcake tart jujubes dragée jelly-o icing sugar plum. Chocolate bar lollipop candy canes. Biscuit croissant apple pie pudding caramels wafer tart tootsie roll macaroon. Croissant tiramisu chocolate bar carrot cake lemon drops halvah.</p>
                </div>
                <div className="column">
                    <p>Marshmallow tiramisu liquorice bear claw chocolate bar bear claw tart. Muffin chupa chups pie. Brownie apple pie topping lemon drops marzipan toffee. Pudding macaroon icing ice cream bonbon cake tart. Pudding sugar plum chocolate cake cake biscuit pastry pastry chocolate bar tart. Lemon drops dessert gummies icing.</p>
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <input className="input" type="text" placeholder="Name" />
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <input className="input" type="text" placeholder="Email" />
                </div>
            </div>

            
                <ButtonsWrap>
                    <Btn className="button is-primary">Save</Btn>
                    <Btn className="button is-link">Submit</Btn>
                </ButtonsWrap>
            
        </Wrap>
    );
}

const Wrap = styled.div`
	position: relative;
`

const Hello = styled.button`
		background-color: transparent;
		border: none;
		font-size: 14px;
		font-weight: bold;
		position: absolute;
		top: 10px;
		right: 5px;
		cursor: pointer;

		@media (min-width: 441px) {
			display: none;
		}
`

const ThemeButton = styled.div`
	@media (max-width: 780px) {
		box-sizing: border-box;
		position: fixed;
		right: 0;
		top: 70px;
		z-index: 1;
		padding: 5px 8px;
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
		background-color: white;
	}

	@media (max-width: 440px) {
		display: none;
	}
`

const ButtonsWrap = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: right;
	box-sizing: border-box;
	width: 100%;
	padding: 0 24px;
	margin-top: 10px;

	@media (max-width: 767px) {
		justify-content: center;
	}

	@media (max-width: 440px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0;
	}
`

const Btn = styled.button`
	width: 136px;
	height: 46px;
	margin-left: 8px;

	@media (max-width: 440px) {
		width: 100%;
		margin-bottom: 10px;
	}
`

export default App;
