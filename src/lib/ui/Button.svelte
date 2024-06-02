<script lang="ts">
	/** Should button have accent style */
	export let accent: boolean = false;
</script>

<button class:accent on:click>
	{#if $$slots.icon}
		<div class="icon">
			<slot name="icon" />
		</div>
	{/if}
	<span><slot /></span>
</button>

<style>
	button {
		padding: 8px 12px 8px 0;
		border-radius: 10px;
		display: flex;
		flex-flow: row nowrap;
		background: transparent;
		border: none;
		outline: 2px solid transparent;
		transition:
			padding-left 0.2s ease-out,
			outline-color 0.2s ease-out;

		--icon: var(--text);

		&:hover {
			outline-color: var(--subtext);
			padding-left: 10px;
		}

		& .icon {
			width: fit-content;
			height: fit-content;
			margin-right: 9px;
		}

		& span {
			font:
				500 18px Inter,
				sans-serif;
			color: var(--text);
		}

		&.accent {
			background: var(--accent);
			padding-left: 10px;
		}
	}
</style>
