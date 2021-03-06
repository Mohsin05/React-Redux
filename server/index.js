import express from 'express'
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware'
import webpackconfig from '../webpack.config.dev.js';

let app = express();

app.use(webpackMiddleware(webpack(webpackconfig)));


app.get('/*',(req,res)=>{

  res.sendFile(path.join(__dirname,'./index.html'));
});

app.listen(3000,() =>console.log('Running on localhost:3000'));
