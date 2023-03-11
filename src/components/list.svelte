<script>
  import Item from "./item.svelte";
  export let list;
</script>

{#each list as d}
  <Item data={d} on:cus />
{/each}
