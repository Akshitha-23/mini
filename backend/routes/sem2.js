const router = require('express').Router();
let Sem2 = require('../models/Sem2.model');

router.route('/').get((req,res)=>
{
    Sem2.find()
            .then(Sem2 => res.json(Sem2))
            .catch(err=> res.status(400).json('Error : '+ err));
});

router.route('/:roll').get((req,res) =>
{
    Sem2.findOne({rollnumber : req.params.roll})
        .then(Sem2=>res.json(Sem2))
        .catch(err => res.status(400).json('Error : '+err))
})

router.route('/add').post((req,res) =>
{
    const roll = req.body.rollnumber;
    const ds = req.body.DataStructures;
    const M2 = req.body.M2;
    const Chem = req.body.Chemistry;
    const Evs = req.body.EnvironmentalScience;
    const py = req.body.Python;
    
    const newData = new Sem2({
        rollnumber : roll,
        DataStructures : ds,
        M2 : M2,
        Chemistry: Chem,
        EnvironmentalScience : Evs,
        Python :py
    });

    newData.save()
              .then(() => res.json("Sem2 marks added!"))
              .catch((err) => res.status(400).json('Error : '+ err));

})

router.route('/delete/:roll').delete((req,res)=>
{
    Sem2.findOneAndDelete({rollnumber:req.params.roll})
    .then(()=> res.json("Sem2 details deleted"))
    .catch(err=> res.status(400).json('Eroor : '+err))
})


router.route('/update/:roll').put((req,res)=>
{
    Sem2.findOne({rollnumber:req.params.roll})
    .then(student => {
        student.rollnumber = req.body.rollnumber;
        student.DataStructures = Number(req.body.DataStructures);
        student.M2 = Number(req.body.M2);
        student.Chemistry = Number(req.body.Chemistry);
        student.EnvironmentalScience = Number(req.body.EnvironmentalScience);
        student.Python = Number(req.body.Python);
        
  
        student.save()
          .then(() => res.json('Sem2 details updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
    .catch(err=> res.status(400).json('Error : '+err))
})


router.route('/max/:sub').post((req, res) => {
    const subject = req.params.sub;
    const sortQuery = {};
    sortQuery[subject] = -1;
  
    Sem2.findOne({}, {}, { sort: sortQuery })
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
  
    Sem2.find({})
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