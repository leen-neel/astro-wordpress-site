import dotenv from 'dotenv';
dotenv.config();

const API_URL = process.env.API_URL;

export async function fetchAPI(path) {
	const res = await fetch(`${API_URL}${path}`);
	const json = await res.json();

	return json;
}

export async function getDinos() {
	let posts = await fetchAPI('dinos?per_page=50&_embed');
	return posts;
}

export async function getDino(slug) {
	let posts = await fetchAPI(`dinos?slug=${slug}&_embed&endme`);
	return posts[0];
}

export { API_URL };
