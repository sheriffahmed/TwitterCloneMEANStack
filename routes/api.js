const router = require('express').Router();

router.route('/posts')
// creates a new post
.post((req,res)=>{
    res.send({message: 'TODO: Create a new post'})
})
// returns all posts
.get((req, res)=>{

    // temporary solution
    res.send({message: 'TODO: Return all posts'})

});
// apis requests for specific post
router.route('/posts/:id')

.put((req, res)=>{
        return res.send({message: `TODO: modify an existing post using post param id ${req.param.id}`});
})
.get((req, res)=>{
    return res.send({message: `TODO: get an existing post using the post id as a param ${req.param.id}`});
})
.delete((req, res)=>{
    return res.send({message: `TODO delete  an existing post using post id as a param ${req.param.id}`});
});

module.exports = router;