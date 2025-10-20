<script>
  import { addEvent } from '../db.js';

  async function handleSOS() {
    // 1. Provide immediate haptic feedback
    if (navigator.vibrate) {
      navigator.vibrate([200, 100, 200]); // Vibrate pattern
    }

    // 2. Get location
    let location = null;
    if ('geolocation' in navigator) {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
          });
        });
        location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
        };
      } catch (error) {
        console.error("Geolocation error:", error);
        // Even if location fails, the SOS must proceed.
      }
    }

    // 3. Save the SOS event to the local database
    try {
      await addEvent('sos', { location });
      alert('SOS Activated! Your loop has been notified.'); // Placeholder for real notifications
    } catch (error) {
      console.error("Failed to save SOS event:", error);
      alert('SOS activation failed! Please try again.');
    }
  }
</script>

<button class="sos-button" on:click={handleSOS}>
  SOS
</button>

<style>
  .sos-button {
    width: 100%;
    padding: 2.5rem;
    font-size: 3rem;
    font-weight: bold;
    color: white;
    background-color: #c53030;
    border: 2px solid #742a2a;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    transition: all 0.2s;
  }

  .sos-button:hover, .sos-button:focus {
    background-color: #9b2c2c;
    box-shadow: 0 8px 20px rgba(0,0,0,0.4);
    transform: translateY(-3px);
  }
</style>
