<script>
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Navigation.svelte';
	
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;
	$: ({ session, supabase } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
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
