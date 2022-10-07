<script lang="ts">
    import copyIcon from '../assets/copy.svg';

    export let torrent;
</script>

<div class="torrent">
    <div class="details">
        <h3>{torrent.title}</h3>
        <div class="details-sub">Source: {torrent.provider}</div>
        <div class="infos">
            {#if torrent.size}
                <div>Size: {torrent.size}</div>
            {/if}
            {#if torrent.peers}
                <div>Peers: {torrent.peers}</div>
            {/if}
            {#if torrent.seeds}
                <div>Seeds: {torrent.seeds}</div>
            {/if}
            {#if torrent.time}
                <div>{new Date(torrent.time).toLocaleString('en-IN')}</div>
            {/if}
        </div>
    </div>
    <button>
        <img src={copyIcon} />
    </button>
</div>

<style>
    .torrent {
        padding: 1rem;
        border: 1px solid var(--clr-accent);
        display: flex;
        align-items: center;
        margin: 1rem;
        gap: 1rem;
    }

    .details {
        flex-grow: 1;
        word-break: break-word;
    }
    .details-sub {
        color: var(--clr-accent);
        margin: 5px 0;
    }

    .infos {
        display: flex;
        flex-wrap: wrap;
        color: var(--clr-accent);
        gap: 0.3rem;
    }

    .infos > div {
        background-color: var(--clr-accent);
        color: var(--clr-gray);
        padding: 3px 4px;
    }

    button {
        padding: 0;
        width: 35px;
        min-width: 35px;
        height: 35px;
        min-height: 35px;
    }
</style>
