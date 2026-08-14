async function comparePokemonExperience(name1, name2) {
  let fst =await fetch(`https://pokeapi.co/api/v2/pokemon/${name1}`).then((res)=> res.json())
  .then((data)=>{
    let out=data.base_experience
    return out
  })

  let snd = await fetch(`https://pokeapi.co/api/v2/pokemon/${name2}`).then((res)=>res.json())
  .then((data)=>{
    let out=data.base_experience
    return out
  })

  if(fst>snd){
    return (`{ winner: '${name1}', base_experience: ${fst} }`)
  }else{
    return (`{ winner: '${name2}', base_experience: ${snd} }`)
  }

}

// { winner: 'pikachu', base_experience: 112 }
// { winner: 'pikachu', base_experience: 112 }
// { winner: 'charmander', base_experience: 62 }