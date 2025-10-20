<script>
  import { latestCheckIn } from '../stores.js';

  let lastCheckInTime = "Loading...";
  let currentStatus = "Loading...";

  latestCheckIn.subscribe(event => {
    if (event) {
      lastCheckInTime = event.timestamp.toLocaleString();
      currentStatus = "Checked In";
    } else {
      lastCheckInTime = "Never";
      currentStatus = "Not Checked In";
    }
  });
</script>

<div class="status-view">
  <h2>Status</h2>
  <p>Last Check In: <span class="time">{lastCheckInTime}</span></p>
  <p>Current Status: <span class="status">{currentStatus}</span></p>
</div>

<style>
  .status-view {
    padding: 1.5rem;
    background-color: #edf2f7;
    border-radius: 0.5rem;
    text-align: center;
  }

  h2 {
    margin-top: 0;
    color: #2d3748;
  }

  .time, .status {
    font-weight: bold;
  }
</style>
