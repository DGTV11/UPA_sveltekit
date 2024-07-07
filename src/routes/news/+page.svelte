<script>
	// @ts-nocheck
	import Article from '$lib/components/Article.svelte';

	import { news_articles } from './data.js';
</script>

<section id="hero">
	<h2>News</h2>
</section>
<section id="news">
	{#each news_articles as { title, content, image }}
		<Article
			{title}
			{content}
			{image}
			headingStyle="border-radius: 1.5rem;margin-right: 2.5rem;"
			contentStyle="margin-right: 2.5rem;"
		></Article>
	{/each}
</section>

<style>
	section {
		grid-column: 1 / -1;
	}
</style>
