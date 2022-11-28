import { resolvePath } from "react-router-dom"

const Home = (props) => {
    console.log("ll",props.stt)

// let array = [2, 6, 3, 4566, 0, 3, 293, 1000, 999,  8]











//max nd min from array
// let maxNum = array[0];
// let posMax = 0;
// let minNum = array[0];
// let posMin = 0;
// const array2 = []

// for(let i=0; i<array.length; i++){

//     if(maxNum < array[i]){
//         maxNum = array[i];
//         posMax = i;
//     }
//     if(array[i] < minNum){
//         minNum = array[i];
//         posMin = i;
//     }}

//     let counter = 0;
//     let counter2 = 0;
//     console.log("max",posMax)
//     console.log("min",posMin)


//     for(let i=0; i<array.length; i++){
//         console.log(array[i])
//         if(posMax > posMin && (i == posMax - 1 || i == posMin) || posMax < posMin && (i == posMax || i == posMin-1)){
//             console.log("istina",i)
//             counter2++; 
//             array2[i] = array[counter2]
//             counter2++;
//         }
//         else if(i==8){
//             break
//         }
//         else {
//             console.log("i",counter2)
//             array2[i] = array[counter2]
//             counter2++;
//         }
        
//     }

// console.log(array)
// console.log(array2)
// console.log(minNum)

console.log("ej")







//     let max=0;
//     let counter = 0;
//     let position = 0;
//     let newarray=[]

// for(let i = 0; i < array.length; i++){
//     counter++
//     if(array[i] > max){
//         max = array[i]
//         position = i;
//     }
// }

// for(let i = 0; i < array.length-1; i++){
//     if(i<position){
//   newarray[i] = array[i]}
//   else
//     {newarray[i] = array[i+1]}
  
// }

//     console.log(max)
//     console.log(array)
//     console.log(newarray)
//     console.log("pos",position)







// const R=[]
// let k=-1;
// for(let i = 0; i <= array.length; i++){
//     if(array[i] % 2 ==0){
//         console.log(array[i])
//         k++;
//         create(array[i],k)
//     }}
// function create(q,w){
// R[w]=q;
// }
//     console.log(R)




// for(let i = 0; i <= array.length; i++){
//     let check = false;
//     for(let j = 2; j < array[i]; j++){
//     if(array[i] % j == 0){
//         check = true
//     }}
//     if(check == false){
//         console.log(array[i])
//     }

// }












    // for(let i = 2 ; i <= 53 ; i++){
    // let flag=0;
    //     for(let a = 2 ;a <= i ;a++){
    //         if(i % a == 0){
    //             flag = 1;
    //             break
    //         }
    //     }
    //      if(flag == 0 ){
    //             console.log(i)
    //         }
    // }







    // KUKOC



    // let a = [{ id: 1, zivotinja: "lav" }, { id: 2, zivotinja: "tigar" }, { id: 3, zivotinja: "leopard" }, { id: 4, zivotinja: "riba" }]
    // let b = [{ id: 4, zoo: "zagreb"}, { id: 3, zoo: "split"}, { id: 1, zoo: "rijeka"}, { id: 2, zoo: "osjek"}]
    // let c = [];
    // let d = [];
    // let fun = (a, b) => {
    //         for(let i = 0; i < a.length; i++){
    //             for(let j = 0; j < b.length; j++){
    //                 if(a[i].id == b[j].id){
    //                     c.push({"zivotinja":a[i].zivotinja, "zoo":b[j].zoo})
    //                     d[i] = {"zivotinja":a[i].zivotinja, "zoo":b[j].zoo}
    //                 }
    //             }
    //         }
    //         return c
    //     }
    //     console.log("a",a)
    //     console.log("b",b)
    // console.log(fun(a, b))
    // console.log(d)



    // PRVIZDK

    // let k1 = parseFloat(prompt("x"))
    // let k2 = parseFloat(prompt("x"))
    // let k3 = parseFloat(prompt("x"))

    // let fun = (x, y, z) =>{
    //     if(x* y* z > (x + y + z)){
    //        return console.log(`umnožak brojeva ${x} ${y} ${z} je veći od zbroja brojeva`)
    //     }
    //     else if(x* y* z < (x + y + z)){
    //        return console.log(`zbroj brojeva ${x} ${y} ${z} je veći od njihovog umnoška`)
    //     }
    //     else{
    //         return console.log(`zbroj brojeva ${x} ${y} ${z} je jednak njihovom umnošku`)
    //     }

    // }

    // fun(k1, k2, k3)


    // DRUGIZDK 

//     let a = [];
//     let b = [];

//     const fun = (x) =>{
//     let n = parseInt(prompt("broj elemenata niza"))

//     for(let i = 0; i < n; i++){
//         x[i] = parseFloat(prompt("unesi broj"))
//     }
//     return x
// }
//     fun(a)
//     fun(b)


//     const funar = (x) =>{
//         let sum = 0;
//         for(let i = 0; i < x.length; i++){
//             sum = sum + x[i]
//         }
//         return sum/x.length
//     }

//     let ara = funar(a)
//     let arb = funar(b)
//     const funfinal = (x) =>{
    
//     let max = ara > arb ? ara: arb
//     let min = ara < arb ? ara: arb
    
//     for(let i = 0; i < x.length; i++){
//         if(x[i] > min && x[i] < max){
//             console.log(x[i])
//         }
//     }
//     }
//     funfinal(a)
//     funfinal(b)
//     console.log(a)
//     console.log(b)


//DRUGIZDKBOLJI
// let a = [];
// let b = [];

// const fun = (x) =>{
// let n = parseInt(prompt("broj elemenata niza"))
// let sum = 0;
// for(let i = 0; i < n; i++){
//     x[i] = parseFloat(prompt("unesi broj"))
//     sum = sum + x[i];
// }
// return sum/x.length;
// }

// let ara = fun(a)
// let arb = fun(b)

// const funfinal = (x) =>{

// let max = ara > arb ? ara: arb
// let min = ara < arb ? ara: arb
// console.log(min, max)

// for(let i = 0; i < x.length; i++){
//     if(x[i] > min && x[i] < max){
//         console.log(x[i])
//     }
// }
// }
// funfinal(a)
// funfinal(b)
// console.log(a)
// console.log(b)


// TRECIZDK Krivo
//     const a = [];
//     const b = [];
// for(let i = 0; i<10; i++){
//     let num = parseFloat(prompt("x"))
//     const fun = (x) => {

//     let check = true;
//         for(let j = 2; j <= x; j++){
//         if(x % j == 0 && x != j){
//             check = false;
//         }}
//         if(check == true){
//             a.push(x)}
//         for(let i=0; i<a.length/2; i++){
//             console.log(i)
//             b[i]=a[i]
//         }
//             return b        
//         }
//     console.log("FUN",fun(num))
//     console.log(a)
// }

// TRECIZDK

// let num = parseInt(prompt("x"))
// let a = [];
// let b = [];
// let k=-1;
// const fun = (x) => {
//     for(let i=0; i < x; i++){
//         let check = true;
//         for(let j = 2; j < i; j++){
//             if(i % j == 0){
//                 check = false;
//             }
//         }
//         if(check == true && i >= 2){
//             k++
//             a[k] = i;
//         }
//     }
//      for(let k = 0; k < a.length/2; k++){
//         b[k] = a[k]
//     }
//     return b;
// }
// if(num>0){
// console.log(fun(num));}
// console.log(a)

// CETVRTIZDK

// let text = null;
// let counter = 0;
// let counterp = 0;
// let o=-1;
// let ar = [];
// while(text !== "0"){
//     text = prompt("x");
//     // const b = text.split("");
//     // console.log("b",b)

//     let check = true;
//     if(text != 0){
//     counter++}
//     console.log(counter)
//     for(let i = 0; i < text.length; i++){
        
//         if(text[i] != text[text.length-1 - i] && text != "0"){
//             check = false;
//             break
//         }
//     }
//     if(check == true && text != "0"){
//         counterp++
//         console.log("poliandrom")
//         o++;
//         ar[o]=text;
//         console.log(ar)
//     }
// }
// console.log(`postotak ${counterp}/${counter}*100 = ${counterp/counter*100} = ${(counterp/counter*100).toFixed(1)}`)


// const array = [8,4,1,5,2,0,9,3];
// for(let j=0; j<array.length-1; j++){
//     for(let i = 0; i < array.length-1; i++){
//     console.log("i",i)
//         if(array[i+1] > array[i]){
//             let temp = array[i];
//             array[i] = array[i+1];
//             array[i+1] = temp;
//             // i--;
//         }
//     }
// }
// console.log(array)

//ANAGRAM
// const letterscheck = (x) => {
//     let letters = {
//         a:0,
//         b:0,
//         c:0,
//         d:0,
//         e:0,
//         f:0,
//         g:0,
//         h:0,
//         i:0,
//         j:0,
//         k:0,
//         l:0,
//         m:0,
//         n:0,
//         o:0,
//         p:0,
//         q:0,
//         r:0,
//         s:0,
//         t:0,
//         u:0,
//         v:0,
//         w:0,
//         x:0,
//         y:0,
//         z:0}

//         for(let i = 0; i < x.length; i++){
//             letters[x[i]]++;
//         }      
//         return letters;
//     }

//     let a = [];
//     let text = null;
//     let i = -1;
//     while(text != " "){
        
//     text = prompt("unesi riječ")
//     if(text != " "){
//     i++;
//     a[i] = text; 
//     console.log(a)
//     if(i > 0){
//     for(let j = 0; j < a.length-1; j++){
        
//         if(text.length == a[j].length){
//             console.log("txt",text)
//         let firstWord = letterscheck(text);
//         let secondWord = letterscheck(a[j]);
//         let check = true;
//         for(let k = 0; k < 26; k++){
//             if(Object.values(firstWord)[k] != Object.values(secondWord)[k]){
//                 check = false;
//             }
//         }
//         if(check == true && text != a[j]){
//             console.log(`${text} je anagram riječi ${a[j]}`)
//         }
//     }
    
//     }}
//         }
//     }


const wait = mils => {
    console.log("koji")
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve();
        }, mils);

    })
}
const waitPromise = wait(1000);
console.log(waitPromise);

waitPromise.then(()=>{

    console.log("waited 1 s")
    console.log(waitPromise)
})
console.log("!",waitPromise)

    return(
    <>
    <div id="homebody">
    <div id="flexiblebody" className={props.stt ? "active" : null }>
     <h1>Home Page</h1>
    </div>
    </div>
     </>);
}


export default Home;