const isAddition = true;
const add = new Promise((success,reject)=>{
    let a =10;
    let b = 20;
    if (isAddition) {
        success(`Addition is successfull:${a+b}`);
    }
       reject(`Additon is rejected:${a-b}`)
});
add.then((success)=>{
    console.log(success);
}).catch((reject)=>{
    console.log(reject);
}).finally(()=>{
    console.log(`perform other operations`);
});