const nome: string = process.argv[2]
const idade: number = Number(process.argv[3])
const seteAnos: number = idade + 7

const text: string = `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${seteAnos}`

console.log(text)