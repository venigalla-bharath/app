const app = require("express")();
const PORT = process.env.PORT || 2800;
app.get("",(req, res) => {
    res.send("hellllllllo");

});
app.listen(PORT,()=> {
    console.log('app up at port ${PORT}');

});