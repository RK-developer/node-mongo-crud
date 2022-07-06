import mongoose from "mongoose";

const Movie = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    cast: {
        type: Array,
        required: true
    },
    genre: {
        type: String,
        required: true,
    },
    releaseDate: {
        type: Date,
        required: true,
    }
});

export default mongoose.model('MovieModel', Movie);