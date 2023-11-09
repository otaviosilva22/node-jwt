# JWT e Node.js
Simples exemplo de uso de JWT (JSON Web Token) com Node.js

## Tecnologias Utilizadas
- [Node.js](https://nodejs.org/en/)
- [JWT](https://www.npmjs.com/package/jsonwebtoken)
- [Express](https://expressjs.com/pt-br/)

## Definição

JWT (JSON Web Token) é um padrão de autenticação e troca de informações para armazenar objetos JSON de forma segura. É comumente utilizado em APIs, provendo maior confiabilidade da aplicação. Mais detalhes sobre o padrão pode ser consultado <a href='https://www.alura.com.br/artigos/o-que-e-json-web-tokens'>aqui.</a> 

No Node.js, a biblioteca <a href='https://www.npmjs.com/package/jsonwebtoken'>jsonwebtoken</a> permite a criptografia e descriptografia desses tokens de forma rápida e prática.


```javascript
//codifica
app.post("/encoder", (req, res) => {
    try{      
        const {user, password} = req.body;
        const token = jwt.sign({user}, 'secret', { expiresIn: '1h' });
        return res.status(200).json({token})
    }catch(error){
        return res.status(500).json({error: error.message});
    }
});
```

```javascript
//decodifica
app.get('/decoder', (req, res)=>{
    try{
        const {authorization} = req.headers; //Beare token
        const decoder = jwt.verify(authorization.split(' ')[1], 'secret');
        return res.status(200).json({decoder})
    }catch(error){
        return res.status(500).json({error: error.message});
    }
})
```

## Como iniciar 🚀

```bash
npm install
```

```bash
npm start

#docker compose up
```

## Rotas

### Encoder:

```bash
#encoder
POST: http://localhost:8081/encoder
```

```json
//body request
{
  "user": "<username>",
  "password": "<password>"
}
```

```json
//response
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoib3RhdmlvIiwicGFzc3dvcmQiOiIxMjMiLCJpYXQiOjE2OTk1NDE1NjksImV4cCI6MTY5OTU0NTE2OX0.x4fdVv4GM0SIJdrzTd-de0Gw4FcQNKOF_87w4w40MVw"
}
```

### Decoder:

```bash
#decoder
GET: http://localhost:8081/decoder
```

```json
//header
"authorization": "Bearer <token>"
```

```json
//response
{
  "decoder": {
    "user": "<user>",
    "password": "<password>",
    "iat": <>,
    "exp": <>
  }
}
```

## Contribuidor
Otávio Augusto Souza Silva.

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/otaviosilva22/)](https://www.linkedin.com/in/otaviosilva22/)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:otavio.ssilva22@gmail.com)](mailto:otavio.ssilva22@gmail.com)
