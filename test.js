let contohpromise = 
new Promise((resolve,reject)=>{
    let math = Math.round(Math.random())
    if(math == 0){
        reject("gagal")
    }else{
        resolve("berhasil")
    }
})

contohpromise
.then(data=>{
    console.log(data)
})
.catch(err=>{
    console.log(err)
})