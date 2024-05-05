<script>
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
		<a href={route['href']}>{route['label']}</a>
	{/each}
</nav>

<slot />

<!--TODO Fix up styling WITH NO Codeium AND minimal copy-paste-->
<style>
	nav {
		display: flex;
	}
	a {
		flex: 1;
	}
</style>
