import cookieParser from 'cookie-parser';
import express from "express";
import path from "path";

const PORTA = 3000;
const HOST  = "0.0.0.0";

const app = express();

app.use(cookieParser());

var lista_usurarios = [];


app.use(express.urlencoded({ extended: true }));
app.post(`/processar`, (req,res) => {
    var passou = 10;
if(req.body.nome.length<3){
    passou = 0
 var conteudo = `<!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="stylesheet" href="css.css">
     <title>Cadastrar </title>
     <style>
       input[type="text"]::placeholder {
     color: #fcfcfc; 
 }
 label[for="nome"]{
     color:#cac6cf;
 }
 label[for="email"]{
     color:#cac6cf;
 }
 label[for="idade"]{
     color:#cac6cf;
 }
 
 
 input[type="text"] {
     background-color: #695d77; 
     color: #333; 
     border: 1px solid #ccc;
     border-radius: 4px;
     padding: 8px;
     margin-top: 5px;
     margin-bottom: 10px;
 }
 input[type="email"] {
     background-color: #695d77; 
     color: #333; 
     border: 1px solid #ccc;
     border-radius: 4px;
     padding: 8px;
     margin-top: 5px;
     margin-bottom: 10px;
 }
 input[type="number"] {
     background-color: #695d77; 
     color: #333; 
     border: 1px solid #ccc;
     border-radius: 4px;
     padding: 8px;
     margin-top: 5px;
     margin-bottom: 10px;
 }
 
 body {
     font-family: 'Arial', sans-serif;
     background-color: #2a2131;
     margin: 0;
     display: flex;
     justify-content: center;
     align-items: center;
     height: 100vh;
 }
 
 .container {
     background-color: #141314;
     padding: 40px;
     border-radius: 8px;
     box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
 }
 
 h1 {
     text-align: center;
     color: #cac6cf;
 }
 
 form {
     display: flex;
     flex-direction: column;
     max-width: 400px;
     margin: 0 auto;
     color:#fcfcfc
 }
 
 label {
     margin-top: 10px;
     color: #333;
 }
 
 input {
     padding: 8px;
     margin-top: 5px;
     margin-bottom: 10px;
     border: 1px solid #766680;
     border-radius: 4px;
 }
 
 button {
     background-color: #2a2131;
     color: #fff;
     padding: 30px;
     border: none;
     border-radius: 4px;
     cursor: pointer;
 }
 
 button:hover {
     background-color: #45a049;
 }
     </style>
 </head>
 <body>
     <div class="container">
         <h1>Formulário </h1>
         <form action="/processar" method="post" novalidate>
             <label for="nome">Nome:</label>

             <input type="text" id="nome" name="nome" value="${req.body.nome}" required >
             <p>O nome tem que ter mais de 3 caracteres</p>
             `}
else{
    var conteudo = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css.css">
        <title>Cadastrar </title>
        <style>
          input[type="text"]::placeholder {
        color: #fcfcfc; 
    }
    label[for="nome"]{
        color:#cac6cf;
    }
    label[for="email"]{
        color:#cac6cf;
    }
    label[for="idade"]{
        color:#cac6cf;
    }
    
    
    input[type="text"] {
        background-color: #695d77; 
        color: #333; 
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 8px;
        margin-top: 5px;
        margin-bottom: 10px;
    }
    input[type="email"] {
        background-color: #695d77; 
        color: #333; 
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 8px;
        margin-top: 5px;
        margin-bottom: 10px;
    }
    input[type="number"] {
        background-color: #695d77; 
        color: #333; 
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 8px;
        margin-top: 5px;
        margin-bottom: 10px;
    }
    
    body {
        font-family: 'Arial', sans-serif;
        background-color: #2a2131;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    
    .container {
        background-color: #141314;
        padding: 40px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    
    h1 {
        text-align: center;
        color: #cac6cf;
    }
    
    form {
        display: flex;
        flex-direction: column;
        max-width: 400px;
        margin: 0 auto;
        color:#fcfcfc
    }
    
    label {
        margin-top: 10px;
        color: #333;
    }
    
    input {
        padding: 8px;
        margin-top: 5px;
        margin-bottom: 10px;
        border: 1px solid #766680;
        border-radius: 4px;
    }
    
    button {
        background-color: #2a2131;
        color: #fff;
        padding: 30px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    
    button:hover {
        background-color: #45a049;
    }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Formulário </h1>
            <form action="/processar" method="post" novalidate>
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" value="${req.body.nome}" required>`
} 
if(req.body.email.length<10){
conteudo += ` <label for="email">E-mail:</label>
    <input type="email" id="email" name="email" value="${req.body.email}" required>
    <p>O email tem que ter mais de 10 caracteres</p>`
 passou = 0;}           
else {
conteudo += `<label for="email">E-mail:</label>
    <input type="email" id="email" name="email" value="${req.body.email}" required>`
}
if(req.body.idade < 18){

conteudo += `<label for="idade">Idade:</label>
 <input type="number" id="idade" name="idade"  value="${req.body.idade}" required>
 <p>Voce tem que ter mais de 18 anos</p>
 <button type="submit">Cadastrar</button>
        </form>


        <ul><!-- ListaCadastrados --></ul>
    </div>
</body>
</html>`
passou = 0;}
else {
conteudo += `<label for="idade">Idade:</label>
    <input type="number" id="idade" name="idade" value="${req.body.idade}" required>
    <button type="submit">Cadastrar</button>
        </form>


        <ul><!-- ListaCadastrados --></ul>
    </div>
</body>
</html>`
}
            
            











    if(passou==10){
    const user = {
        nome: req.body.nome,
        email: req.body.email,
        idade: req.body.idade
    }

    lista_usurarios.push(user);
    console.log(lista_usurarios);

    res.redirect(`/lista`);
                }
     else {
        res.end(conteudo);
     }   
            })


app.get(`/lista`, (req, res) => {
    app.use(express.static(path.join(process.cwd(), `src`)));

    let conteudo = `
    <body style="font-family: Arial, sans-serif; margin: 20px;">
        <h1>Lista de Usuarios Cadastrados</h1>
        <table style="width:100%; border-collapse: collapse; margin-top: 20px;">
            <thead>
                <tr style="background-color: #f2f2f2;">
                    <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Nome</th>
                    <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Email</th>
                    <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Idade</th>
                </tr>
            </thead>
            <tbody>`;

    for (const usuario of lista_usurarios) {
        conteudo += `
            <tr style="border: 1px solid #ddd;">
                <td style="padding: 12px;">${usuario.nome}</td>
                <td style="padding: 12px;">${usuario.email}</td>
                <td style="padding: 12px;">${usuario.idade}</td>
            </tr>`;
    }

    conteudo += `
            </tbody>
        </table>
        <div style="margin-top: 20px;">
            <a href="/" style="text-decoration: none; padding: 10px 20px; background-color: #4CAF50; color: white; border-radius: 5px; margin-right: 10px;">Voltar ao Menu</a>
            <a href="/form.html" style="text-decoration: none; padding: 10px 20px; background-color: #008CBA; color: white; border-radius: 5px;">Continuar Cadastrando</a>
        </div>
    </body>`;

    res.end(conteudo);
});

app.get(`/`, (req,res) => {
    const ultimoacesso = req.cookies.ultimoacesso || "Nunca foi acessado";
    const data = new Date();
    res.cookie("ultimoacesso", data.toLocaleString(), {
        maxAge: 1000 * 60 * 60 * 24 * 30,
        httpOnly: true
    })
    app.use(express.static(path.join(process.cwd(),`src`)))

    res.send(`<h1><a href = form.html>Clique Aqui</a></h1>
    <h2>Ultimo vez que entrou foi em${ultimoacesso}</h2>`)
})

app.listen(PORTA, HOST, () => {
    console.log(`Rodando em ${HOST}:${PORTA}`);
})
