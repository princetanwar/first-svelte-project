<script>
  import Card from "./components/Card.svelte";
  import List from "./components/list.svelte";
  import { countStore } from "./stores/main.js";

  import Editor from "./components/Editor.svelte";

  let childRef;
</script>

<main>
  <!-- <List list={[1, 2, 3]} on:cus={(args) =>{console.log({mmm: args})}} /> -->
  <p>current count is {$countStore}</p>
  <button
    on:click={() => {
      countStore.increment();
    }}>increment</button
  >
  <Editor bind:this={childRef} />
  <button
    on:click={() => {
      console.log(childRef.getContent());
    }}>log editor data</button
  >

  <Card>
    <div slot="heading">
      <h1>hello</h1>
    </div>
    <div slot="content">
      <p>hello this is a card</p>
    </div>
    <p slot="footer">foooter data</p>
  </Card>
</main>

<style>
</style>
