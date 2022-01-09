// importing libraries
import React, { useState, useEffect } from "react";

// importing types
import Iperson from "./types/Iperson";

// importing components
import Layout from "./components/Layout";
import List from "./components/List";
import Form from "./components/Form";

// constant URI
const URI = "/testData.json";

// defining component
const App: React.FC = () => {
	const [person, setPerson] = useState<Iperson[]>([]);

	useEffect(() => {
		fetch(URI)
			.then((res) => res.json())
			.then((res) => {
				setPerson(res);
			})
			.catch((err) => {
				console.log(err);
			});
		return () => {
			setPerson([]);
		};
	}, []);

	const addToList = (obj: { name: string; age: number }): void => {
		setPerson((p) => [...p, { id: Date.now(), ...obj }]);
	};
	const removeFromList = (id: number): void => {
		setPerson((p) => p.filter((s) => s.id !== id));
	};

	return (
		<Layout>
			<h2 className="my-3">React with Typescript practice</h2>
			<hr />
			<div className="row">
				<div className="col-4">
					<Form addToList={addToList} />
				</div>
				<div className="col-8">
					<List person={person} removeFromList={removeFromList} />
				</div>
			</div>
		</Layout>
	);
};

export default App;
