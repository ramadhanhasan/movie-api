Backend Test Stockbit

#1  Simple Database querying
SELECT u.ID, u.UserName, uu.UserName as ParentUserName FROM user u LEFT
JOIN user uu ON u.Parent = uu.ID

#2  Small ExpressJS server to search movies
Repo Github : https://github.com/ramadhanhasan/movie-api

Clone and run with 'npm run dev'

Public URL you can check the result : http://161.117.189.109:5500/api/movie
Example :
http://161.117.189.109:5500/api/movie/search?search=batman&page=2
http://161.117.189.109:5500/api/movie/detail?id=tt4853102

#3   Refactor the code
function findFirstStringInBracket(str){
 if(str.length > 0){
 let array = str.split("");
 let res = '';
 let validateFirstBracket : Boolean = false;
 let validateClosingBracket : Boolean = false;

 for (let i = 0; i < array.length; i++) {
 if(validateFirstBracket === true && array[i] == ')'){
 return res
 break;
 }else if(array[i] == '(' && validateFirstBracket === false){
 validateFirstBracket = true
 }else if(validateFirstBracket === true &&
validateClosingBracket === false){
 res += array[i]
 }
 }
 }
}


#4    Logic Test
function anagram(arr){
 if(arr.length > 0){
 let res = []
 for (let i = 0; i < arr.length;) {
 let tempRes = []
 let tempArr = []
 tempRes.push(arr[i])
 for (let j = 0; j < arr.length; j++) {
 if(j !== i){
 if(arr[i].length===arr[j].length && arr[i].split("").sort().join() ==
arr[j].split("").sort().join() === true){
 tempRes.push(arr[j])
 }else{
 tempArr.push(arr[j])
 }
 }
 }
 res.push(tempRes)
 arr = tempArr
 }
 return res
 }
}
