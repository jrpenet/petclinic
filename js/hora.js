let hora = []

const loadhora = function(){
    const horaJSON = sessionStorage.getItem('hora')
    
    if(horaJSON !== null){
        return JSON.parse(horaJSON)
    } else {
        return []
    }
}

const savehora = function(){
    sessionStorage.setItem('hora', JSON.stringify(hora))
}

//expose orders from module
const gethora = () => hora

const criahora = (day, hour) =>{
    
    hora.push({
        data: day,
        horario: hour
    })
    savehora()
}

const removehora = (item) => {
    hora.splice(item, 1)
    savehora()
}

const apagahora = () => sessionStorage.removeItem('hora')

hora = loadhora()