<script>
  import CheckInButton from './lib/components/CheckInButton.svelte';
  import SOSButton from './lib/components/SOSButton.svelte';
  import StatusView from './lib/components/StatusView.svelte';
  import LoopView from './lib/components/LoopView.svelte';
  import ProactiveAlerter from './lib/components/ProactiveAlerter.svelte';
  import { latestCheckIn } from './lib/stores.js';

  function handleCheckIn() {
    latestCheckIn.refresh();
  }
</script>

<main>
  <ProactiveAlerter />
  <header>
    <h1>Loops Safety</h1>
  </header>

  <div class="container">
    <div class="status-section">
      <StatusView />
    </div>

    <div class="actions-section">
      <div class="check-in">
        <CheckInButton on:checkedin={handleCheckIn} />
      </div>
      <div class="sos">
        <SOSButton />
      </div>
    </div>

    <div class="loop-section">
      <LoopView />
    </div>
  </div>
</main>

<style>
  :global(body) {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    margin: 0;
    background-color: #f0f4f8;
  }

  main {
    text-align: center;
    padding: 1em;
    max-width: 600px;
    margin: 0 auto;
  }

  header h1 {
    color: #2d3748;
    font-size: 2.5rem;
    font-weight: 300;
  }

  .container {
    display: grid;
    gap: 1.5rem;
  }

  .actions-section {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1.5rem;
    align-items: center;
  }
</style>
