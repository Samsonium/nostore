<script lang="ts">
	import Button from './Button.svelte';
	import Rating from './Rating.svelte';

	/** URL to application icon image */
	export let iconURL: string;

	/** Name of the application */
	export let name: string;

	/** Application rating */
	export let rating: number;

	/** Application category */
	export let category: string;
</script>

<button class="app">
	<img src={iconURL} alt="{name} icon" class="icon" />
	<div class="text">
		<p class="name">{name}</p>
		<p class="category">{category}</p>

		<div class="spacer"></div>

		<Rating rate={rating} of={5} />
	</div>
	<div class="get">
		<Button accent>Get</Button>
	</div>
</button>

<style>
	button.app {
		width: 300px;
		height: 80px;
		display: flex;
		flex-flow: row nowrap;
		align-items: stretch;
		justify-content: flex-start;
		padding: 8px;
		border-radius: 20px;
		border: 1px solid rgba(255, 255, 255, 0.5);
		outline: 2px solid transparent;
		transition: background-image 0.2s ease-out;
		background: transparent;

		&:hover {
			background-image: var(--surface);
		}
	}

	img.icon {
		width: 64px;
		height: 64px;
		border-radius: 12px;
		margin-right: 10px;
	}

	.text {
		flex: 1;
		display: flex;
		flex-flow: column;
		align-items: stretch;

		& p.name {
			text-align: left;
			font:
				700 14px Inter,
				sans-serif;
			color: white;
			padding: 0;
			margin: 0;
			margin-bottom: 4px;
		}

		& p.category {
			text-align: left;
			font:
				400 12px Inter,
				sans-serif;
			color: rgba(255, 255, 255, 0.5);
			padding: 0;
			margin: 0;
		}

		& .spacer {
			flex: 1;
		}
	}
</style>
