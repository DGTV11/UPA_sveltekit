<script>
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Navigation.svelte';
</script>

<div>
	<Header></Header>
	<main>
		<slot />
	</main>
	<Footer></Footer>
</div>

<style>
	div {
		display: grid;
		grid-template-rows: auto 1fr auto;
		height: 100vh;
	}
	main {
		display: grid;
		grid-template-columns: 8fr 2fr;
	}
</style>
