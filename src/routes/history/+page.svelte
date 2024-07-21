<script>
	import Article from '$lib/components/Article.svelte';
	import Aside from '$lib/components/Aside.svelte';
	import Images from '$lib/components/Images.svelte';

	import Hero from './Hero.svelte';
	import { old_cap_images, upa_images, timeline } from './data.js';

	export let data;
	$: ({history_timeline} = data);
</script>

<Hero></Hero>
<section id="history">
	{#each history_timeline as { title, content }}
		<Article {title} {content}></Article>
	{/each}
</section>

<Aside>
	<Images title="Old C.A.P. images" images={old_cap_images}></Images>
	<Images title="U.P.A. images" images={upa_images}></Images>
</Aside>

<style>
	section {
		background-color: var(--primary-3);
	}

	:global(#history > article:nth-child(4n-3)) {
		padding-left: 0rem;
	}
	:global(#history > article:nth-child(even)) {
		padding-left: 4rem;
	}
	:global(#history > article:nth-child(4n + 3)) {
		padding-left: 8rem;
	}
</style>
