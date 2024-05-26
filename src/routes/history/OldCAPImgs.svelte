<script>
	import { old_cap_images } from './data';
</script>

<section>
	<h4><u>Old C.A.P. images</u></h4>
	{#each old_cap_images as img}
		<section>
			<img src={img.src} alt={img.alt} />
			<p>{img.description}</p>
		</section>
	{/each}
</section>

<style>
	img {
		max-width: 7.5rem;
		max-height: 7.5rem;
		padding: 5%;
	}
</style>
