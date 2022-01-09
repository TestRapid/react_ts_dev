// importing libraries
import React from "react";

// importing types
import Iperson from "../types/Iperson";

interface Iprops {
	person: Iperson[];
	removeFromList: (id: number) => void;
}

const List: React.FC<Iprops> = ({ person, removeFromList }) => {
	return (
		<table className="table table-striped bordered rounded">
			<thead>
				<tr>
					<th>#</th>
					<th>Name</th>
					<th>Age</th>
					<th>delete</th>
				</tr>
			</thead>
			<tbody>
				{person.map((p, i) => (
					<tr key={i}>
						<td>{i + 1}</td>
						<td>{p.name}</td>
						<td>{p.age}</td>
						<td>
							<button
								className="btn btn-danger"
								onClick={() => removeFromList(p.id)}
							>
								<i className="fas fa-trash"></i>
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default List;
