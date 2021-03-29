process.env.PORT = process.env.PORT || 3001;


process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


if(process.env.NODE_ENV === 'dev'){
    process.env.URI_DB = 'mongodb://localhost:27017/tindog1';
} else {
    process.env.URI_DB = 'mongodb+srv://lalo:lalo@cluster0.inmzb.mongodb.net/tindog?retryWrites=true&w=majority';
}

// process.env.URI_DB = 'mongodb+srv://lalo:lalo@cluster0.inmzb.mongodb.net/tindog?retryWrites=true&w=majority';
