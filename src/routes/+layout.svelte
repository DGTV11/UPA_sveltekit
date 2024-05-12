<script>
	import { page } from '$app/stores';
	import '../app.css';

	const routes = [
		{ href: '/', label: 'Home' },
		{ href: '/suggestions', label: 'Suggestions' },
		{ href: '/voting', label: 'Voting' },
		{ href: '/history', label: 'History' },
		{ href: '/news', label: 'News' }
	];
</script>

<nav>
	{#each routes as route}
		<a href={route['href']} class:active={$page.url.pathname === route['href']}>{route['label']}</a>
	{/each}
</nav>

<slot />

<style>
	nav {
		display: flex;
		background-color: var(--secondary-3);
	}
	a {
		flex: 1;
		text-align: center;
		padding-block: 0.5rem;

		/*border: 1px solid var(--black);*/
		text-decoration: none;
		font-size: 1rem;
		color: var(--secondary-9);
	}

	a:hover {
		background-color: var(--secondary-5);
	}

	a.active {
		background-color: var(--secondary-7);
		color: var(--white);
	}
</style>
