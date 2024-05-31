<script lang="ts">
    import Input from '$lib/ui/Input.svelte';
    import Button from '$lib/ui/Button.svelte';
    import {
        House,
        MarkerCircle,
        GameController,
        Briefcase,
        BracketsAngle
    } from 'phosphor-svelte';
</script>

<div class="sidebar">
    <h1>
        NoStore
        <sup>0.0.1</sup>
    </h1>
    <Input hint="Search..." />
    
    <div class="menu">
        <Button accent>
            <span slot="icon">
                <House size={18} weight="bold" color="var(--icon)" />
            </span>
            Explore
        </Button>
        <Button>
            <span slot="icon">
                <MarkerCircle size={18} weight="bold" color="var(--icon)" />
            </span>
            Create
        </Button>
        <Button>
            <span slot="icon">
                <GameController size={18} weight="bold" color="var(--icon)" />
            </span>
            Play
        </Button>
        <Button>
            <span slot="icon">
                <Briefcase size={18} weight="bold" color="var(--icon)" />
            </span>
            Work
        </Button>
        <Button>
            <span slot="icon">
                <BracketsAngle size={18} weight="bold" color="var(--icon)" />
            </span>
            Develop
        </Button>
    </div>
</div>

<style>
    .sidebar {
        width: 100%;
        height: 100%;
        padding-right: 20px;
        display: flex;
        flex-flow: column;
        align-items: stretch;
    }
    
    h1 {
        font-weight: 900;
        font-size: 20px;
        margin-bottom: 10px;
        
        & sup {
            font-weight: 500;
            font-size: 12px;
            color: var(--subtext);
            opacity: .5;
        }
    }
    
    .menu {
        display: flex;
        flex-flow: column;
        align-items: stretch;
        margin-top: 40px;
    }
    
    :global(.menu button:not(:last-child)) {
        margin-bottom: 20px;
        }
</style>
