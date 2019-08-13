import * as contentful from "contentful";

const client = contentful.createClient({
	space: "7cfl0e0jzy11",
	accessToken: "m8B1CUEuKGUEK8oLN4vZCiss6CVA5pWYaY5RNn5SKYU"
});

export async function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;

	try {
		const entry = await client.getEntry(slug);
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify(entry.fields));
	} catch (err) {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: err
		}));
	}
}
