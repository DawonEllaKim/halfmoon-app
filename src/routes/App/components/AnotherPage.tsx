import React, {useState} from 'react';

const AnotherPage = () => {
	const theme = localStorage.getItem("theme");
	const [themeChange, setThemeChange] = useState(theme);

	return (
		<div className={ themeChange === "lightMode" ? "app" : "app dark-mode"}>
			<p style={{fontSize: "20px"}}>Another Page</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsa, eos aliquam quaerat eligendi alias blanditiis! Doloremque, atque rerum corporis temporibus vero asperiores fuga officia, ipsa animi cum consequatur dolor.</p>
		</div>
	);
};

export default AnotherPage;