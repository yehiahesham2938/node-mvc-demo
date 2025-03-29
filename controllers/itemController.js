const Item = require('../models/item');

exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.render('index', { items });
  } catch (err) {
    res.status(500).send('Error fetching items');
  }
};

exports.addItem = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.redirect('/');
    await new Item({ name }).save();
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Error saving item');
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    await Item.findByIdAndDelete(id);
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Error deleting item');
  }
};