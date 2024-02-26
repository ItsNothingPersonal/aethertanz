<script lang="ts">
	import { Accordion } from 'bits-ui';
</script>

<Accordion.Root class="w-full sm:max-w-[70%]" multiple>
	<Accordion.Item class="group border-b border-dark-10 px-1.5" value="first">
		<Accordion.Header>
			<Accordion.Trigger
				class="flex w-full flex-1 items-center justify-between py-5 text-[15px] font-medium transition-all [&[data-state=open]>span>svg]:rotate-180"
			>
				First
			</Accordion.Trigger>
		</Accordion.Header>
		<Accordion.Content class="pb-[25px] text-sm tracking-[-0.01em]">
			First accordion content
		</Accordion.Content>
	</Accordion.Item>
	<Accordion.Item class="group border-b border-dark-10 px-1.5" value="second">
		<Accordion.Header>
			<Accordion.Trigger
				class="flex w-full flex-1 items-center justify-between py-5 text-[15px] font-medium transition-all [&[data-state=open]>span>svg]:rotate-180"
			>
				Second
			</Accordion.Trigger>
		</Accordion.Header>
		<Accordion.Content class="pb-[25px] text-sm tracking-[-0.01em]">
			Second accordion content
		</Accordion.Content>
	</Accordion.Item>
	<Accordion.Item class="group border-b border-dark-10 px-1.5" value="third">
		<Accordion.Header>
			<Accordion.Trigger
				class="flex w-full flex-1 items-center justify-between py-5 text-[15px] font-medium transition-all [&[data-state=open]>span>svg]:rotate-180"
			>
				Third
			</Accordion.Trigger>
		</Accordion.Header>
		<Accordion.Content class="pb-[25px] text-sm tracking-[-0.01em]">
			Third accordion content
		</Accordion.Content>
	</Accordion.Item>
</Accordion.Root>
