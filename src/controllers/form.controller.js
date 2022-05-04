function index (req, res){
    return res.status(200).render('form');
}

function login(req,res){
    return res.status(200).render('Login');
}

module.exports = {
    index, login
}