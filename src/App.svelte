<script lang="ts">
    import { onMount } from 'svelte';
    import Progress from './lib/Progress.svelte';
    import Search from './lib/Search.svelte';
    import Torrent from './lib/Torrent.svelte';

    const BASE_URL = 'https://thawing-hamlet.onrender.com';
    let torrents = [];
    let isLoading = false;
    let cancelled = false;
    onMount(async () => {
        fetch(BASE_URL); // wake up backend from sleep
    });

    const handleSearch = async ({ detail }) => {
        cancelled = false;
        torrents = [];
        isLoading = true;
        const { searchTerm } = detail;
        try {
            const response = await getTorrents(searchTerm);
            if (response.status === 200 && !cancelled) {
                const data = await response.json();
                torrents = (data.torrents || []).filter(
                    torrent => torrent.magnet
                );
                isLoading = false;
            }
        } catch (error) {
            // todo: proper error handling
            isLoading = false;
            console.log(error.message);
        }
    };

    const handleCancel = () => {
        torrents = [];
        isLoading = false;
        cancelled = true;
    }


    const getTorrents = async searchTerm => {
        return fetch(`${BASE_URL}/search/${searchTerm}`);
    };
</script>

<Search bind:isLoading on:search={handleSearch} on:cancel={handleCancel} />
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
