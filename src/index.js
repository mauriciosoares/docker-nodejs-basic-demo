const app = require('express')();

app.get('/', (req, res ) => 
    res.json({ message: 'Docker and ECS are super easy 🐳 update, CPU change low health percentage, another deployment!' }) 
);

const port = 21096;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`) );