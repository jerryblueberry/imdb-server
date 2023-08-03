const mongoose = require('mongoose');

const dbConnect = () => {
    const connectionParams = {useNewUrlParser:true};
    mongoose.connect(process.env.DB,connectionParams);

    mongoose.connection.on("connected",() => {
        console.log("Connected to database Successfully");
    })
    mongoose.connection.on("error",(err) => {
        console.log("Error While Connecting", + err);
    })

    mongoose.connection.on("disconnected",() => {
        console.log("Mongodb Connection Disconnected");
    })
}


module.exports = dbConnect;