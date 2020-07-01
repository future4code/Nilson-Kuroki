
import {User} from "./user"
import {Customer} from "./Customer"

const userInstance: User = new User('1', "nilson@gmail.com", 'nilson','123456')
console.log("userId:", userInstance.getId())
console.log("userName: ", userInstance.getName())
console.log("userEmail: ", userInstance.getEmail())

/**
 * exercicio 1
 * a. ele não pode ser chamado pq a variavel é private e não existe método para ter acesso a ela
 * b. Foi impressa uma unica vez
 */

const customerInstance: Customer = new Customer('2', 'gabriela@gmail.com', "gabriela", "a123456", "123456789")

console.log(customerInstance)

/**
 * exercicio 2
 * 
 * a. Ele aparece uma vez baseado só no exercicio 1
 * b. ela é impressa duas vezes
 */

 console.log(customerInstance.getId())
 console.log(customerInstance.getName())
 console.log(customerInstance.getEmail())
 console.log(customerInstance.getCreditCard())
 console.log(customerInstance.purchaseTotal)

 /**
  * exercicio 3
  * a. não é possivel, devido ao fato de ser passado como private, não dando acesso
  */

  