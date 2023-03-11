<!-- Editor.svelte -->
<script>
  import Quill from "quill";
  import "quill/dist/quill.snow.css"; // import Quill styles
  import { onMount } from "svelte";

  let quill;

  // initialize Quill editor when the component mounts
  onMount(() => {
    quill = new Quill("#editor", {
      modules: {
        toolbar: [
          [{ header: [1, 2, 3, 4, 5, false] }],
          ["bold", "italic", "underline"],
          ["image", "code-block"],
        ],
      },
      theme: "snow",
    });
  });

  // get the HTML content of the editor
 export function getContent() {
    return quill.root.innerHTML;
  }
</script>

<div id="editor" />

