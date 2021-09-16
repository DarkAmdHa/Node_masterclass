const path = require('path');
const express = require ('express')
const hbs = require('hbs');

const app = express();
//Define Paths for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const templatesPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//Setup Handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', templatesPath);
hbs.registerPartials(partialsPath);

//Setup static dir to serve
app.use(express.static(publicDirectoryPath));


app.get('', (req,res)=>{
    res.render('index', {
        title: 'Weather App',
        name: 'Hamid Tahir'
    });
});

app.get('/about', (req,res)=>{
    res.render('about', {
        name: 'Hamid Tahir',
        title: 'About Me'
    })
});

app.get('/help', (req,res)=>{
    res.render('help', {
        para: "Hi there. This is a help page. Here we try to help you!",
        title: 'Help',
        name: 'Hamid Tahir'
    })
});


app.get('/weather', (req,res)=>{
    res.send({
        location: "Okara,Punjab,Pakistan",
        weather: 'HOOOOOOOOOOOOOOOOOOOOOOOOOT'
    })
});

app.get('/help/*', (req,res)=>{
    res.render('404',{
        title: 'Error 404',
        error: 'Help article not found',
        name: 'Hamid Tahir'
    });
});

app.get('*', (req,res)=>{
    res.render('404',{
        title: 'Error 404',
        error: 'Page not found',
        name: 'Hamid Tahir'

    });
});


app.listen(3000,()=>{
    console.log('Server is up and running on port 3000');
});