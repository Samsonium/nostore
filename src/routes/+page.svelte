<script lang="ts">
	import AppButton from '$lib/ui/AppButton.svelte';
	import Page from '$lib/ui/Page.svelte';
	import Title from '$lib/ui/Title.svelte';
</script>

<Page title="Explore">
	<button class="banner">
		<h1>Some test banner</h1>
	</button>

	<Title text="Popular apps" />
	<div class="apps">
		{#each [1, 2, 3] as i}
			<div class="app-button-container">
				<AppButton iconURL="/favicon.png" name="Svelte" category="Develop" rating={i} />
			</div>
		{/each}
	</div>
</Page>

<style>
	button.banner {
		width: 100%;
		height: 180px;
		background: linear-gradient(45deg, var(--accent), var(--background));
		border-radius: 12px;
		outline: 2px solid transparent;
		border: none;
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: center;
		font:
			800 16px Inter,
			sans-serif;
		transition: outline-color 0.2s ease-out;

		&:hover {
			outline-color: white;
		}
	}

	.apps {
		width: 100%;
		display: flex;
		flex-flow: row wrap;

		& .app-button-container {
			margin-right: 16px;
			margin-bottom: 16px;
		}
	}
</style>
