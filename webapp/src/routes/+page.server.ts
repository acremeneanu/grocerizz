//@ts-ignore
export async function load({ fetch }) {
	const res = await fetch('http://localhost:1337/api/recipes');
	const response = await res.json();
	console.log('Called get all');
	return response;
}
