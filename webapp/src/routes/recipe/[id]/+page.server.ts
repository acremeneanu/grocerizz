//@ts-ignore
export async function load({ params, fetch }) {
	const res = await fetch('http://localhost:1337/api/recipes/' + params.id + '?populate=*');
	const response = await res.json();
	console.log('Called get one');
	return response.data;
}
