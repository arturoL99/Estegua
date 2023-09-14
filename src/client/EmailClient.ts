import emailjs from "@emailjs/browser";

const sendEmail = (e:any, name:string, email:string) => {
    if (name && email !== "") {
        e.preventDefault();

        emailjs.sendForm(`${process.env.NEXT_PUBLIC_MAIL_SERVICE_ID}`,
            `${process.env.NEXT_PUBLIC_MAIL_TEMPLATE_ID}`, e.target,
            `${process.env.NEXT_PUBLIC_MAIL_PUBLIC_KEY}`)
            .then(() => {
                alert("Message sent");
            },
                () => {
                    alert("An error occurred, Please try again");
                });
    } else {
        console.log("campo vuoto");
    }
};

export default sendEmail;