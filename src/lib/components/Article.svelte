<script>
	export let title;
	export let content;
	export let headingStyle = '';
	export let contentStyle = '';
	export let articleStyle = '';
	export let image = { src: null, alt: null };
	const { src, alt } = image;
	let areas = src ? 'image content' : 'content content';
</script>

<article style="grid-template-areas: 'headline headline' '{areas}'; {articleStyle}">
	<h3 style={headingStyle}>{title}</h3>
	<p style={contentStyle}>{content}</p>
	{#if src}
		<img {src} {alt} />
	{/if}
</article>

<style>
	article {
		margin-top: 3rem;
		margin-right: -3rem;
		display: grid;
		grid-template-rows: auto 1fr;
  		grid-template-columns: 1fr 4fr;
	}

	article > * {
		padding-left: 1.5rem;
	}

	h3 {
		background-color: var(--primary-2);
		border-top-left-radius: 1.5rem;
		border-bottom-left-radius: 1.5rem;
		grid-area: headline;
	}

	img {
		max-width: 100%;
		max-height: 100%;
		grid-area: image;
	}

	p {
		grid-area: content;
	}
</style>
