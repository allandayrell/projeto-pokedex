/*
quando clicar no pokemon da listagem temos que esconder o pokemon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem

para isso vamos precisar trabalhar com dois elementos:
1 - listagem 
2 - cartão do pokemon

precisamos criar duas variaveis no JS para trabalhar com os elementos da tela

vamos precisar com o evento de clique feito pelo usuário na listagem de pokemons

- remover a classe aberto só do cartao que está aberto
- ao clicar em um pokemon da listagem pegamos o id desse pokemon para saber qual cartãoo mostrar
- remover a classe ativo que marca o pokemon selecionado
 - adicionar a classe ativo no item da lista selecionado
*/


// para isso vamos precisar trabalhar com dois elementos
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    //vamos precisar com o evento de clique feito pelo usuário na listagem de pokemons

    pokemon.addEventListener('click', () => {
        //remover a classe aberto só do cartao que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        
        //ao clicar em um pokemon da listagem pegamos o id desse pokemon para saber qual cartãoo mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado

        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //remover a classe ativo que marca o pokemon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe ativo no item da lista selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})