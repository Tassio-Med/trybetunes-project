
# Bem-vindo ao repositório do projeto Trybe Wallet!

Este projeto consiste em uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada, tendo como principais funcionalidades:

- Fazer login;
- Pesquisar por uma banda ou artista;
- Listar os álbuns disponíveis dessa banda ou artista;
- Visualizar as músicas de um álbum selecionado;
- Reproduzir uma prévia das músicas deste álbum;
- Favoritar e desfavoritar músicas;
- Ver a lista de músicas favoritas;
- Ver o perfil da pessoa logada;
- Editar o perfil da pessoa logada;

O projeto foi desenvolvido em React que usa `setState` como ferramenta de manipulação de estado.
## Desenvolvimento

## `userAPI.js`

O arquivo `userAPI.js` é utilizado para manipular as informações da pessoa logada, dentro dele estão as funções para recuperar e atualizar as informações da pessoa usuária, além de criar um novo perfil. Todas essas funções simulam o funcionamento de uma API.

- Para recuperar as informações da pessoa usuária, utiliza-se a função `getUser`. Ela retorna um objeto com as informações da pessoa logada caso exista.

Para atualizar as informações da pessoa logada, utiliza-se a função `updateUser`. Ela também recebe um objeto com as informações que serão atualizadas.

## `searchAlbumsAPI.js`

O arquivo `searchAlbumsAPI.js` contém uma função que faz uma requisição à uma API e retorna os álbuns de uma banda ou artista. Para essa função funcionar, ela recebe como parâmetro uma string, que deve ser o nome da banda ou artista.

## `favoriteSongsAPI.js`

O arquivo `favoriteSongsAPI.js` é responsável por manipular as informações das músicas favoritas. Nele há as funções `getFavoriteSongs`, `addSong` e `removeSong`, que recuperam, adicionam e removem músicas dos favoritos, respectivamente. Assim como nos arquivos anteriores, todas as funções simulam o funcionamento de uma API.

A função `getFavoriteSongs` retorna um array com as músicas favoritas ou um array vazio, caso não haja nenhuma música.

A função `addSong` recebe um objeto que representa a música que você quer salvar como favorita e adiciona ao array já existente das músicas que já foram favoritadas.

A função `removeSong` também recebe um objeto que representa a música que você deseja remover da lista de músicas favoritas. 

## `musicsAPI.js`

O arquivo `musicsAPI.js` contém uma função que faz uma requisição à uma API e retorna os as músicas de um álbum, ela recebe como parâmetro uma string, que deve ser o id do álbum. O retorno dessa função, quando encontra as informações, é um array onde o primeiro elemento é um objeto com informações do álbum e o restante dos elementos são as músicas do álbum.

## EsLint

Neste projeto foi utilizado o [ESLint](https://eslint.org/) para fazer a análise estática do código. Ajudando a garantir a qualidade do código de forma a tê-lo mais legível, de mais fácil manutenção e seguindo as boas práticas de desenvolvimento.

## Autores

- [@tassio medeiros](https://github.com/Tassio-Med)


É importante dar destaque que o projeto foi desenvolvido no  módulo de Front-end na [@trybe](https://github.com/betrybe).

