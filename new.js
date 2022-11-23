var vi="vinayak"
console.log(vi)

let num=17
console.log(typeof num)
console.log(typeof vi)
const alpha=["a","bi","cdh","djjd"]
console.log(alpha)
/*for(i in alpha){
    console.log(alpha[i])
}*/
console.log(alpha.filter(a=>a.length===3))
console.log(alpha.map(a=>a.length>=3))


try{
    const a =1/0
    console.log(a)
    
}catch(weirdError){
    console.log(weirdError)
}