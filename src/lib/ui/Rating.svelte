<script lang="ts">
	import { Star } from 'phosphor-svelte';

	/** Actual rating */
	export let rate: number;

	/** Max rating value */
	export let of: number;
</script>

<div class="rating">
	{#each new Array(of) as _, i}
		<Star size={12} color="white" weight={i < rate ? 'fill' : 'bold'} />
	{/each}
</div>

<style>
	.rating {
		width: max-content;
		height: 20px;
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
	}
</style>
