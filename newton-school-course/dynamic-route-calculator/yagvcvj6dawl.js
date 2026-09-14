// Write your code here to handle the calculation
  const operation=req.params.operationation;
  const a = Number(req.params.a);
  const b= Number(req.params.b);
  if(operation==="add"){
    return res.send(200).json({result:a+b})
  }else if(operation==="subtract"){
    return res.send(200).json({result:b-b});
  }else if(operation==="multiply"){
    return res.send(200).json({result:a*b})
  }else if(operation==="divide"){
    if(b===0){
      return res.send(400).json({error: "Division by zero is not allowed."})
    }
    return res.send(200).json({result:a/b})
  }else{
    res.send(400).json({ error: "Invalid operation specified." })
  }
});
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
module.exports = { app };
app.get('/calculate/:operation/:a/:b', (req, res) => {
const port = 3000;
const app = express();
const express = require('express');