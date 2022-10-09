<script lang="ts">
    import { onMount } from 'svelte';
    import Progress from './lib/Progress.svelte';
    import Search from './lib/Search.svelte';
    import Torrent from './lib/Torrent.svelte';

    const BASE_URL = 'https://thawing-hamlet.onrender.com';
    let torrents = [];
    let isLoading = false;

    onMount(async () => {
        fetch(BASE_URL); // wake up backend from sleep
    });

    const handleSearch = async ({ detail }) => {
        const { searchTerm } = detail;
        try {
            const response = await getTorrents(searchTerm);
            if (response.status === 200) {
                const data = await response.json();
                torrents = (data.torrents || []).filter(
                    torrent => torrent.magnet
                );
            }
        } catch (error) {
            // todo: proper error handling
            console.log(error.message);
        }
    };

    const getTorrents = async searchTerm => {
        return fetch(`${BASE_URL}/search/${searchTerm}`);
    };
</script>

<Search on:search={handleSearch} />
<Progress bind:isLoading />
<main>
    {#each torrents as torrent}
        <Torrent bind:torrent />
    {/each}
</main>

<style>
    main {
    }
</style>
