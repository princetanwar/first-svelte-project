<script>
	import {createEventDispatcher} from 'svelte'
  export let data;

  const dispatcher = createEventDispatcher()
</script>

<p>{data}</p>
<button on:click={() =>{dispatcher('cus',data)}}>close</button>
