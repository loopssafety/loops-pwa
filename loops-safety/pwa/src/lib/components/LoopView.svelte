<script>
  let loopMembers = [
    { name: "Alice", status: "Checked In" },
    { name: "Bob", status: "Awaiting Check In" },
    { name: "Charlie", status: "Checked In" }
  ];
</script>

<div class="loop-view">
  <h2>My Loop</h2>
  <ul>
    {#each loopMembers as member}
      <li>
        <span class="name">{member.name}</span>
        <span class="status status-{member.status.toLowerCase().replace(' ', '-')}">{member.status}</span>
      </li>
    {/each}
  </ul>
</div>

<style>
  .loop-view {
    padding: 1.5rem;
    background-color: #f7fafc;
    border-radius: 0.5rem;
  }
  h2 {
    margin-top: 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    border-bottom: 1px solid #e2e8f0;
  }
  .status-checked-in {
    color: #38a169;
  }
  .status-awaiting-check-in {
    color: #dd6b20;
  }
</style>
