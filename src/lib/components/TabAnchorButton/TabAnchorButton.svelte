<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import { TabAnchor } from '@skeletonlabs/skeleton';

	export let href = '/';
	export let icon: string | undefined = undefined;
</script>

<TabAnchor {href} selected={$page.url.pathname === href}>
	<svelte:fragment slot="lead">
		{#if icon}
			<Icon {icon} class="mx-auto h-10 w-10 self-center" />
		{/if}
	</svelte:fragment>
	<span class="whitespace-nowrap">
		<slot />
	</span>
</TabAnchor>
