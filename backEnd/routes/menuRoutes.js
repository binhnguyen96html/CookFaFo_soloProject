const express = require('express');
const menuController = require('../controllers/menuController')

const router = express.Router();


router.get('/', menuController.fetchMenus, (req,res) => {
    res.status(200).json(res.locals.menus)
})

router.get('/:id', menuController.getMenuById, (req,res) => {
    res.status(200).json(res.locals.menu)
})

module.exports = router;