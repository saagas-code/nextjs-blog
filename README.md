<h1 align="center">
  Blog - NextJS
</h1>

Projeto realizado com o intuito de simular um blog, foi criado utilizando a tecnologia NextJS com Typescript e Tailwind. Site totalmente 100% responsivo.

![](https://user-images.githubusercontent.com/104795182/214878973-7a256d0e-95c0-4511-938e-87ad1f7a261e.png)

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=html,css,nextjs,tailwind" />
  </a>
</p>

<h1 align="center">Tutorial para Rodar a Aplicação</h1>

```shell
  git clone https://github.com/saagas-code/nextjs-blog.git
```

```shell
  cd nextjs-blog
```

```shell
  npm install
```
Criar um arquivo .env com os paramêtros da API :
```shell
BLOG_PROVIDER_BASE_API=https://www.tabnews.com.br/api/v1

API_CONTENT=guscsales
```

<h1 align="center">TabNews API</h1>

Todo TabNews foi construído através de APIs públicas e você pode consumir elas da forma que desejar (respeitando as políticas de uso).

A comunicação é feita através de HTTPS usando GET ou POST. Tanto a solicitação quanto a resposta são formatadas como JSON e o tipo de conteúdo de ambas é application/json.

Para requisições do tipo POST, parâmetros não inclusos na URL devem ser inseridos como um Content-Type de application/json.

Todas as URLs incluídas nessa documentação exigem a baseUrl:

```shell
  https://www.tabnews.com.br/api/v1
```



