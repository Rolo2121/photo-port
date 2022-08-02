import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import './App.css';

function App() {
	const [contactSelected, setContactSelected] = useState(false);
	// false. This is to prevent the contact form from showing when a user initially navigates to the homepage
	const [categories] = useState([
		{
			name: 'commercial',
			description:
				'Photos of grocery stores, food trucks, and other commercial projects',
		},
		{ name: 'portraits', description: 'Portraits of people in my life' },
		{ name: 'food', description: 'Delicious delicacies' },
		{
			name: 'landscape',
			description: 'Fields, farmhouses, waterfalls, and the beauty of nature',
		},
	]);
	const [currentCategory, setCurrentCategory] = useState(categories[0]);
	return (
		<div>
			<Nav
				categories={categories}
				setCurrentCategory={setCurrentCategory}
				currentCategory={currentCategory}
				contactSelected={contactSelected}
				setContactSelected={setContactSelected}
			/>
			<main>
				<div>
					{!contactSelected ? (
						<>
							<Gallery currentCategory={currentCategory} />
							<About />
						</>
					) : (
						// <> </> are <React.Fragment></React.Fragment> React fragments
						// : is equal to else
						<ContactForm />
					)}

					{/* <ContactForm />
					<Gallery currentCategory={currentCategory} />
					<About /> */}
				</div>
			</main>
		</div>
	);
}

export default App;
