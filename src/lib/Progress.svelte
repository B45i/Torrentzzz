<script lang="ts">
  export let isLoading = false;
</script>

<div class="progress">
  {#if isLoading}
    <div class="progress-bar" />
  {/if}
</div>

<style>
  .progress {
    position: relative;
    height: 5px;
  }

  .progress-bar {
    height: 100%;
    position: relative;
    width: 60px;
    background-color: var(--clr-green);
    animation: 2s infinite alternate proggress;
    animation-timing-function: linear;
  }

  @keyframes proggress {
    from {
      left: 0;
    }

    to {
      left: calc(100% - 60px);
    }
  }
</style>
