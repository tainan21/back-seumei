require('dotenv').config();
const cloudinary = require('cloudinary').v2;

const express = require('express');
const app = express();
var cors = require('cors');
app.use(express.static('public'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());


cloudinary.config({ 
    cloud_name: 'galaxia-burguer', 
    api_key: '996113577515893',
    api_secret: 'H0QmONVU6Pe-3gmjSXZLaQVTV3g'
});




const GetImg = async (req, res, next) => {    
        
    try {
		const { resources } = await cloudinary.search
        .expression('folder:galaxia-burguer')
        .sort_by('public_id', 'desc')
        .max_results(30)
        .execute();

    	const publicIds = resources.map((file) => file.public_id);
    	res.send(publicIds);
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
		
}



const AddImage = async (req, res, next) => {    
        
    try {
        //console.log(req.body.data)
        const fileStr = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'ml_default',
        });       
        return res.status(201).json({retorno: uploadResponse})
    } catch (err) {
        console.error(err);
        return res.status(500).json({ err: 'Something went wrong' });
    }
     
}




module.exports = {AddImage, GetImg }