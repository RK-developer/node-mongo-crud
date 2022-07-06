
const dbInit = ({mongoose}) => {
    mongoose.connect('mongodb://localhost:27017/movie_db',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const db = mongoose.connection;
    db.on('error',() => console.log(error));
    db.once("open", () => console.log("Database Connected"));
}

export default dbInit;