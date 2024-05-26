<script>
	import Aside from '$lib/components/Aside.svelte';
	import Hero from './Hero.svelte';
	import UPAImgs from './UPAImgs.svelte';
	import OldCAPImgs from './OldCAPImgs.svelte';
	import { timeline } from './data.js';
</script>

<Hero></Hero>
<section id="timeline">
	{#each timeline as event, i}
		<article style={`--i: ${i}`}>
			<header>
				<h3>{event.title}</h3>
			</header>
			<main>
				<p>
					{event.content}
				</p>
			</main>
		</article>
	{/each}
</section>

<Aside>
	<OldCAPImgs></OldCAPImgs>
	<UPAImgs></UPAImgs>
</Aside>

<style>
	#timeline {
		background-color: var(--primary-3);
		/*padding-right: 0;*/
	}
	/* article {
		margin-left: calc(var(--i) * 1rem);
	} */

	article:nth-child(4n-3) {
		padding-left: 0rem;
	}
	article:nth-child(even) {
		padding-left: 4rem;
	}
	article:nth-child(4n + 3) {
		padding-left: 8rem;
	}

	#timeline header {
		background-color: var(--primary-2);
		border-top-left-radius: 1.5rem;
		border-bottom-left-radius: 1.5rem;
		padding-left: 1.5rem;
		margin-top: 3rem;
		margin-right: -3rem;
	}
</style>
