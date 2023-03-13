// Importeer express uit de node_modules map
import express, { response } from 'express'

const url = 'https://api.visualthinking.fdnd.nl/api/v1/methods?first=1000'
const data = await fetch(url).then((response) => response.json())

// Maak een nieuwe express app aan
const app = express()

// Stel ejs in als template engine en geef de 'views' map door
app.set('view engine', 'ejs')
app.set('views', './views')

// Gebruik de map 'public' voor statische resources
app.use(express.static('public'))

// Maak een route voor de index
app.get('/', function (req, res) {
  // res.send('Hello World!')
  res.render('index', data)
})

app.get('/beschrijving', (request, response) => {
  response.render('beschrijving', data)
})

app.get('/stappenplan', (request, response) => {
  response.render('stappenplan', data)
})

app.get('/stappenplan2', (request, response) => {
  response.render('stappenplan2', data)
})

app.get('/stappenplan3', (request, response) => {
  response.render('stappenplan3', data)
})

app.get('/stappenplan4', (request, response) => {
  response.render('stappenplan4', data)
})

app.get('/voorbeelden', (request, response) => {
  response.render('voorbeelden', data)
})

// Stel het poortnummer in waar express op gaat luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal het ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
