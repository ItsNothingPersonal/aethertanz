<script lang="ts">
	import Footer from '$lib/components/Footer/Footer.svelte';
	import TabAnchorButton from '$lib/components/TabAnchorButton/TabAnchorButton.svelte';
	import { AppBar, AppShell, TabGroup } from '@skeletonlabs/skeleton';
	import '../app.pcss';

	let innerWidth = 0;
	let innerHeight = 0;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<AppShell
	regionPage="relative"
	slotPageHeader="sticky top-0 z-10"
	slotPageContent="px-2 mx-auto mt-2 sm:mt-4 lg:mt-8 {innerWidth < 640 ? 'pb-24' : ''}"
>
	<svelte:fragment slot="header">
		{#if innerWidth >= 1280}
			<AppBar
				gridColumns="grid-cols-2 sm:grid-cols-3"
				slotLead="whitespace-nowrap sm:font-bold sm:text-lg"
				slotDefault="place-self-center sm:text-lg"
			>
				<svelte:fragment slot="lead">Äthertanz: Höhenluft</svelte:fragment>
				<nav class="list-nav flex">
					<a href="/" class="list-nav-item whitespace-nowrap">Was ist LARP?</a>
					<a href="/" class="list-nav-item whitespace-nowrap">Äthertanz: Höhenluft</a>
					<a href="/anmeldung" class="list-nav-item whitespace-nowrap">Anmeldung</a>
					<a href="/" class="list-nav-item whitespace-nowrap">Über Uns</a>
					<a href="/impressum" class="list-nav-item whitespace-nowrap">Impressum</a>
				</nav>
			</AppBar>
		{/if}
	</svelte:fragment>

	<slot />

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
				<TabAnchorButton icon="material-symbols:home">Äthertanz</TabAnchorButton>
				<TabAnchorButton icon="ic:baseline-plus" href="/anmeldung">Anmeldung</TabAnchorButton>
				<TabAnchorButton icon="ic:baseline-people">Über Uns</TabAnchorButton>
				<TabAnchorButton icon="material-symbols:info" href="impressum">Impressum</TabAnchorButton>
			</TabGroup>
		{/if}
	</svelte:fragment>
</AppShell>
