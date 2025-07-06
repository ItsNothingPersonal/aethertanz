<script lang="ts">
	import { page } from '$app/state';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import { menuData } from '$lib/menuData';
	import { AppBar, Navigation } from '@skeletonlabs/skeleton-svelte';
	import { quintOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
	import '../app.css';

	let { children } = $props();

	let innerWidth = $state(0);
	let innerHeight = $state(0);
</script>

<svelte:window bind:innerWidth bind:innerHeight />

{#if innerWidth >= 1280}
	<AppBar toolbarClasses="justify-center" padding="p-2">
		<Navigation.Bar>
			{#each menuData as link (link.href)}
				<Navigation.Tile
					href={link.href}
					label={link.label}
					selected={page.url.pathname === link.href}
					labelClasses="whitespace-nowrap !text-base"
				>
					<link.icon />
				</Navigation.Tile>
			{/each}
		</Navigation.Bar>
	</AppBar>
{/if}

<main class="relative h-full">
	<div class="absolute inset-0 overflow-y-auto">
		<div class="container mx-auto mb-2 p-2 pb-16 sm:mb-40 sm:p-4">
			<div
				class="mx-auto max-w-3xl rounded-lg bg-white/50 p-4 shadow-lg backdrop-blur-lg dark:bg-black/50"
				transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'x' }}
			>
				{@render children?.()}
			</div>
		</div>
	</div>
</main>

<footer
	class="border-light-500 dark:border-dark-500 bg-surface-100-900 sticky bottom-0 z-10 mt-4 dark:bg-black/50"
>
	{#if innerWidth > 1280}
		<Footer />
	{:else}
		<Navigation.Bar>
			{#each menuData as link (link.href)}
				{#if link.includeOnMobile}
					<Navigation.Tile
						href={link.href}
						label={link.label}
						selected={page.url.pathname === link.href}
						labelClasses="whitespace-nowrap"
					>
						<link.icon />
					</Navigation.Tile>
				{/if}
			{/each}
		</Navigation.Bar>
	{/if}
</footer>
