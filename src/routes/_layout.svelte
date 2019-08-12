<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<Nav {segment}/>

<main>
	<section class="section">
		<div class="container">
			<slot></slot>
		</div>
	</section>
</main>
