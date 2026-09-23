const express = require('express');
const app = express();
const port = 3001;
const userRouter = require('./routes/user');
const productRouter = require('./routes/product');

app.set('view engine', 'ejs');

app.use('/users', userRouter);
app.use('/products', productRouter);

app.get('/nvku', (req, res) => {
	res.send('<h1 style="color: blue; font-size: 70px;"><i>Hello world???!</i></h1>');
});

app.listen(port, () => {
	console.log(`Server chạy tại http://localhost:${port}`);
});
