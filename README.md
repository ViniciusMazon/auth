<h1 align="center">
    <img alt="Auth" title="Auth" src="docs/logo.png" />
</h1>
<p align="center">
  <a href="#-sobre-o-projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-desenvolvido-utilizando">Desenvolvido utilizando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-utilizar">Como utilizar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>
<p align="center">
	<img alt="GitHub" src="">
</p>
</br>
<p align="center">
  <img alt="Auth" src="docs/mobile.png" width="30%">
</p>







## 💡 Sobre o projeto

O Auth é um modelo para implementação do **JWT** utilizando NodeJS e **gerenciamento do fluxo de autenticação** utilizando Context no ReactJS e React Native.



# 🏗️ Desenvolvido utilizando

* [Typescript](https://www.typescriptlang.org)
* [NodeJs](https://nodejs.org/en/)
* [ReactJs](https://reactjs.org)
* [React Native](https://reactnative.dev)
* [Jason Web Token](https://jwt.io)
* [Context](https://pt-br.reactjs.org/docs/context.html)
* [Docker](https://www.docker.com)
* [MongoDB](https://www.mongodb.com)



## ⚙️ Como utilizar

Clone o repositório:

```bash
git clone https://github.com/ViniciusMazon/auth.git
```

Instale as dependência rodando, individualmente em cada diretório (api, web e mobile), o comando: 

```bash
yarn
```


No diretório mobile/services, edite o arquivo api.ts e adicione o IP da sua máquina seguindo o exemplo abaixo:

```javascript
const api = axios.create({
  baseURL: 'http://SEUIP:3333',
});
```

Página da RocketSeat com [Configuração do ambiente para React Native](https://react-native.rocketseat.dev).

Dentro do diretório da API, suba o container rodando `docker-compose up -d`

Rode o projeto utilizando o comando ``yarn dev`` para API, ``yarn start`` para a Web `yarn react-native run-android` para o Mobile.



## 🖖🏻 Como contribuir

- Faça um fork desse repositório;
- Clone o repositório em sua máquina: `https://github.com/ViniciusMazon/auth.git`
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.



## ⚖️ Licença

Esse projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.



---

Feito com 🖤 por Vinicius Mazon.