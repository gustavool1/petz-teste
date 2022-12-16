# PETZ
 
Teste técnico para desenvolvimento frontend – React/NextJS.

## Setup

Instale as dependências do código com seu gerenciador de pacotes favorito.

```shell
npm i
yarn 
```

## Inicie o projeto
```shell
npm run dev
yarn dev
```

## Objetivo

Desenvolver um web app em Typescript, a partir deste projeto nextjs, que implemente o design descrito na próxima seção.

### Requisitos
- Criar um código desacoplado, organizado e testável
- Escrever testes unitários
- Demonstrar conhecimento do uso de hooks
- Demonstrar conhecimento de modularização de componentes
- Utilizar CSS ou Sass para estilizar as páginas
- Demonstrar organização, desacoplamento e separação de responsabilidades no código; o uso de padrões arquiteturais como MVVM, CLEAN, etc., é bem-vindo
- Demonstrar conhecimento de TypeScript e suas features para organizar o projeto
- Tratar possíveis erros de API

### Uso de APIs
- Usar `http://localhost:3000/api/scheduling/date` para puxar as datas disponíveis para agendamento
- Usar `htttp://localhost:3000/api/scheduling/time` para puxar os horários disponíveis para agendamento
- Usar a [pokéAPI](https://pokeapi.co/) para trazer os dados de região, cidades, e pokémons a serem usados no agendamento

Entender o contrato das APIs é também parte do teste.

## Design a Ser Implementado
O site deve implementar o design descrito nas telas abaixo. Todas as imagens necessárias estão na pasta `./public/images`.

A fonte utilizada em todas as páginas, e inclusive no logo, é chamada `Inter` e está disponível no Google Fonts.

Este figma pode ser utilizado para consulta: https://www.figma.com/file/WU8hciI3zIX5RARW6nvs4i/Untitled?node-id=109%3A131&t=xBBhYvrgvf6H9On7-1

### Home
![home page](public/test-sample/Home.png)
Obs: O logo deve seguir o seguinte comportamento, iniciando expandido na home, e reduzindo após 05 segundos, da direita para a esquerda. Ele deve estar na forma reduzida nas demais páginas, abrindo no hover do mouse:
![](public/test-sample/logo-behavior.png)
### Quem Somos
![](public/test-sample/Quem%20Somos.png)
### Agendar Consulta
![](public/test-sample/Agendar%20Consulta.png)
#### Caso de Sucesso
![](public/test-sample/Agendar%20Consulta%20Sucesso.png)
#### Caso de Falha
![](public/test-sample/Agendar%20Consulta%20Falha.png)