<script>
	import { page } from '$app/stores';

	const routes = [
		{ href: '/', label: 'Home' },
		{ href: '/suggestions', label: 'Suggestions' },
		{ href: '/history', label: 'History' },
		{ href: '/news', label: 'News' }
	];

	const authroutes = [{ href: '/auth', label: 'Auth' }];
</script>

<header>
	<nav>
		{#each routes as route}
			<a href={route['href']} class:active={$page.url.pathname === route['href']}
				>{route['label']}</a
			>
		{/each}
	</nav>
	<nav>
		{#each authroutes as route}
			<a href={route['href']} class:active={$page.url.pathname === route['href']}
				>{route['label']}</a
			>
		{/each}
	</nav>
</header>

<style lang="postcss">
	header {
		display: flex;
		justify-content: space-between;
		position: fixed;
		top: 0.5rem;
		left: 0;
		right: 0;
		height: 2rem;
		z-index: 100;
	}

	a {
		background-color: var(--primary-3);
		text-align: center;
		padding: 0.5rem 2rem;
		color: var(--secondary-9);

		&:hover {
			background-color: var(--secondary-5);
		}
		&.active {
			background-color: var(--secondary-7);
			color: var(--white);
			&:hover {
				color: orange;
			}
		}
	}
</style>
