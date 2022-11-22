const express = require("express");
const path = require("path");

const port_number = 3000;
const app = express();

app.use(express.urlencoded({ extended: false }));

//load the form for inputing numbers
app.get("/", (req, res) => {

    res.sendFile(path.join(__dirname, "views", "calculator-form.html"));
});
//
app.post("/add-numbers", (req, res) => {
    const firstNum = parseFloat(req.body.firstNumber);
    const secondNum= parseFloat(req.body.secondNumber);
    const op = req.body.operator ;
    let result = 0.0;
    switch (op) {
        case '+':
            result = firstNum + secondNum;
            break;
        case '-':
            result = firstNum - secondNum;
            break;
        case '*':
            result = firstNum * secondNum;
            break;
        case '/':
            result = firstNum / secondNum;
            break;
        default:
            result=-1;
    }
    const queryString = `result=${result}`;
    const redirectUrl = `/resultPage?${queryString}`;
    res.redirect(303, redirectUrl);
    // res.render(path.join(__dirname,"views","result.html"),{result:result});
});

app.get("/resultPage",(req,res)=>{
    const resultPageContent=`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Result</title>
</head>
<body>
    <p>The Answer is: ${req.query.result}</p>
</body>
</html>
    `;
res.send(resultPageContent);
res.end();
});

app.listen(port_number, () => {
    console.log(`Server started. Running on port ${port_number}`);
});
console.log(`Starting the server...`);