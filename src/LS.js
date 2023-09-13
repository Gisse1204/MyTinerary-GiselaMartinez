export const LS ={
    getText: (key)=>(
        localStorage.getItem(key)
    ),

    get: (key)=>(
        JSON.parse(localStorage.getItem(key))
    ),

    rm:(key)=>(
        localStorage.removeItem(key)
    ),

    set: (key, value)=>{
        JSON.stringify(localStorage.setItem(key, value))
    },

    clear: ()=>{
        localStorage.clear()
    }
}