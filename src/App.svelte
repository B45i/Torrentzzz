<script lang="ts">
    import Search from './lib/Search.svelte';
    import Torrent from './lib/Torrent.svelte';

    export const getTorrents = async searchTerm => {
        return fetch(
            `https://thawing-hamlet-05815.herokuapp.com/search/${searchTerm}`
        );
    };
</script>

<Search />
<main>
    <Torrent />
</main>

<style>
    main {
    }
</style>
