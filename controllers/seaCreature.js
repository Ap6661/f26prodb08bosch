


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

exports.seaCreature_detail = async function(req, res) {
  console.log("detail", req.params.id)

  try {
    let result = await seaCreature.findById(req.params.id);
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": document for id ${req.params.id} not found`);
  }
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

exports.seaCreature_update_put = async function(req, res) {
  console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
  try {
    let toUpdate = await seaCreature.findById( req.params.id)
    // Do updates of properties

    if (req.body.name) toUpdate.name = req.body.name;
    if (req.body.genusName) toUpdate.genusName = req.body.genusName;
    if (req.body.numberOfTeeth) toUpdate.numberOfTeeth = req.body.numberOfTeeth;
    if (req.body.isVertebrate) toUpdate.isVertebrate = req.body.isVertebrate;

    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)

  } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
  }
};
