import React, { useState } from 'react';
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
        <div className={ themeChange !== "darkMode" ? "app" : "app dark-mode"}>
            <div className="level">
                <div>
										<h1 className="title" data-testid="header">Packative Dark Mode</h1>
                </div>

                <button className="app__dark-mode-btn icon level-right">
									{ themeChange !== "darkMode" ? <FontAwesomeIcon icon={faMoon}  onClick={switchToDarkMode} /> : <FontAwesomeIcon icon={faSun} style={{ color: "#F89709" }}  onClick={switchToLightMode} /> }
                </button>
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

            <section className="section">
                <div className="buttons level-right">
                    <a className="button is-primary">Save</a>
                    <a className="button is-link">Submit</a>
                </div>
            </section>
        </div>
    );
}

export default App;
