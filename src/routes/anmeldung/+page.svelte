<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import type { ActionResult } from '@sveltejs/kit';

	export let form;

	let isSubmitting = false;
	let allergien: 'ja' | 'nein' = 'nein';

	function submitForm() {
		isSubmitting = true;

		return async ({ result }: { result: ActionResult }) => {
			await applyAction(result);
			isSubmitting = false;
		};
	}
</script>

<form method="post" use:enhance={submitForm}>
	<label class="label mb-2">
		<span>Name</span>
		<input name="name" class="input" type="text" placeholder="Bitte Namen angeben" required />
	</label>

	<label class="label mb-2">
		<span>E-Mail</span>
		<input
			name="email"
			class="input"
			title="E-Mail"
			type="email"
			placeholder="Bitte E-Mailadresse angeben"
			required
		/>
	</label>

	<label class="label mb-2">
		<input name="age" type="checkbox" required />
		<span>Ich bestätige, dass ich 18 Jahre oder älter bin.</span>
	</label>

	<label class="label mb-2">
		<span>Spezielle Essensanforderungen</span>
		<select name="essen" class="select" required>
			<option value="nein" selected>Nein</option>
			<option value="vegetarisch">Vegetarisch</option>
			<option value="vegan">Vegan</option>
		</select>
	</label>

	<label class="label mb-2">
		<span>Allergien</span>
		<select name="allergien" class="select" required bind:value={allergien}>
			<option value="nein" selected>Nein</option>
			<option value="ja">Ja</option>
		</select>
	</label>
	{#if allergien === 'ja'}
		<label class="label mb-2">
			<span>Bitte Allergien angeben</span>
			<textarea
				name="allergien-beschreibung"
				class="textarea"
				rows="4"
				placeholder="Bitte Allergien angeben"
				required
			/>
		</label>
	{/if}

	<label class="label mb-2">
		<span>Charakter-Beschreibung</span>
		<textarea
			name="beschreibung"
			class="textarea"
			rows="2"
			placeholder="Beschreibung des geplanten Charakterkonzepts in max. 3 Wörtern"
			required
		/>
	</label>

	<label class="label mb-2">
		<span>Trigger-Hinweise</span>
		<textarea
			name="trigger"
			class="textarea"
			rows="4"
			placeholder="Musst du uns auf bestimmte Trigger hinweisen? Gemeint sind tatsächliche Schlüsselreize, die psychische oder physische Episoden oder Zusammenbrüche auslösen können."
			required
		/>
	</label>
	<button type="submit" class="variant-filled-primary rounded px-4 py-2" disabled={isSubmitting}>
		{#if isSubmitting}
			Anmeldung wird übermittelt...
		{:else}
			Anmelden
		{/if}
	</button>
</form>

{#if form?.success}
	<aside class="alert variant-filled-surface mt-4">
		<div class="alert-message">
			<h3 class="h3">Anmeldung erfolgreich</h3>
			<p>Deine Anmeldung wurde in die Liste eingetragen!</p>
		</div>
	</aside>
{/if}
