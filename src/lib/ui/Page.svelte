<script lang="ts">
    /** Page title */
    export let title: string;
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<div class="page">
    <slot/>
</div>

<style>
    .page {
        width: 100%;
        height: 100%;
    }
</style>
