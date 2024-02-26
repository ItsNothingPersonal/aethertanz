<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import type { ActionResult } from '@sveltejs/kit';

	export let form;

	let isSubmitting = false;

	function submitForm() {
		isSubmitting = true;

		return async ({ result }: { result: ActionResult }) => {
			await applyAction(result);
			isSubmitting = false;
		};
	}
</script>

<div class="max-w-screen-md rounded-lg bg-white/50 p-4 shadow-lg backdrop-blur-lg">
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
			<span>Charakter-Beschreibung</span>
			<textarea
				name="beschreibung"
				class="textarea"
				rows="4"
				placeholder="Bitte Charakter-Beschreibung angeben"
				required
			/>
		</label>

		<label class="label mb-2">
			<span>Spezielle Essensanforderungen</span>
			<select name="essen" class="select" required>
				<option value="nein" selected>Nein</option>
				<option value="vegetarisch">Vegetarisch</option>
				<option value="vegan">Vegan</option>
			</select>
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
</div>
