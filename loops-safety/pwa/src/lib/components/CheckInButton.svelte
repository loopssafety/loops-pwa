<script>
  import { createEventDispatcher } from 'svelte';
  import { addEvent } from '../db.js';

  const dispatch = createEventDispatcher();

  async function handleCheckIn() {
    try {
      await addEvent('check-in');
      dispatch('checkedin');
      // Optionally provide user feedback, e.g., a visual confirmation
    } catch (error) {
      console.error("Failed to save check-in:", error);
      // Handle error, e.g., show a message to the user
    }
  }
</script>

<button class="check-in-button" on:click={handleCheckIn}>
  Check In
</button>

<style>
  .check-in-button {
    width: 100%;
    padding: 2rem;
    font-size: 2rem;
    font-weight: bold;
    color: white;
    background-color: #2c7a7b;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .check-in-button:hover {
    background-color: #285e61;
  }
</style>
