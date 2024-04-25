<script lang="ts">
	import Footer from '$lib/components/Footer/Footer.svelte';
	import TabAnchorButton from '$lib/components/TabAnchorButton/TabAnchorButton.svelte';
	import { AppBar, AppShell, TabGroup } from '@skeletonlabs/skeleton';
	import { quintOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
	import '../app.pcss';

	let innerWidth = 0;
	let innerHeight = 0;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<AppShell
	regionPage="relative"
	slotPageHeader="sticky top-0 z-10"
	slotPageContent="px-2 mx-auto mt-2 sm:mt-4 lg:mt-8 {innerWidth < 640 ? 'pb-24' : ''}"
	slotPageFooter="sticky bottom-0 z-10"
>
	<svelte:fragment slot="header">
		{#if innerWidth >= 1280}
			<AppBar
				gridColumns="grid-cols-2 sm:grid-cols-3"
				slotLead="whitespace-nowrap sm:font-bold sm:text-lg"
				slotDefault="place-self-center sm:text-lg"
			>
				<svelte:fragment slot="lead">
					<a href="/"> Äthertanz: Höhenluft </a>
				</svelte:fragment>
				<nav class="list-nav flex">
					<a href="/was-ist-larp" class="list-nav-item whitespace-nowrap">Was ist LARP?</a>
					<a href="/aethertanz-hoehenluft" class="list-nav-item whitespace-nowrap">
						Äthertanz: Höhenluft
					</a>
					<a href="/anmeldung" class="list-nav-item whitespace-nowrap">Anmeldung</a>
					<a href="/ueber-uns" class="list-nav-item whitespace-nowrap">Über Uns</a>
					<a href="/impressum" class="list-nav-item whitespace-nowrap">Impressum</a>
				</nav>
			</AppBar>
		{/if}
	</svelte:fragment>

	<svelte:fragment slot="default">
		<div class="max-w-screen-md rounded-lg bg-white/50 p-4 shadow-lg backdrop-blur-lg" transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'x' }}>
			<slot />
		</div>
	</svelte:fragment>

	<svelte:fragment slot="pageFooter">
		{#if innerWidth > 1280}
			<Footer />
		{:else}
			<TabGroup
				justify="justify-center"
				active="variant-filled-primary"
				hover="hover:variant-soft-primary"
				flex="flex-1 lg:flex-none"
				rounded=""
				border=""
				class="bg-surface-100-800-token fixed inset-x-0 bottom-0 z-10 w-full"
				padding="px-3 py-2"
			>
				<TabAnchorButton icon="material-symbols:home" href="/aethertanz-hoehenluft">
					Äthertanz
				</TabAnchorButton>
				<TabAnchorButton icon="ic:baseline-plus" href="/anmeldung">Anmeldung</TabAnchorButton>
				<TabAnchorButton icon="ic:baseline-people" href="/ueber-uns">Über Uns</TabAnchorButton>
				<TabAnchorButton icon="material-symbols:info" href="/impressum">Impressum</TabAnchorButton>
			</TabGroup>
		{/if}
	</svelte:fragment>
</AppShell>
