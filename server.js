import {fastify} from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const database = new DatabaseMemory()
const server = fastify()

server.get('/', () => {
    return 'Rota padrão'
})

server.post('/celular', (request, reply) => {
   // return 'cadastrar'
   const {titulo, modelo, valor} = request.body
   //exibindo dados//
   //console.log(body)

    database.create({
        titulo: titulo,
        modelo: modelo,
        valor: valor,
    })

    return reply.status(201).send
})

server.get('/celular', (request) => {
    const search = request.query.search
    console.log(search)
    const celulares = database.list()
    //console.log(celulares)//
    return celulares
})

server.put('/celulares/:id', (request, reply) => {
    const celularId = request.params.id
    const {titulo, modelo, valor} = request.body
    const celular = database.update(celularId, {
        titulo: titulo,
        modelo: modelo,
        valor: valor,
    })

return reply.status(204).send()

})

server.delete('/celulares/:id',(request, reply) => {
    const celularId = request.params.id

  database.delete(celularId)

    return reply.status(204).send()
})

server.listen({
    port: 3333,
})