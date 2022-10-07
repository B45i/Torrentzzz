<script lang="ts">
    import Search from './lib/Search.svelte';
    import Torrent from './lib/Torrent.svelte';

    let torrents = [];

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
        return fetch(
            `https://thawing-hamlet-05815.herokuapp.com/search/${searchTerm}`
        );
    };
</script>

<Search on:search={handleSearch} />
<main>
    {#each torrents as torrent}
        <Torrent bind:torrent />
    {/each}
</main>

<style>
    main {
    }
</style>
