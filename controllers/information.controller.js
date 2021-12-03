const Information = require('../models/Information');

exports.createQuote = async (req, res) => {
    try {
        let { info } = req.body;

        let errors = [];   
        if (!info) {
            errors.push('info');
        }
        if (errors.length > 0) {
            errors = errors.join(',');
            return res.status(400).json({
                message: `These are required fields: ${errors}.`,
                status: false,
            });
        }
        
        let infromation = await Information.create({
            info
        });

        return res.status(200).json({
            status: 'Success',
            data: infromation,
        });

    } catch (err) {
        return res.status(400).json({
            status: 'Fail',
            message: err,
        });
    }
};

exports.getAllQuotes = async (req, res) => {
    try {
        const information = await Information.find();
  
        res.status(200).json({
            status: 'success',
            data: information,
        });
    } catch (err) {
        res.status(400).json({
            status: 'Fail',
            message: err,
        });
    }
};

exports.searchQuote = async (req, res) => {
    try {
        let searchCriteria = {};
    
        if (req.query.info) {
            searchCriteria.info = new RegExp('.*' + req.query.info.toLowerCase() + '.*', 'i');;
        }
    
        let information = await Information.find(searchCriteria);
    
        return res.status(200).json({
            status: 'Success',
            data: information
        });
  
    } catch (err) {
        return res.status(400).json({
            status: 'Fail',
            message: err,
        });
    }
};