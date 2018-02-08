// create an Item
exports.createItem = (req, res) => {
    let newItem = new Item(req.body);
    newItem.save( (err, item) => {
        if (err)
            res.send(err);
        
        res.json(item);
    });
};