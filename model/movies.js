
import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: { type: String },
    directorName: { type: String },
    producerName: { type: String },
    releaseYear: { type: Number },
    rating: { type: Number },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const Movie = mongoose.model('Movie', movieSchema);
