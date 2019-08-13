<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}

	.contentful-logo {
		height: 1em !important;
		vertical-align: text-bottom;
	}
</style>

<svelte:head>
	<title>Blog using Contentful</title>
</svelte:head>

<div class="content">
	<h1>Blog using <img
		class="contentful-logo" 
		src="https://d21buns5ku92am.cloudfront.net/41748/images/265844-logo-black_700x149-2e0d38-original-1511779631.png" 
		alt="contentful"
		>
	</h1>

	<h2>Recent posts</h2>

	<ul>
		{#each posts as post}
			<!-- we're using the non-standard `rel=prefetch` attribute to
					tell Sapper to load the data for the page as soon as
					the user hovers over the link or taps it, instead of
					waiting for the 'click' event -->
			<li><a rel='prefetch' href='blog/{post.id}'>{post.title}</a></li>
		{/each}
	</ul>
</div>