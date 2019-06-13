# Sobre o projeto.

Este é um app feito como desafio técnico para vaga de dev Front-End na Agenda Edu.
Com este app meu principal objetivo foi mostrar como eu organizaria um projeto
real utilizando as libs styled-system e styled-components disponíveis para react
e react native. Tendo em vista que com styled-system podemos construir um tema
que pode ser aproveitado de uma aplicação react para uma react-native e vice e versa.

## Rotas

Além disso usei react-navigation para a especificação de rotas. No arquivo index, do módulo de rotas,
temos um swiftNavigator responsável por gerenciar o fluxo incial do app, que é responsável por decidir
se o usuário deve ser direcionado ao formulário de login ou a tela principal. Após isso temos um
DrawerNavigator contendo dois StackNavigators, um com uma tela e outro com duas,dessa forma a aplicação
pode crescer o quanto for necessário, seja adicionando novas telas às Stacks ou novas Stacks ao Drawer.

## Styled-System e Styled-Components

Na pasta `common` estão definidos todo os componentes base utilizados para a criação do restate da UI,
optei por essa abordagem pois assim, ao trabalharmos em equipe teriamos uma coleção de componentes já desenvolvidos
com um alto poder de customização respeitando o tema definido no `ThemeWraper.js`. Assim, caso a equipe de design
resolvesse mudar a identidade visual do aplicativo, nós poderiamos refletir essa mudança em todo app de forma rápida.

### Features implementadas.

1. Login
1. Armazenamento de token no local store.
1. Listagem de eventos na página principal.
1. Detalhes de evento em página de detalhes.

Existem ainda algumas coisas que eu gostaria de implementar como interceptors no axios, que seriam resposáveis
pelo tratamento de erros oriundos de requests ao servidor, e animações melhores no infity scroll na página de index.
