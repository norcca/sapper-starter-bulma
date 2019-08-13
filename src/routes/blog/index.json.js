import * as contentful from "contentful";

const client = contentful.createClient({
	space: "7cfl0e0jzy11",
	accessToken: "m8B1CUEuKGUEK8oLN4vZCiss6CVA5pWYaY5RNn5SKYU"
});

export async function get(req, res) {
	const entries = await client.getEntries();
	let posts = [];
	entries.items.map(item => {
		posts.push({
			id: item.sys.id,
			title: item.fields.title,
		})
	});

	const contents = JSON.stringify(posts.map(post => {
		return {
			id: post.id,
			title: post.title,
		};
	}));

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}
