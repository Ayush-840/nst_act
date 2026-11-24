async function comparePokemonExperience(name1, name2) {
  const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

  const fetchPokemon = async (name) => {
    const cleanName = encodeURIComponent(String(name).trim().toLowerCase());
    const response = await fetch(`${baseUrl}${cleanName}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch Pokémon "${name}": ${response.status}`);
    }
    return response.json();
  };

  const [data1, data2] = await Promise.all([
    fetchPokemon(name1),
    fetchPokemon(name2),
  ]);

  const exp1 = data1.base_experience;
  const exp2 = data2.base_experience;

  if (exp1 === exp2) {
    return { tie: true, base_experience: exp1 };
  }

  if (exp1 > exp2) {
    return { winner: data1.name, base_experience: exp1 };
  }

  return { winner: data2.name, base_experience: exp2 };
}