<script>
  import { onMount } from 'svelte';
  import { latestCheckIn } from '../stores.js';

  const CHECK_IN_DEADLINE_HOURS = 2; // Deadline for check-in (e.g., 2 hours)

  onMount(() => {
    const interval = setInterval(() => {
      latestCheckIn.refresh(); // Keep the store up to date

      const lastEvent = $latestCheckIn; // Dereference the store to get its value
      if (lastEvent) {
        const hoursSinceLastCheckIn = (new Date() - lastEvent.timestamp) / 1000 / 60 / 60;
        if (hoursSinceLastCheckIn > CHECK_IN_DEADLINE_HOURS) {
          notifyUser();
        }
      } else {
        // Handle case where user has never checked in
        notifyUser("It's time for your first check-in!");
      }
    }, 60 * 1000); // Check every minute

    return () => clearInterval(interval); // Cleanup on component destroy
  });

  function notifyUser(message = "It's time to check in.") {
    if (!('Notification' in window)) {
      console.log('This browser does not support desktop notification');
      return;
    }

    if (Notification.permission === 'granted') {
      new Notification('Loops Safety Reminder', { body: message });
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification('Loops Safety Reminder', { body: message });
        }
      });
    }
  }
</script>
