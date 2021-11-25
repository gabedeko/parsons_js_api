//import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const fs = require('fs');

// define the Express app
const app = express();

// the database
var courses = [];
const dataPath = './data/courses.json';

// enhance your app security with Helmet
app.use(helmet());

// use bodyParser to parse application/json content-type
app.use(bodyParser.json());

// enable all CORS requests
app.use(cors());

// log HTTP requests
app.use(morgan('combined'));

// retrieve all courses
app.get('/', (req, res) => {

  fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        console.log(err);

          throw err;
      }
      courses = JSON.parse(data);

      const qs = courses.map(q => ({
        id: q.id,
        title: q.title,
        description: q.description,
        students: q.students.length,
      }));
      res.send(qs);
  });

});

// get a specific course
app.get('/:id', (req, res) => {
  const course = courses.filter(q => (q.id === parseInt(req.params.id)));
  if (course.length > 1) return res.status(500).send();
  if (course.length === 0) return res.status(404).send();
  res.send(course[0]);
});

// insert a new class
app.post('/', (req, res) => {
  const {title, description} = req.body;
  const newCourse = {
    id: courses.length + 1,
    title,
    description,
    students: [],
  };
  courses.push(newCourse);


  fs.writeFile(dataPath, JSON.stringify(courses, null, 2), 'utf8', (err) => {
      if (err) {
          throw err;
      }
      res.status(200).send();
  });

});

// insert a new student to a course
app.post('/student/:id', (req, res) => {
  const {student} = req.body;

  const course = courses.filter(q => (q.id === parseInt(req.params.id)));
  if (course.length > 1) return res.status(500).send();
  if (course.length === 0) return res.status(404).send();

  course[0].students.push({
    student,
  });

  res.status(200).send();
});

// start the server
app.listen(8000, () => {
  console.log('listening on port 8000');
});