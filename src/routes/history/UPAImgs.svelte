<script>
	import { upa_images } from "./data";
</script>

<section>
		<h4><u>U.P.A. images</u></h4>
		{#each upa_images as img}
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

