const express =  require('express');
const morgan = require('morgan');
const path =  require('path');

const indexRouer = require('./routes/index.routes');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/', indexRouer);

//settings
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), ()=>{
    console.log(`app in port ${app.get('port')}`);
});



