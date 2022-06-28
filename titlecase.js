console.log('this is based on title case')


function titleCase(str) {
 let a=str.split(" ")
 let b=[]
 for (let i = 0; i < a.length; i++) {
    b.push(a[i][0].toUpperCase()+a[i].slice(1))
    
 }
let c=b.join(" ")
 console.log(c)
}
titleCase("the quick brown fox jump over a lazy dog")