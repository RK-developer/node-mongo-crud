import {
    getAllMovies,
    getMovieById,
    saveMovie,
    updateMovie,
    deleteMovieById
} from "../controller/movieController.mjs";

const MovieRoute = ({express}) => {
    const router = express.Router();
    router.get('/movies', getAllMovies);
    router.get('/movie/:id', getMovieById);
    router.post('/movie', saveMovie);
    router.put('/movie/:id', updateMovie);
    router.delete('/movie/:id', deleteMovieById);
    return router
}

export default MovieRoute