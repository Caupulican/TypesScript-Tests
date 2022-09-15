import { expect, test } from 'vitest' 
import { Person } from './Person'
test('Create a Person',()=>{
  const person = new Person({
    FirstName : 'John Doe',
    LastName : 'Anonimo',
    BirthDate : new Date(),
    isAlive : true
  })
  expect(person).toBeInstanceOf(Person)
  expect(person.FirstName).toEqual('John Doe')
})

test('Person cannot be dead',()=>{
  const isAlive = false 
  expect(()=>{new Person({
    FirstName : 'John Doe',
    LastName : 'Anonimo',
    BirthDate: new Date(),
    isAlive})}).toThrow() 
})