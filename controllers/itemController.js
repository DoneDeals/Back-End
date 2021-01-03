import Item from '../models/itemModel.js';
import generateToken from '../utils/generateToken.js';


// @desc    Add new item
// @route   POST /api/items/
// @access  Public
export async function addItem(req, res) {
  const { category, description, unitPrice } = req.body

  try {
    const itemExist = await Item.findOne({ description });

    if (itemExist) {
      return res.status(400).json({ message: 'Item already exist' })
    }

    const item = await Item.create({category, description, unitPrice});

    if (item) {
      res.status(201).json({
        _id: item._id,
        category: item.category,
        description: item.description,
        unitPrice: item.unitPrice,
        token: generateToken(item._id),
      })
    } else {
      res.status(400).json({ message: 'Invalid item data' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// @desc    Get Item details
// @route   GET /api/items/
// @access  Private
export async function getItemFromDocuments(req, res) {
  try {
//    const item = await Item.findById(req.item._id);
    const item = await Item.find();

console.log('item: ', item);
    if (item) {
      res.json({
        _id: item._id,
        category: item.category,
        description: item.description,
        unitPrice: item.unitPrice,
      });
    } else {
      res.status(404).json({ message: 'Item not found' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
