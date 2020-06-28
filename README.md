<h2 align="center">DevRadar</h2>

<span>Esse é o backend da aplicação</span>
___

<p align="center">
  <a href="LICENSE">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>
</p>

___

<h3 align="center">
  <a href="#information_source-sobre">Sobre</a>&nbsp;|&nbsp;
  <a href="#interrobang-motivo">Motivo</a>&nbsp;|&nbsp;
  <a href="#rocket-tecnologias-utilizadas">Tecnologias</a>&nbsp;|&nbsp;
  <a href="#link-como-contribuir">Como Contribuir</a>&nbsp;|&nbsp;
  <a href="#question-como-utilizar">Como Utilizar</a>&nbsp;|&nbsp;
  <a href="#licença">Licença</a>
</h3>

___

<img align="center" src="https://ik.imagekit.io/vhx2sevqtq/Sem_t_tulo_4jtVzJh34.png" width="500">

## :information_source: Sobre

Procurando um dev na área? Achamos para você!
<br/>
Com o DevRadar você pode cadastrar e encontrar devs em sua região.

## :interrobang: Motivo

O objetivo é unir os desenvolvedores com aqueles que precisam deles. Você pode encontrar seu dev na sua região ou se você for o dev, divulgar sua localização e ser mais encontrável.

## :rocket: Tecnologias Utilizadas 

O projeto foi desenvolvido utilizando as seguintes tecnologias

- Node
- Express
- MongoDB
- Socket.io

## :link: Como contribuir 

- Faça um Fork do repositório
- Clone o seu repositório
- Crie uma branch com a sua feature
- Faça um commit com suas mudanças
- 'Push' a sua branch
- Ir em Pull Requests do projeto original e criar uma pull request com o seu commit

## :question: Como Utilizar 
Rotas: 
 - GET `/devs`
    1. Essa rota irá retornar um **array** com todos os devs cadastrados na aplicação
    2. Não possui nenhum parâmetro ou **query** de rota
 - GET `/search`
     1. Essa rota irá retornar um **json** com uma propriedade **"devs"**, que possui todos os devs cadastrados que coincidirem com o filtro passado na rota
     2. Não possui parâmetro de rota
     3. Possui três **queries**: | **techs** | **latitude** | **longitude** |, o resultado representa um raio de 10km.
        1. techs: `String` separado por vírgulas representando as tecnologias desejadas
        2. latitude: `Number` Representa a latitude a ser procurada
        3. longitude: `Number` Representa a longitude a ser procurada
  - POST `/devs`
     1. Essa rota irá criar um novo dev baseado no seu perfil e dados do github informados
     2. Recebe um **json** com os dados necessários para criação, exemplo:
     ```json
        {
          "github_username": "someusername",
          "techs": "React, JavaScript, React Native",
          "longitude": -XX.XXXXX,
          "latitude": -XX.XXXXX
         }
     ```

## Licença 

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
