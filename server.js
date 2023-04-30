

const express = require('express');
const app = express();
const port = 3000;              

app.get('/', (req, res) => {
    res.send("Hello World");

})


//          Making API 
app.get('/about', (req, res) => {
    res.send(`Hello from Talha sohail`);

})

app.listen(port, () => {
    console.log(`Example  ${port} `);
})





//require : node module me jao jo pakage ha usko le aao


/*


npm intit : making pakage.json

npm i express : express install

     important
get post 

port : har system me n no of prot hoty hai jaha pr Node run hoti ha 

get()  : A   method in express

200 :    work is ok 
300 :    
404 :   bad request 

500 or above : syntax err or undefined   (  bakend developer err )

" / " : It is route ,define that it is a first page of port 

----------------------------
thunder client : use for   check server is ok or not 
http://localhost:3000/about

--------------------------------
GitHub

*/