function countLettersInPokemonNames(pokemonNamesStr) {
  return pokemonNamesStr
    .split(",")
    .map((name) => name.trim().length);
}