import type { IconProps } from '@lucide/svelte';
import BookOpenText from '@lucide/svelte/icons/book-open-text';
import CircleHelp from '@lucide/svelte/icons/circle-help';
import FileUser from '@lucide/svelte/icons/file-user';
import House from '@lucide/svelte/icons/house';
import ShieldUser from '@lucide/svelte/icons/shield-user';
import Text from '@lucide/svelte/icons/text';
import type { Component } from 'svelte';

export const menuData: {
	href: string;
	label: string;
	icon: Component<IconProps, object, ''>;
	includeOnMobile: boolean;
}[] = [
	{
		href: '/',
		label: 'Intro',
		icon: House,
		includeOnMobile: false
	},
	{
		href: '/was-ist-larp',
		label: 'Was ist LARP?',
		icon: CircleHelp,
		includeOnMobile: false
	},
	{
		href: '/aethertanz-hoehenluft',
		label: 'Äthertanz: Höhenluft',
		icon: BookOpenText,
		includeOnMobile: true
	},
	{
		href: '/anmeldung',
		label: 'Anmeldung',
		icon: FileUser,
		includeOnMobile: true
	},
	{
		href: '/ueber-uns',
		label: 'Über Uns',
		icon: ShieldUser,
		includeOnMobile: true
	},
	{
		href: '/impressum',
		label: 'Impressum',
		icon: Text,
		includeOnMobile: true
	}
];
