function index (req, res){
    return res.status(200).render('form');
}

module.exports = {
    index
}