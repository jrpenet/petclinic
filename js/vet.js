let vet = []

const loadvet = function(){
    const vetJSON = sessionStorage.getItem('vet')
    
    if(vetJSON !== null){
        return JSON.parse(vetJSON)
    } else {
        return []
    }
}

const savevet = function(){
    sessionStorage.setItem('vet', JSON.stringify(vet))
}

//expose orders from module
const getvet = () => vet

const criavet = (item) =>{
    
    vet.push({
        veterinario: item
    })
    savevet()
}

const removevet = (item) => {
    vet.splice(item, 1)
    savevet()
}

const apagavet = () => sessionStorage.removeItem('vet')

vet = loadvet()