import express from 'express';
import morgan from  'morgan'

const app = express();
const PORT = 3000;

const data = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.use(express.json());
app.use(morgan('tiny'))

app.get('/api/persons', (req, res)=> {
   res.send(data)
})

app.get('/info', (req,res) => {
    const entityCOunt = data.length;
    const requestTime = new Date().toUTCString();
    
    console.log(entityCOunt, requestTime) ;
    res.send(`
        <h1> Phonebook has info for ${entityCOunt} people</h1>
        <p> ${requestTime} </p>
        `)
})

app.get('/api/persons/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id)
    const person = data.find(p => p.id == id);
    if(person) {
        return res.status(200).send(person)
    }
    return res.status(404).send("Entity not found(404)")
})

app.delete('/api/persons/:id', (req, res) => {
    const id = req.params.id;
    const initialPhonebook = data.length;
    const deleted = data.filter(p => p.id !== id);

    if (data.length < initialPhonebook) {
        res.status(204).send();
    } else {
        res.status(404).send("Entity not found");
    }
})

app.post('/api/persons', (req, res) => {
    const {name, number} = req.body;
    if( !name || !number) {
        return res.status(400).json({message: "Name and Number are required"});
    };
    const id = (Math.random() * 1000000).toFixed(0);
   
   const existedName = data.find(p => p.name === name);
   if (existedName) {
    return res.status(409).json({ message: "This person already exists in the phonebook." });
}
   console.log(existedName);

    const newPerson = {
        id,
        name,
        number
    };
    data.push(newPerson);
    return res.status(201).send(data)
})

app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`);
})