<script>
	import jigglypuff from '$lib/assets/og-pokemon/jigglypuff.png';
	import togedemaru from '$lib/assets/og-pokemon/togedemaru.png';
	import mimikyu from '$lib/assets/og-pokemon/mimikyu.png';

	import cap_monogram_with_txt from '$lib/assets/history/cap-monogram-with-txt.jpg';
	import cap_monogram_without_txt from '$lib/assets/history/cap-monogram-without-txt.jpg';
	import first_flag from '$lib/assets/history/first-flag.jpg';
	import confoederatio_sociae_pokemon from '$lib/assets/history/confoederatio-sociae-pokemon.jpg';

	import upa_west_matcha_logo from '$lib/assets/history/upa-west-matcha-logo.jpg';
	import updated_flag from '$lib/assets/history/updated-flag.png';

	const old_cap_images = [
		{
			src: cap_monogram_with_txt,
			alt: "C.A.P.'s first monogram",
			description: "The C.A.P.'s first flag idea"
		},
		{
			src: cap_monogram_without_txt,
			alt: "C.A.P.'s second monogram",
			description: "The C.A.P.'s first flag idea that they used"
		},
		{
			src: first_flag,
			alt: "C.A.P.'s first plain flag",
			description: "The C.A.P.'s first flag that somewhat obeyed the rules of vexillology"
		},
		{
			src: confoederatio_sociae_pokemon,
			alt: "C.A.P.'s first good flag",
			description: "The C.A.P.'s first truly artistic flag"
		}
	];

	const upa_images = [
		{
			src: upa_west_matcha_logo,
			alt: "U.P.A. West's Matcha Logo",
			description: "U.P.A. West's Matcha Logo"
		},
		{
			src: updated_flag,
			alt: "U.P.A.'s new plain flag",
			description: "The U.P.A.'s new official flag"
		}
	];

	const timeline = [
		{
			title: 'Before 1st Great War',
			content:
				'The Jigglypuff and Togedemaru were at odds with each other, with daily skirmishes between the two Pokémon and heated debates about which is objectively the better Pokémon.'
		},
		{
			title: 'Pre-Coalition Era',
			content:
				'The Mimikyu declared war on both the Jigglypuff and the Togedemaru, presumably taking advantage of the weaknesses created due to the almost constant skirmishes between the Jigglypuff and Togedemaru.'
		},
		{
			title: 'Coalition Era',
			content:
				'To stand a chance against the Mimikyu, the Jigglypuff and Togedemaru quickly established the original Coalition of Allied Pokémon (C.A.P.).'
		},
		{
			title: 'Unification Era',
			content:
				'Out of fear, shock and awe towards the sudden unification of what used to be the extremely divided Jigglypuff and Togedemaru, the Mimikyu made peace with the C.A.P. and ended the war.'
		},
		{
			title: '1st Great Rebranding',
			content:
				'The C.A.P. was renamed to the Confederation of Allied Pokémon, symbolising the fact that the C.A.P. was no longer a temporary alliance to defend against the Mimikyu.'
		},
		{
			title: 'Great Cleanup Period',
			content:
				"The Jigglypuff and the Togedemaru decided to clean up the C.A.P.'s hub area by pruning numerous unecessary sections of the hub."
		},
		{
			title: '2nd Great Rebranding',
			content:
				'The Jigglypuff and the Togedemaru decided to rebrand the Confederation of Allied Pokémon to the United Pokémon Alliance (U.P.A.).'
		},
		{
			title: 'Expansion Era',
			content:
				'The Togedemaru expanded the U.P.A. to create the Activity Centre, which is a recreational area so the Pokémon of the U.P.A. would not get bored to death.'
		},
		{
			title: 'The Great Separation',
			content:
				"A tyrannical Togedemaru, tired of the so-called inaction of the U.P.A.'s Administrative Command, forcibly took over the Activity Centre and made it the base of his new 'empire', U.P.A. West."
		},
		{
			title: '1st Civil War of the U.P.A.',
			content:
				'U.P.A. West declared war against the main U.P.A. (known to them as U.P.A. East), intending to unite both sides under a singular matcha tea banner. Out of desperaton, U.P.A. West decided to form an alliance with another empire.'
		},
		{
			title: 'Start of In Tempora Liberationis Alpha',
			content:
				"Using a fatal flaw in the leadership system of the main U.P.A. - a mere technicality - the tyrannical Togedemaru 'liberated' the main U.P.A. from its 'tyrannical ruler'."
		},
		{
			title: 'The Great Relocation',
			content:
				"Disenchanted with the tyrant's regime, devoted U.P.A. members discreetly relocated to a distant location and made it their new headquarters. Learning from their past mistakes, they avoided previous flaws in their laws. There, they began constructing infrastructure and fortifications."
		},
		{
			title: 'The U.P.A. Power Struggle',
			content:
				'A U.P.A. West task force tracked U.P.A. members to their new fortified headquarters. Despite plans to strike, advanced defense systems hindered their mission, leading to a standoff with the newly-founded U.P.A. Perimeter Guard.'
		},
		{
			title: 'The Surrender of U.P.A. West',
			content:
				'After many weeks, the U.P.A. West task force received a surrender message from U.P.A. West, putting an end to their tyrannical quest for power. After that, multiple conferences were held to decide how U.P.A. West would return their stolen land to the U.P.A.'
		},
		{
			title: 'The Fall of U.P.A. West',
			content:
				"While the conferences were going on, the empire U.P.A. West allyed with decided to seize the golden opportunity and forcibly annex U.P.A. West. This was suspected to be the culmination of the tyrant's grand scheme to prevent the U.P.A. from taking back the activity centre from U.P.A. West."
		}
	];
</script>

<section id="hero">
	<div>
		<h2 id="page-title">Our History</h2>
		<img id="img1" src={jigglypuff} alt="Jigglypuff" />
		<img id="img2" src={mimikyu} alt="Mimikyu" />
		<img id="img3" src={togedemaru} alt="Togedemaru" />
	</div>
</section>
<section class="timeline">
	{#each timeline as event}
		<section>
			<header>
				<h3>{event.title}</h3>
			</header>
			<main>
				<p>
					{event.content}
				</p>
			</main>
		</section>
	{/each}
</section>

<aside>
	<section>
		<h4><u>Old C.A.P. images</u></h4>
		{#each old_cap_images as img}
			<section>
				<img src={img.src} alt={img.alt} />
				<p>{img.description}</p>
			</section>
		{/each}
	</section>

	<section>
		<h4><u>U.P.A. images</u></h4>
		{#each upa_images as img}
			<section>
				<img src={img.src} alt={img.alt} />
				<p>{img.description}</p>
			</section>
		{/each}
	</section>
</aside>

<style>
	#hero {
		grid-column: 1 / -1;
	}
	#hero div {
		display: grid;
		grid-template-rows: repeat(3, calc(100% / 3));
		grid-template-columns: repeat(3, calc(100% / 3));
	}
	#hero img {
		max-width: 25rem;
		max-height: 25rem;
		padding: 5%;
	}

	#page-title {
		/*
		grid-row-start: 3;
		grid-row-end: 4;
		grid-column-start: 1;
		grid-column-end: 3;
		*/
		grid-area: 3 / 1 / 4 / 3;
		z-index: 4;
	}

	#img1 {
		/*
		grid-row-start: 1;
		grid-row-end: 3;
		grid-column-start: 1;
		grid-column-end: 3;
		*/
		grid-area: 1 / 1 / 3 / 3;
		z-index: 3;
	}

	#img2 {
		/*
		grid-row-start: 1;
		grid-row-end: 3;
		grid-column-start: 2;
		grid-column-end: 4;
		*/
		grid-area: 1 / 2 / 3 / 4;
		z-index: 2;
	}

	#img3 {
		/*
		grid-row-start: 2;
		grid-row-end: 4;
		grid-column-start: 2;
		grid-column-end: 4;
		*/
		grid-area: 2 / 2 / 4 / 4;
		z-index: 1;
	}

	aside img {
		max-width: 7.5rem;
		max-height: 7.5rem;
		padding: 5%;
		border: 2px solid var(--black);
	}
</style>
