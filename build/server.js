const express = require('express');
const app = express();

// Serve the React app
app.use(express.static('build'));
app.get('/',(req,res)=>{
  res.send("../src/App.js")
})
// Start the Express server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});