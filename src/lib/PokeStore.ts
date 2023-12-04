import { writable } from "svelte/store";
import type { PokemonData } from "./Types";

export let pokeData = writable<PokemonData>()