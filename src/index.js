const app = require('express')();

app.get('/', (req, res ) => 
    res.json({ message: 'Docker and ECS are super easy 🐳 update' }) 
);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`) );