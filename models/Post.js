import mongoose from 'mongoose';

const Post_Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trin : true,
    },
    description:{
        type: String,
        required: true,
        trin : true,
    },
    image: {
        url: String,
        public_id: String,
    }

});


export default mongoose.model('Post', Post_Schema);