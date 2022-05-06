function index (req, res){
    return res.status(200).render('form');
}

function login(req,res){
    return res.status(200).render('Login');
}

function admin(req,res){
    return res.status(200).render('admin');
}
module.exports = {
    index, login, admin
}