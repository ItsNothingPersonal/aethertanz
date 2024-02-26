<script lang="ts">
	import Footer from '$lib/components/Footer/Footer.svelte';
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
	import '../app.pcss';
</script>

<AppShell
	regionPage="relative"
	slotPageHeader="sticky top-0 z-10"
	slotPageContent="px-2 mx-auto mt-2 sm:mt-4 lg:mt-8"
>
	<svelte:fragment slot="header">
		<AppBar
			gridColumns="grid-cols-3"
			slotLead="whitespace-nowrap sm:font-bold sm:text-lg"
			slotDefault="place-self-center sm:text-lg"
		>
			<svelte:fragment slot="lead">Äthertanz: Höhenluft</svelte:fragment>
			<nav class="list-nav xl:flex">
				<a href="/" class="list-nav-item whitespace-nowrap">Was ist LARP?</a>
				<a href="/" class="list-nav-item whitespace-nowrap">Äthertanz: Höhenluft</a>
				<a href="/" class="list-nav-item whitespace-nowrap">Anmeldung</a>
				<a href="/" class="list-nav-item whitespace-nowrap">Über Uns</a>
				<a href="/impressum" class="list-nav-item whitespace-nowrap">Impressum</a>
			</nav>
		</AppBar>
	</svelte:fragment>

	<slot />

	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
