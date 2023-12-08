import { randomUUID } from "crypto"

export class DatabaseMemory{
#celulares = new Map()

list(search){
    return Array.from(this.#celulares.entries()).map((celularsArray) =>{
        //acessando primeira posiçao
        const id = celularsArray[0]
        const data = celularsArray[1]

        return{
            id, 
            ...data
        }
       
    })
    .filter(celular => {
        if (search){
            return celular.titulo.includes(search)
        }
        return true
    })
}
create(celular){
    const celularId = randomUUID()
    this.#celulares.set(celularId, celular)
}
update(id, celular){
    this.#celulares.set(id, celular)
}
delete(id, celular){
    this.#celulares.delete(id, celular)
}
}