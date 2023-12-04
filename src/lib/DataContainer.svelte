<script lang="ts">
  import { pokeData } from "../lib/PokeStore";

  const gridStyle =
    "w-full h-40 flex justify-center items-center border border-black overflow-auto text-left";

  function capitalizeFirstLetter(word: string) {
    const newWord = word[0].toUpperCase() + word.slice(1);
    return newWord;
  }
</script>

<div class="">
  {#if $pokeData}
    <div class="grid grid-cols sm:grid-cols-2 md:grid-cols-3">
      <h2 class={gridStyle} id="pokemon-name-block">
        Name: {capitalizeFirstLetter($pokeData.name)}
      </h2>

      <span class={gridStyle} id="pokemon-id-block">ID:{$pokeData.id}</span>

      <ul id="sprites-block" class={gridStyle}>

        
        {#if $pokeData.sprites.front_default}
          <li><img src={$pokeData.sprites.front_default} alt="sprite" /></li>
        {/if}

        {#if $pokeData.sprites.front_shiny}
          <li><img src={$pokeData.sprites.front_shiny} alt="sprite" /></li>
        {/if}

        {#if $pokeData.sprites.back_default}
          <li><img src={$pokeData.sprites.back_default} alt="sprite" /></li>
        {/if}

        {#if $pokeData.sprites.back_shiny}
          <li><img src={$pokeData.sprites.back_shiny} alt="sprite" /></li>
        {/if}


        {#if $pokeData.sprites.front_female}
          <li><img src={$pokeData.sprites.front_female} alt="sprite" /></li>
        {/if}

        {#if $pokeData.sprites.front_shiny_female}
          <li>
            <img src={$pokeData.sprites.front_shiny_female} alt="sprite" />
          </li>
        {/if}
        {#if $pokeData.sprites.back_female}
          <li><img src={$pokeData.sprites.back_female} alt="sprite" /></li>
        {/if}
        {#if $pokeData.sprites.back_shiny_female}
          <li>
            <img src={$pokeData.sprites.back_shiny_female} alt="sprite" />
          </li>
        {/if}
      </ul>

      <span class={gridStyle} id="pokemon-base-exp-block"
        >Base Experience:{$pokeData.base_experience}</span
      >

      <span class={gridStyle} id="pokemon-height-block"
        >Height: {$pokeData.height}</span
      >

      <span class={gridStyle} id="pokemon-weight-block"
        >Weight: {$pokeData.weight}</span
      >

      <ul class={`${gridStyle} flex-col`} id="ability-block">
        {#each $pokeData.abilities as ability}
          <li class={ability.is_hidden ? "font-bold" : ""}>
            Ability: {ability.ability.name}
          </li>
        {/each}
      </ul>

      {#if $pokeData.held_items.length > 0}
        <ul class={gridStyle} id="held-item-block">
          {#each $pokeData.held_items as { item }}
            <li>Item: {item.name}</li>
          {/each}
        </ul>
      {/if}

      {#if $pokeData.past_abilities.length > 0}
        <ul class={`${gridStyle} flex-col`} id="past-abilities-block">
          {#each $pokeData.past_abilities as past_ability}
            <li class="font-light">
              Past Ability: {past_ability.abilities[0].ability.name}
            </li>
          {/each}
        </ul>
      {/if}

      <ul class={`${gridStyle} flex-col p-2`} id="stat-block">
        {#each $pokeData.stats as { base_stat, stat, effort }}
          {#if effort > 0}
            <li class="w-full">
              {stat.name} : {base_stat} : Effort Points: {effort}
            </li>
          {:else}
            <li class="w-full">{stat.name} : {base_stat}</li>
          {/if}
        {/each}
      </ul>

      <ul class={`${gridStyle} flex-col`} id="forms-block">
        {#each $pokeData.forms as { name }}
          <li class="">{name}</li>
        {/each}
      </ul>

      <ul class={`${gridStyle} flex gap-1`} id="types-block">
        {#each $pokeData.types as { type }}
          <li class="">{type.name}</li>
        {/each}
      </ul>
    </div>
  {:else}
    <p>Please search for an existing Pokemon!</p>
  {/if}
</div>

<style scoped>
</style>
