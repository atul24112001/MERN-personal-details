import Person from "../models/PersonModal.js"
import nodemailer from 'nodemailer'

export const CreatePerson = async (req, res) => {
    // console.log("shubham")
    const person = await Person.create(req.body);

    if (person) {
        res.status(200).json({
            status: "sucess",
            data: person
        })
    } else {
        res.status(400).json({
            status: "error",
            message: "Sorry, Can't Create The Person."
        })
    }
}
export const UpdatePerson = async (req, res) => {
    const id = req.params.id;
    const person = req.body;

    const updatedPerson = await Person.findByIdAndUpdate({ _id: id }, person);

    if (updatedPerson) {
        res.status(200).json({
            status: "sucess",
            data: updatedPerson
        })
    } else {
        res.status(400).json({
            status: "error",
            message: "Sorry, Can't Update The Person."
        })
    }
}

export const GetPerson = async (req, res) => {
    const persons = await Person.find({});

    if (persons) {
        res.status(200).json({
            status: "sucess",
            data: persons
        })
    } else {
        res.status(400).json({
            status: "error",
            message: "Something Went Wrong."
        })
    }
}

export const DeletePerson = async (req, res) => {
    const id = req.params.id;

    const del = await Person.findByIdAndDelete({ _id: id });

    if (del) {
        res.status(200).json({
            status: "sucess",
            message: "Persone Deleted Successfully!"
        })
    } else {
        res.status(400).json({
            status: "error",
            message: "Sorry, Can't Delete The Person."
        })
    }
}

export const SendEmail = async (req, res) => {
    const data = req.body;
    let str = ''

    for (let i = 0; i < data.length; i++) {
        str = str + `<p>[${i + 1}] Name: ${data[i].name}, Email Address: ${data[i].email}, Phone: ${data[i].phone}, Hobbies: ${data[i].hobbies.join()}</p>`
    }

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'atulmorchhlay204@gmail.com',
            pass: process.env.GOOGLECODE
        }
    });

    var mailOptions = {
        from: 'atulmorchhlay204@gmail.com',
        to: 'info@redpositive.in',
        subject: 'Sending Email using Node.js',
        text: "Personal Details",
        html: `<div>
        <h1>Personal Details</h1>
        ${str}
        </div>`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent!', info);
        }
    });
}