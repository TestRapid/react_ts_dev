import React, { useState } from "react";

// importing types
import Iperson from "../types/Iperson";

interface Iprops {
	addToList: (obj: Iperson) => void;
}

const init: Iperson = {
	name: "",
	age: 0
};

const Form: React.FC<Iprops> = ({ addToList }) => {
	const [values, setValues] = useState<Iperson>(init);

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		addToList(values);
		handleReset();
	};

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
		target: { name, value }
	}) => {
		setValues((v) => ({ ...v, [name]: value }));
	};

	const handleReset: () => void = () => {
		setValues(init);
	};

	return (
		<div>
			<h2>Add to db</h2>
			<form onSubmit={handleSubmit}>
				<div className="my-3">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						className="form-control"
						name="name"
						id="name"
						value={values.name}
						onChange={handleChange}
					/>
				</div>
				<div className="my-3">
					<label htmlFor="age">Age</label>
					<input
						type="number"
						className="form-control"
						name="age"
						id="age"
						value={values.age}
						onChange={handleChange}
					/>
				</div>
				<div className="my-4">
					<button
						className="btn btn-primary fw-bold w-50"
						type="submit"
					>
						Submit
					</button>
					<button
						className="btn btn-warning w-50"
						onClick={() => handleReset()}
						type="reset"
					>
						clear
					</button>
				</div>
			</form>
		</div>
	);
};
export default Form;
