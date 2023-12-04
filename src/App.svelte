<script lang="ts">
  import { onMount } from "svelte";
  import DataContainer from "./lib/DataContainer.svelte";
  import Navbar from "./lib/Navbar.svelte";

  onMount(async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/deerling")
    const data = await res.json()
    console.log(data);
  })
</script>
 
<main class="flex flex-col w-screen h-full">
  <Navbar />
  <DataContainer />
</main>

<style scoped>
</style>
