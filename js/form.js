let form = []

const loadform = function(){
    const formJSON = sessionStorage.getItem('form')
    
    if(formJSON !== null){
        return JSON.parse(formJSON)
    } else {
        return []
    }
}

const saveform = function(){
    sessionStorage.setItem('form', JSON.stringify(form))
}

//expose orders from module
const getform = () => form

const criaform = (pName, breed, sex, idade, status, nomeDono, emailDono, foneDono) =>{
    
    form.push({
        petnome: pName,
        raca: breed,
        sexo: sex,
        age: idade,
        vacina: status,
        dono: nomeDono,
        email: emailDono,
        fone: foneDono
    })
    saveform()
}

const removeform = (item) => {
    form.splice(item, 1)
    saveform()
}

const apagaform = () => sessionStorage.removeItem('form')

form = loadform()