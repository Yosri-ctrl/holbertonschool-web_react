interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string
}

const s1: Student = {
	firstName: 'Doris',
	lastName: 'James',
	age: 29,
	location: 'Tunis',
};
const s2: Student = {
	firstName: 'Zaine',
	lastName: 'Munoz',
	age: 92,
	location: 'Sousse',
};

let studentsList: Student[] = [s1, s2];

let table = document.createElement("table");
let tbody = document.createElement("tbody");
studentsList.forEach((std) => {
	const row = document.createElement('tr');
	const name = document.createElement('td');
	const location = document.createElement('td');
	name.textContent = std.firstName;
	location.textContent = std.location;
	row.appendChild(name);
	row.appendChild(location);
	tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
