const router = require('express').Router();
const Sem1 = require('../models/sem1.model');

router.route('/').get((req, res) => {
  Sem1.find()
    .then(sem1 => res.json(sem1))
    .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/:roll').get((req, res) => {
  Sem1.findOne({ rollnumber: req.params.roll })
    .then(sem1 => res.json(sem1))
    .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/add').post((req, res) => {
  const roll = req.body.rollnumber;
  const cprog = req.body.Cprogramming;
  const M1 = req.body.M1;
  const Phy = req.body.Physics;
  const Ed = req.body.EngineeringDrawing;
  const Eng = req.body.English;

  const newData = new Sem1({
    rollnumber: roll,
    Cprogramming: cprog,
    M1: M1,
    Physics: Phy,
    EngineeringDrawing: Ed,
    English: Eng
  });

  newData.save()
    .then(() => res.json("Sem1 marks added!"))
    .catch((err) => res.status(400).json('Error : ' + err));
});

router.route('/delete/:roll').delete((req, res) => {
  Sem1.findOneAndDelete({ rollnumber: req.params.roll })
    .then(() => res.json("Sem1 details deleted"))
    .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/update/:roll').put((req, res) => {
  Sem1.findOne({ rollnumber: req.params.roll })
    .then(student => {
      student.rollnumber = req.body.rollnumber;
      student.Cprogramming = Number(req.body.Cprogramming);
      student.M1 = Number(req.body.M1);
      student.Physics = Number(req.body.Physics);
      student.EngineeringDrawing = Number(req.body.EngineeringDrawing);
      student.English = Number(req.body.English);

      return student.save();
    })
    .then(() => res.json('Sem1 details updated!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/max/:sub').post((req, res) => {
  const subject = req.params.sub;
  const sortQuery = {};
  sortQuery[subject] = -1;

  Sem1.findOne({}, {}, { sort: sortQuery })
    .then(maxRow => {
      console.log('maxRow:', maxRow);
      if (maxRow && maxRow[subject] !== undefined) {
        res.json({ [subject]: maxRow[subject] });
      } else {
        res.status(404).json('No data found for subject: ' + subject);
      }
    })
    .catch(err => {
      console.error('Error:', err);
      res.status(500).json('Error: ' + err);
    });
});

router.route('/avg/:sub').post((req, res) => {
  const subject = req.params.sub;

  Sem1.find({})
    .then(data => {
      if (data.length === 0) {
        return res.status(404).json('No data found for subject: ' + subject);
      }

      let sum = 0;
      let count = 0;

      data.forEach(row => {
        if (row[subject] !== undefined) {
          sum += row[subject];
          count++;
        }
      });

      if (count === 0) {
        return res.status(404).json('No data found for subject: ' + subject);
      }

      const average = sum / count;
      res.json({ [subject]: average });
    })
    .catch(err => {
      console.error('Error:', err);
      res.status(500).json('Error: ' + err);
    });
});

module.exports = router;
