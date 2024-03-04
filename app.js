let  bank_open=true
let open=(time,work)=>{
    return new Promise((resolve,reject)=>{
        if(bank_open){
            setTimeout(()=>{
                resolve(work())
            },time)
        }
        else{
            console.log(`The bank is closed`)
        }
    })

}
open(10000,()=>{console.log(`You will be attended to in a short while`)})

.then(()=>{
    return open(10000,()=>console.log(`Go to teller number 15`))
})

.then(()=>{
    return open(17000,()=>console.log(`Leave teller number 15's desk`))
})

.then(()=>{
    return open(17000,()=>console.log(`Go to cashier's desk to report complaints`))
})

.then(()=>{
    return open(10000,()=>console.log(`Report complaints at cashiers office`))
})

.then(()=>{
    return open(0o000,()=>console.log(`Walk to reviews desk`))
})

.then(()=>{
    return open(15000,()=>console.log(`Write down reviews of services rendered`))
})

.finally(()=>{
    console.log(`THANK YOU FOR VISITING US. WELCOME AGAIN.`)
})