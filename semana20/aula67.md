### EXERCICIO 1

b. Se ela receber um objeto vazio, ela retorna:

```
 {
      statusCode: 400,
      body: JSON.stringify({ message: "Missing input" })
 }
```

c. Ela retorna: 

```
   {
      statusCode: 400,
      body: JSON.stringify({ message: "Missing email" })
    }
```
Ela retorna este erro devido a falta de email

d. Ela retorna:
```
 return {
      statusCode: 400,
      body: JSON.stringify({ message: "Missing name" })
    };
```
Ela retorna este dado devido a validação ser feita apenas no event.name e no caso o dado 
esta dentro de event.info.name, não passando pela validação corretamente

e. Ela retorna: 
```
    {
      statusCode: 400,
      body: JSON.stringify({ message: "Missing name" })
    };
```
Seu retorno é esse devido o password ter menos que 6 caracteres.

f. Ela retorna: 
```
{
      statusCode: 400,
      body: JSON.stringify({ message: "Missing name" })
    };
```
O statusCode é 200 devido passar por todas as validações necessárias, enviando tambem uma mensagem.

g. Dentro do codeStatus do if de validação de email:
```
if (!user.email) {
    return {
      statusCode: 422,
      body: JSON.stringify({ message: "Missing email" })
    };
  }
```
h. O retorno tem que ser: 
```
{
  "user": {
	"name": "Astrodev",
	"email": "astrodev@f4.com.br",
	"password": "123456"
  }
}
``
### EXERCICIO 2
```
exports.myFunc= async (event)=>{
    return {
        statusCode: 200,
        body: JSON.stringify("Olá mundo, sou uma mensagem da AWS")
    }
}
```
### EXERCICIO 3
```
exports.handler = async (event) => {
    
    const sumValues = event.numberOne + event.numberTwo;
    
    const response = {
        statusCode: 200,
        body: JSON.stringify(sumValues),
    };
    return response;
};
```
### EXERCICIO 4
```
export const handler = async (event: any):Promise<any> => {
  if(!event.email){
    return {
      statusCode: "400",
      body: JSON.stringify({message: "Missing Email"})
    }
  }
  if(event.email.indexOf("@") === -1){
    return {
      statusCode: "400",
      body: JSON.stringify({message: "Invalid Email"})
    }
  }
  if(event.email.indexOf(".") === -1){
    return {
      statusCode: "400",
      body: JSON.stringify({message: "Invalid Email"})
    }
  }
  return {
    statusCode: "200",
    body: JSON.stringify({
      message: "Email valid!"
    })
  }
}
```


