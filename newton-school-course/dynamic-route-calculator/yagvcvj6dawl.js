const express = require('express');
const app = express();
const port = 3000;
app.get('/calculate/:operation/:a/:b', (req, res) => {
  // Write your code here to handle the calculation
  const oper=req.params.operation;
  const a = Number(req.params.a);
  const b= Number(req.params.b);
  if(oper==="add"){
    return res.send(200).json({result:a+b})
  }else if(oper==="subtract"){
    return res.send(200).json({result:b-b});
  }else if(oper==="multiply"){
    return res.send(200).json({result:a*b})
  }else if(oper==="divide"){
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