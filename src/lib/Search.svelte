<script lang="ts">
    // todo:
    // search on enter
    // make list empty before api call
    // Trim text on search
    // Disable search button if no text
    // disable search button if loading
    import { createEventDispatcher } from 'svelte';
    import logo from '../logo.svg'
    const dispatch = createEventDispatcher();
    export let isLoading = false;
    let searchTerm = '';

    const handleSearch = () => {
        dispatch('search', {
            searchTerm,
        });
    };
</script>

<header>
    <h1><img src={logo} alt="logo"/>Torrentzzz</h1>
        <form class="search-bar" on:submit|preventDefault={handleSearch}>
            <input
                disabled={isLoading}
                bind:value={searchTerm}
                type="text"
                placeholder="Search here captain 🏴‍☠️"
            />
            <button disabled={isLoading} type="submit">Search</button>
        </form>
</header>

<style>
    h1{ 
        display: flex;
        align-items: center;
        justify-content: center;
    }
    img{
        width:80px;
        border-radius: 10px;
        margin-right: 20px;
    }
    header {
        padding: 1rem;
        padding-bottom: 2rem;
        background-color: var(--clr-gray-lite);
        position: sticky;
        top: 0;
    }

    .search-bar {
        margin-top: 1rem;
        display: flex;
    }

    .search-bar > input {
        flex-grow: 1;
    }
</style>
