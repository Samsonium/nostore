<script lang="ts">
    /** Input element type */
    export let type: 'text' | 'number' | 'password' = 'text';
    
    /** Placeholder */
    export let hint: string = '';

    /** Value for binding */
    export let value: string = '';

    /** Debounce delay in ms */
    export let debounce: number = 0;

    /** Input element container */
    let input: HTMLInputElement;

    /** Debounce timer for value update */
    let debounceTimer;

    /** Handle input to element */
    function handleInput() {
        clearTimeout(debounceTimer)
        debounceTimer = setTimeout(() => (value = input.value), debounce);
    }
</script>

<input {type} placeholder={hint} on:input={handleInput} bind:this={input}>

<style>
    input {
        min-width: auto;
        max-width: auto;
        background: var(--surface);
        font: 400 16px Inter, sans-serif;
        color: var(--text);
        padding: 8px 12px;
        border: 1px solid #4D4D4D;
        border-radius: 12px;
        outline: 2px solid transparent;
        transition: outline-color .2s ease-out;
        
        &:focus {
            outline-color: var(--border);
        }
    }
</style>
