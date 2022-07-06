import MovieModel from "../model/movieModel.mjs";
import moment from "moment";

const apiHandler = async ({req,res,method,successStatus=200,erroStatus=404}) => {
    try {
        const movie = await method();
        res.status(successStatus).json(movie);
    } catch (error) {
        res.status(erroStatus).json({
            message: error.message
        })
    }
}

const constructDataOfSave = (requestBody) => {
    const data = {
        ...requestBody,
    }
    if(requestBody?.releaseDate) {
        data["releaseDate"] = moment.utc(requestBody?.releaseDate)
    }
    return data;
}

export const getAllMovies = async (req, res) => {
    apiHandler({
        res,
        method: async () => {
            return MovieModel.find();
        }
    });
}

export const getMovieById = async (req, res) => {
    apiHandler({
        req,
        res,
        method: async () => {
            return MovieModel.findById(req?.params?.id);
        }
    });
}

export const saveMovie = async (req, res) => {
    apiHandler({
        req,
        res,
        successStatus: 201,
        method: async () => {
            const movie = new MovieModel(
                constructDataOfSave(req.body)
            );
            return await movie.save();
        }
    });
}

export const updateMovie = async (req, res) => {
    apiHandler({
        req,
        res,
        method: async () => {
            return MovieModel.updateOne(
                { _id: req.params.id},
                {$set: constructDataOfSave(req.body)}
            );
        }
    });
}

export const deleteMovieById = async (req, res) => {
    apiHandler({
        req,
        res,
        method: async () => {
            return MovieModel.deleteOne({_id: req.params.id});
        }
    });
}