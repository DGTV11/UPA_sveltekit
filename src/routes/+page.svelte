<script>
	import Aside from '$lib/components/Aside.svelte';
</script>

<section id="hero">
	<h1>The U.P.A. Project</h1>
	<h4>An <em>unofficial</em> Pokemon AU</h4>
	<button
		on:click={() => {
			location.href = '/suggestions';
		}}>Make a suggestion!</button
	>
</section>

<section>
	<h3>Why join us?</h3>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, iste.</p>
</section>

<Aside>
	<h3>Some groups inside</h3>
	<p>TODO: QUERY FOR RANDOM GROUPS</p>
</Aside>

<style>
	#hero {
		grid-column: 1 / -1;
	}
</style>
