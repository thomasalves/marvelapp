# Marvelapp

Aplicativo desenvolvido em Angular utilizando a api da marvel como dados para fazer uma pagina com suas informações fornecidos pela API. Este site contém as seguintes funcionalidades:

  - Campo de busca, onde você pode buscar o heroi pelo nome.
  - Paginação, contendo 10 herois por pagina
  - Pagina de detalhes de cada Heroi.
  - Responsiidade
  - Música  dos vingadores quando entrar no site.

# Randerizando

Para randerizar esse site precisa seguir os seguintes passos:

- Adquirir a autitivação da marvel no site deles https://developer.marvel.com/
- Seguir as instruções do site para utilizar sua chaves
- Clonar esse repositorio com seguinte comando:
   
       git clone https://github.com/thomasalves/marvelapp
  
- Baixar dependencias

        yarn install ou npm install
- Adicionar sua public ket e hash no fonte localizado em shared/herois.service.ts
- Iniciar servidor

      ng serve
