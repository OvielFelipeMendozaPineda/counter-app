import { getSaludo } from "../../main/base-pruebas/02-template-string"

describe('pruebas a 02-template', () => {
  test(' debe devolver "hola felipe" ', () => {
     const name = "felipe"
     const mensaje = getSaludo(name)
     expect(mensaje).toBe(`Hola ${name}`)
  })
  
})
