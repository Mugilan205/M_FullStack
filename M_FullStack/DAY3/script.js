/* promise - pending - the process is still in the initial state 
fullfilled - the process is completed 
rejected  - the process has failed and error occured  */
console.log("working");

/* console.log("hhhh");
let check = new Promise((resolve, reject) => {
    let num = 5;
    if (num % 2 == 0) {
        resolve("the number is even ");
    }
    else reject("its odd"); 
})

console.log(check);  */

/* let over = new Promise((res, rej) => {
    setTimeout(() => {
        res(100);
    }, 100); 
})
over.then((val) => {
    console.log(val);
})
    .catch((err) => {
        console.log(err);
}) */

/* let delay = (time) => {
    return new Promise((res, rej) => setTimeout(res, time)); 
}
async function asy() {
    console.log("1");
    await delay(1000);
    console.log("2");
    await delay(1000);
    console.log("3");
    await delay(1000);
    console.log("4");

}
asy();
----------------------------------------------------------

let latevalue = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("hello");
        }, 2000);
    });
};

async function late() {
    let val = await latevalue(); 
    console.log(val); 
}

late();
 */
function getId() {
    let value = document.getElementById("val").value;
    getdata(value)
    console.log(value)
}

async function getdata(val) {
    let res = await fetch(`https://jsonplaceholder.typicode.com/todos/${val}`);
    let data = await res.json();
    console.log(data.title);
}