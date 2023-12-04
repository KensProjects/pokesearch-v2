<script lang="ts">
  let searchTerm = "";
  import { pokeData } from "./PokeStore";

  async function fetchData() {
    try {
      const endpoint = `https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`;
      const res = await fetch(endpoint);
      if (!res.ok) {
        throw new Error("Pokemon not found!");
      } else {
        const data = await res.json();
        $pokeData = data;
        console.log(data)
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }
</script>

<form
  class="flex items-center justify-between border border-black w-full md:w-3/4 bg-gray-100 h-10 rounded-md overflow-hidden"
  on:submit|preventDefault={fetchData}
>
  <input
    type="text"
    bind:value={searchTerm}
    placeholder="Enter Pokemon here..."
    required
    class="w-full p-1 outline-none border-r border-black"
  />
  <button type="submit" class="w-40 bg-emerald-200 h-full">Search</button>
</form>
