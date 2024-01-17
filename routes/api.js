module.exports = app => {

    app.get('*', (req, res) => res.sendFile('/index.html'));

    app.post('/login', (req, res) => {
        const user1 = 'mike';
        const pass1 = 'bike';
        const userInput = req.body.username;
        const passInput = req.body.password;

        if (userInput === user1 && passInput === pass1) {
            console.log('successful login');
            res.json({ loggedIn: true });
        }
        else {
            console.log('wrong username or password')
            res.json({ loggedIn: false });
        }
    });


}