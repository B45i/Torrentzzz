<script lang="ts">
    export let torrent;
</script>

<div class="torrent">
    <div class="details">
        <h3>{torrent.title}</h3>
        <div>Source: Torrent Source</div>
    </div>
    <button>copy</button>
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
</style>
