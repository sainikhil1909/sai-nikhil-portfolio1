// const express = require("express");
// const router = express.Router();

// const Contact = require("../models/Contact");

// const nodemailer = require("nodemailer");

// router.post("/", async (req, res) => {


//     try {

//         const { name, email, message } = req.body;

//         const contact = new Contact({

//             name,
//             email,
//             message

//         });

//         await contact.save();

//         const transporter = nodemailer.createTransport({

//             host: "smtp.gmail.com",
//             port: 465,
//             secure: true,

//             auth: {

//                 user: process.env.EMAIL_USER,
//                 pass: process.env.EMAIL_PASS

//             },
//             tls: {
//                 rejectUnauthorized: false
//             }

//         });
       
//         await transporter.verify();

//         console.log("SMTP Connected");

//         await transporter.sendMail({

//             from: process.env.EMAIL_USER,

//             to: process.env.EMAIL_USER,

//             subject: "New Portfolio Contact Message",

//             html: `

//             <h2>New Message</h2>

//             <p><b>Name:</b> ${name}</p>

//             <p><b>Email:</b> ${email}</p>

//             <p><b>Message:</b></p>

//             <p>${message}</p>

//         `

//         });

//         res.status(200).json({

//             success: true,

//             message: "Message Sent Successfully"

//         });

//     }

//     catch (error) {

//         console.log(error);
//         console.error("CONTACT ERROR:", error);

//         res.status(500).json({

//             success: false,

//             message: "Server Error"

//         });

//     }


// });

// module.exports = router;

const express = require("express");
const router = express.Router();

const Contact = require("../models/Contact");
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/", async (req, res) => {

    try {

        const { name, email, message } = req.body;

        // Save to MongoDB
        const contact = new Contact({
            name,
            email,
            message
        });

        await contact.save();

        // Send Email
        await resend.emails.send({

            from: "Portfolio <onboarding@resend.dev>",

            to: process.env.EMAIL_USER,

            subject: "📩 New Portfolio Contact Message",

            html: `
                <div style="font-family:Arial;padding:20px">

                    <h2 style="color:#FF2A2A">
                        New Portfolio Message
                    </h2>

                    <hr>

                    <p>
                        <b>Name:</b> ${name}
                    </p>

                    <p>
                        <b>Email:</b> ${email}
                    </p>

                    <p>
                        <b>Message:</b>
                    </p>

                    <div style="
                        background:#f5f5f5;
                        padding:15px;
                        border-radius:10px;
                    ">
                        ${message}
                    </div>

                </div>
            `

        });

        res.status(200).json({

            success: true,

            message: "Message Sent Successfully"

        });

    }

    catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

});

module.exports = router;
