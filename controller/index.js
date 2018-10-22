const db = require('../data/dbConfig')
module.exports = {
    newCat(name) {
        console.log(name)
        return db('catagories').insert({name: name});
    },

    catUserInsert (userId, catId){
        return db('cat_user').insert({user_id: userId, cat_id: catId})
    },

    userTagsGet(userId) {
        return db('cat_user')
            .select('cat_user.id', 'catagories.name')
            .leftJoin('catagories', 'catagories.id', 'cat_user.cat_id')
            .where('cat_user.user_id', userId)
    },
}
