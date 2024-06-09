<script>
	export let title;
	export let images;
</script>

<section>
	<h4>{title}</h4>
	{#each images as img}
		<section>
			<img src={img.src} alt={img.alt} />
			<p>{img.description}</p>
		</section>
	{/each}
</section>

<style>
	h4 {
		text-decoration: underline;
	}
	img {
		max-width: 7.5rem;
		max-height: 7.5rem;
		padding: 5%;
	}
</style>
