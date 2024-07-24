import mongoose, { Schema } from "mongoose";

const Servers_Schema = new Schema({
    name: String,
    ip: String,
    port: Number,
    password: String
});

const Servers =
    mongoose.models.Servers || mongoose.model("Servers", Servers_Schema);

export default Servers;
