<script lang="ts">
    import Sidebar from '$lib/Sidebar.svelte';
    import '../app.css';
</script>

<main>
    <div class="content">
        <div class="sidebar">
            <Sidebar/>
        </div>
        <div class="page">
            <slot/>
        </div>
    </div>
</main>

<style>
    main {
        width: 100%;
        height: 100%;
        background: #1F1F1F;
    }
    
    .content {
        width: 100%;
        max-width: 1400px;
        height: 100%;
        display: flex;
        flex-flow: row nowrap;
        align-items: stretch;
        margin: 0 auto;
        padding: 24px;
    }
    
    .sidebar {
        width: 250px;
        display: flex;
        flex-flow: column;
        align-items: stretch;
        justify-content: space-between;
    }
    
    .page {
        flex: 1 1;
        background: var(--background);
        border-radius: 12px;
    }
</style>
