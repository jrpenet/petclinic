let temp = []

const loadtemp = function(){
    const tempJSON = sessionStorage.getItem('temp')
    
    if(tempJSON !== null){
        return JSON.parse(tempJSON)
    } else {
        return []
    }
}

const savetemp = function(){
    sessionStorage.setItem('temp', JSON.stringify(temp))
}

//expose orders from module
const gettemp = () => temp

const criatemp = (item) =>{
    
    temp.push({
        animal: item
    })
    savetemp()
}

const removetemp = (item) => {
    temp.splice(item, 1)
    savetemp()
}

const apagatemp = () => sessionStorage.removeItem('temp')

temp = loadtemp()