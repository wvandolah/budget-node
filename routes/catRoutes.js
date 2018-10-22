const router = require('express').Router();
const controller = require('../controller/index')
const passport = require('passport')

const tokenCheck = passport.authenticate(['jwt'], { session: false })

router
    .route('/')
    .post(tokenCheck, async (req, res, next) => {
        // new cat should always post to cat_user table with both id's
        try {
            const { catName } = req.body;
            const { id } = req.user;
            const newCatId = await controller.newCat(catName);
            const catUserId = await controller.catUserInsert(id, newCatId[0])
            res.status(201).json({user: id, catId: newCatId[0], catUserID: catUserId[0]})
        } catch (err){
            next(err)
        }
    });

router
    .route('/userCat')
    .post(tokenCheck, async (req, res, next) => {
        // adding a cat to a users profile. needs catId, userId is taken from token
        try{
            const { catId } = req.body;
            const { id } = req.user;
            const catUserId = await controller.catUserInsert(id, catId);
            res.status(201).json({ catUserId: catUserId[0] })
        } catch (err){
            next(err)
        }
    })
    .get(tokenCheck, async (req, res, next) => {
        // this should return a list of cat names along with the id on the join table
        try{
            const { id } = req.user;
            const userTagNames = await controller.userTagsGet(id);
            res.status(200).json(userTagNames);
        } catch(err){
            next(err)
        }
    })
    .delete(tokenCheck, async (req, res, next) => {
        try{
            
        } catch(err){
            next(err)
        }
    })








module.exports = router;