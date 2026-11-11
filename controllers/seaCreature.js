


var seaCreature = require("../models/seaCreature")

exports.seaCreature_list = async function(req, res) {
  try {
    let theSeaCreatures = await seaCreature.find();
    res.send(theSeaCreatures);
  }
  catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`)
  }
};

exports.seaCreature_view_all_page = async function(req, res) {
  try
  {
    let theSeaCreatures = await seaCreature.find();
    res.render('seaCreature', { title: 'Sea Creature Search Results', results: theSeaCreatures });
  }
  catch(err)
  {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

exports.seaCreature_detail = function(req, res) {
  res.send('NOT IMPLEMENTED: SeaCreature detaill:' + req.params.id);
};

exports.seaCreature_create_post = async function(req, res) {
  console.log(req.body);
  let document = new seaCreature();

  document.name = req.body.name;
  document.genusName = req.body.genusName;
  document.numberOfTeeth = req.body.numberOfTeeth;
  document.isVertebrate = req.body.isVertebrate;

  try {
    let result = await document.save();
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

exports.seaCreature_delete = function(req, res) {
  res.send('NOT IMPLEMENTED: SeaCreature delete DELETE');
};

exports.seaCreature_update_put = function(req, res) {
  res.send('NOT IMPLEMENTED: SeaCreature update PUT' + req.params.id);
};
