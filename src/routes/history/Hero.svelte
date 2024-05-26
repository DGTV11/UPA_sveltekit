<script>
	const images = [
		{
			src: './og-pokemon/jigglypuff.png',
			alt: 'Jigglypuff',
			zIndex: 3,
			gridArea: '3 / 2 / 3 / 3'
		},
		{
			src: './og-pokemon/togedemaru.png',
			alt: 'Togedemaru',
			zIndex: 2,
			gridArea: '2 / 3 / 3 / 4'
		},
		{
			src: './og-pokemon/mimikyu.png',
			alt: 'Mimikyu',
			zIndex: 1,
			gridArea: '2 / 4 / 4 / 5'
		}
	];
</script>

<header>
	<h2>Our History</h2>
	{#each images as { src, alt, zIndex, gridArea }}
		<img {src} {alt} style="z-index: {zIndex}; grid-area: {gridArea}; place-self: center;" />
	{/each}
</header>

<style>
	header {
		background-color: turquoise;
		grid-column: 1 / -1;
		display: grid;
		grid-template-rows: repeat(4, calc(100% / 4));
		grid-template-columns: repeat(5, calc(100% / 5));
	}

	img {
		max-width: 25rem;
		max-height: 25rem;
		padding: 5%;
	}

	h2 {
		/*
		grid-row-start: 3;
		grid-row-end: 4;
		grid-column-start: 1;
		grid-column-end: 3;
		*/
		grid-area: 1 / 1 / 1 / 3;
		place-self: center;
		z-index: 4;
	}
</style>
