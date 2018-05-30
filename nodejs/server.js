const express =  require( 'express' );
const app = express();
const Html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hello Nginx Proxy</title>
    <style>
        body{
        text-align: center;
        color: tomato;
        }
    </style>
</head>
<body>
    <h1>Hello My nginx this is Awesome Website Right ?</h1>
    <p>We will do SSL Letsencrypt Later </p>
    <p>And now you are Proxy on nodejs ports 3000 </p>
    <img src="https://goo.gl/cZzBcf" alt="">
</body>
</html>
`
app.get('/',(req,res)=>{
    res.send(Html);
});
app.get('/api',(req,res)=>{
    res.send('hello this api');
    console.log('already wtf');
});
app.listen(3000,()=>{
    console.log('server is listen on port 3000')
})