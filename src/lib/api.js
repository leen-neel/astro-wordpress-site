import dotenv from 'dotenv';
dotenv.config();

const API_URL = process.env.API_URL;

export const getPosts = async () => {
	let posts = {};

	fetch(`${process.env.USER}`).then((data) => {
		data.json().then((json) => {
			posts = json;
		});
	});
	console.log(posts);
	return posts;
};

export { API_URL };
