<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import TriangleAlert from '@lucide/svelte/icons/triangle-alert';
	import type { SubmitFunction } from '@sveltejs/kit';

	let { form } = $props();

	let isSubmitting = $state(false);
	let allergien: 'ja' | 'nein' = $state('nein');

	const submitForm: SubmitFunction = () => {
		isSubmitting = true;

		return async ({ update, result }) => {
			await applyAction(result);
			await update();
			isSubmitting = false;
		};
	};
</script>

<form method="post" use:enhance={submitForm}>
	<label class="label mb-2">
		<span class="label-text">Name</span>
		<input name="name" class="input" type="text" placeholder="Bitte Namen angeben" required />
	</label>

	<label class="label mb-2">
		<span class="label-text">E-Mail</span>
		<input
			name="email"
			class="input"
			title="E-Mail"
			type="email"
			placeholder="Bitte E-Mailadresse angeben"
			required
		/>
	</label>

	<label class="mb-2 flex items-center space-x-2">
		<input name="age" class="checkbox" type="checkbox" required />
		<p>Ich bestätige, dass ich 18 Jahre oder älter bin.</p>
	</label>

	<label class="label mb-2">
		<span class="label-text">Spezielle Essensanforderungen</span>
		<select name="essen" class="select" required>
			<option value="nein" selected>Nein</option>
			<option value="vegetarisch">Vegetarisch</option>
			<option value="vegan">Vegan</option>
		</select>
	</label>

	<label class="label mb-2">
		<span class="label-text">Allergien</span>
		<select name="allergien" class="select" required bind:value={allergien}>
			<option value="nein" selected>Nein</option>
			<option value="ja">Ja</option>
		</select>
	</label>
	{#if allergien === 'ja'}
		<label class="label mb-2">
			<span class="label-text">Bitte Allergien angeben</span>
			<textarea
				name="allergien-beschreibung"
				class="textarea"
				rows="4"
				placeholder="Bitte Allergien angeben"
				required
			></textarea>
		</label>
	{/if}

	<label class="label mb-2">
		<span class="label-text">Charakter-Beschreibung</span>
		<textarea
			name="beschreibung"
			class="textarea"
			rows="2"
			placeholder="Beschreibung des geplanten Charakterkonzepts in max. 3 Wörtern"
			required
		></textarea>
	</label>

	<label class="label mb-2">
		<span class="label-text">OT Trigger-Hinweise</span>
		<textarea
			name="trigger"
			class="textarea"
			rows="4"
			placeholder="Musst du uns auf bestimmte Trigger hinweisen? Gemeint sind tatsächliche Schlüsselreize, die psychische oder physische Episoden oder Zusammenbrüche auslösen können."
		></textarea>
	</label>
	<button
		type="submit"
		class="preset-tonal-primary border-primary-500 rounded-sm border px-4 py-2 hover:cursor-not-allowed"
		disabled
	>
		{#if isSubmitting}
			Anmeldung wird übermittelt...
		{:else}
			Anmelden
		{/if}
	</button>
</form>

{#if form?.success}
	<div
		class="card preset-tonal-success grid grid-cols-1 items-center gap-4 p-4 lg:grid-cols-[1fr_auto]"
	>
		<div>
			<p class="font-bold">Anmeldung erfolgreich</p>
			<p class="text-xs">Deine Anmeldung wurde in die Liste eingetragen!</p>
		</div>
	</div>
{:else if form?.success === false}
	<div
		class="card preset-tonal-warning grid grid-cols-1 items-center gap-4 p-4 lg:grid-cols-[auto_1fr_auto]"
	>
		<TriangleAlert />
		<div>
			<p class="font-bold">Fehler bei Anmeldung!</p>
			<p class="text-xs">Es ist ein Fehler beim Übermitteln der Anmeldung aufgetreten.</p>
		</div>
	</div>
{/if}
