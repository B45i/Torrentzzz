<script lang="ts">
    // todo:
    // Trim text
    // Disable search button if no text
    // disable search button if loading
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let searchTerm = '';

    const handleSearch = () => {
        dispatch('search', {
            searchTerm,
        });
    };
</script>

<header>
    <h1>Torrentzzz</h1>
    <div class="search-bar">
        <input
            bind:value={searchTerm}
            type="text"
            placeholder="Search here captain 🏴‍☠️"
        />
        <button on:click={handleSearch}>Search</button>
    </div>
</header>

<style>
    header {
        padding: 1rem;
        padding-bottom: 2rem;
        background-color: var(--clr-gray-lite);
    }

    .search-bar {
        margin-top: 1rem;
        display: flex;
    }

    .search-bar > input {
        flex-grow: 1;
    }
</style>
