import mongoose from "mongoose";

const PersonModel = mongoose.Schema({
    name: String,
    phone: Number,
    email: String,
    hobbies: [String],
})

const Person = mongoose.model("Person", PersonModel);

export default Person;