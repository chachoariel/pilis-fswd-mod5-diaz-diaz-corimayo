export const html = `
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  <style type="text/css">
      body{
          text-align: center;
          width: 500px;
          border-radius: 1px;
          border-color: black;
          border: 1px black solid;
          padding: 1rem;
          height: 400px;
      }
      div{
          font-weight: normal;
          color: black;
      }
      h3{
          display:flex; 
          flex-direction: row;
          color: #E73446;
      }
      header{
          background-color: #E73446;
      }
      h5{
          font-size: 10px;
      }
      .title{
          font-size: 30px; 
          font-family: Helvetica Neue; 
          font-weight: bold;
          color: #f1f1f1;
      }
  </style>  
</head>
<header>
  <h1 class="title">{title}</h1>
</header>
<body>  
  <h3>
      Dónde se realiza:
      <div>{location}</div>
  </h3>
  <h3>
      Duración:
      <div>{date}</div>
  </h3>
  <p>
      <div>{description}</div>
  </p>
  <h5>Grupo 11 - Diaz Jorge, Corimayo Fernando y Diaz Alfredo</h5>
</body>
</html>`
