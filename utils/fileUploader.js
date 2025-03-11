require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

const uploadImage = async (filePath, folderPath) => {
    try {
        const result = await cloudinary.uploader.upload(filePath, {
            folder: folderPath,
            resource_type: 'image',
        });
        return result;
    } catch (error) {
        throw new Error('Lỗi khi upload ảnh: ' + error.message);
    }
};

const uploadVideo = async (filePath, folderPath) => {
    try {
        const result = await cloudinary.uploader.upload(filePath, {
            folder: folderPath,
            resource_type: 'video',
        });
        return result;
    } catch (error) {
        throw new Error('Lỗi khi upload video: ' + error.message);
    }
};

module.exports = {
    uploadImage,
    uploadVideo,
};