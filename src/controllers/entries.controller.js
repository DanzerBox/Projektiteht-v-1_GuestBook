const entries = [];

const renderGuestbook = (req, res) =>{
    res.render('index', {entries});
};

const renderNewMessage= (req, res) =>{
    res.render('new-message');
};

const createNewMessage= (req, res) =>{
    const newMessage = {
       title: req.body.username,
       name: req.body.country,
       content: req.body.message,
       
    };
    entries.push(newMessage);
    res.redirect('/');

};

module.exports = {
    renderGuestbook,
    renderNewMessage,
    createNewMessage
}