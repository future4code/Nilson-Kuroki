## Aula 53

### EXERCICIO 1
a) o uso do raw da lib knex é usado para retornar o que o banco de dados retorna.
b)
```
const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM atores WHERE name = "${name}"
    `)
    console.log(result[0]) 
    return result[0]
}
```
c) 
```
const countGender = async (gender: string): Promise<any> =>{
    const result = await connection.raw(
        `SELECT COUNT(*) as count FROM atores WHERE gender = "${gender}"`
    )
    console.log(result[0])
}

countGender("female")
countGender("male")
```
### EXERCICIO 2
a)
```
const updateSalary = async (id: string, salary: number):Promise<any>=>{
    await connection("atores").update({
        salary: salary
    }).where('id',  id)
}
```
b) 
```
const deleteActor = async (id: string): Promise<any> =>{
    await connection("atores").where('id', id).del()
}
```
c) 
```
const mediaActorById = async (gender: string): Promise<any>=>{
    const result = await connection("atores")
    .avg("salary")
    .where("gender", gender)

    console.log(result[0])
}
```
 ### EXERCICIO 3
 
a) o id esta sendo lido assim devido ao fato que o quando bater no endpoint, ele vai usar os path params para passar o id, iremos pegar o id que for passado pelo params por ali

b) é a resposta que o back dara caso seja bem sucedido ou caso não seja possivel fazer a comunicação com o banco gerando um erro

c) 
```
app.get("/actor", async (req: Request, res: Response)=>{
    try {
        const gender = req.query.gender
        const count = await countGender(gender as string)

        res.status(200).send({quantity: count})
    } catch (error) {
        res.status(400).send({
            message: error.message
          });
    }
})
```
