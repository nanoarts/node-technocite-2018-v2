

//          const arr = []
//          arr.push('test')
//          arr[1]='test02'

//          console.log(arr)
// ----------------------------------

//          var c = 3
//          function test(){
//              var c=5
//          }

// ----------------------------------


//          let b = 4
//              {
//                  let b=3
//              }

//           console.log(b)
 
// ----------------------------------


//          (function(msg){
//              console.log(msg)
//          })('a')

// ----------------------------------


//              var obj = {
//                  name:'jori',
//                  job:'student',
//                  toString : function(){
//                      // return 'name is' + this.name+ 'job is'+ this.job
//                          return `name is ${this.name} job is ${this.job} `
//                  }
//              }

//              console.log(obj.toString())

// ----------------------------------

//      const arr=[a,b] = ['gilles','bertrand']
//      console.log(b)
//      console.log(a)
//      console.log(arr)

// ----------------------------------

//          const numbers = [1,2,3,4,5,6,7,8]

//          function dblNumbers(arr){
     
//              const arrDbl = []

//              for ( let i=0, length = arr.length;i<length;i++){
//                  arrDbl.push(arr[i]*2)
//              }
    
//              return arrDbl

//          }

//          console.log(dblNumbers(numbers))

// ----------------------------------

// const numbers = [1,2,3,4,5,6,7,8]

// function dblNumbers(arr){
//     // return arr.map(function(item){
//     //     return item*2
//     // })
    
//     return arr.map(item=>item*2)
// }

// console.log(dblNumbers(numbers))

// ----------------------------------

const numbers = [1,2,3,4,5,6,7,8]

console.log(numbers.reduce((prev,current)=>{
    console.log(prev,current)
    return prev+current
},0))  // il faut initialiser


console.log(numbers.filter(item=>item%2 ===0))  //pour avoir les nombres pair