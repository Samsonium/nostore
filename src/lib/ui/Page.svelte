<script lang="ts">
	/** Page title */
	export let title: string;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="page">
	<h4>{title}</h4>
	<slot />
</div>

<style>
	.page {
		width: 100%;
		height: 100%;
		overflow-x: hidden;
		overflow-y: auto;
		padding: 0 24px;
	}

	h4 {
		font:
			400 14px Inter,
			sans-serif;
		color: #9f9f9f;
		letter-spacing: 4px;
		width: 100%;
		padding: 12px 0;
		text-align: center;
		vertical-align: middle;
	}
</style>
