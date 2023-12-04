type Abilities = {
    ability: { name: string }, is_hidden: boolean, slot: number
}
type HeldItem = {
    item: { name: string }
}
type Types = {
    slot: number, type: { name: string }
}
type PastTypes = {
    generation: { name: string },
    types: Types[]
}
type PastAbilities = {
    abilities: Abilities[],
    generation: { name: string },
}
type Stats = {
    base_stat: number, effort: number, stat: { name: String }
}
type Species = {
    species: string
}
type Forms = {
    name: string
}
type Sprites = {
    back_default: string | null,
    back_female: string | null,
    back_shiny: string | null,
    back_shiny_female: string | null,
    front_default: string | null,
    front_female: string | null,
    front_shiny: string | null,
    front_shiny_female: string | null,
}
export type PokemonData = {
    id: number,
    name: string,
    base_experience: number,
    height: number,
    weight: number,
    abilities: Abilities[],
    forms: Forms[],
    species: Species
    held_items: HeldItem[]
    is_default: boolean,
    past_types: PastTypes[],
    past_abilities: PastAbilities[],
    stats: Stats[],
    types: Types[],
    sprites: Sprites
}