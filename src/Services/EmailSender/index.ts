import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import Handlebars from "handlebars";

type ConfigTemplate = {
    subject: string;
    file: string;
};

type ConfigTemplates = {
    [key: string]: ConfigTemplate;
};

type TemplatesOptions = {
    confirm_email: {
        confirm_url: string;
    };
};

export default class EmailSender {
    private transport;

    private templates: ConfigTemplates = {
        confirm_email: {
            subject: "Подтверждение регистрации",
            file: "confirm_email.html",
        },
    };

    constructor(host: string, user: string, pass: string, from: string) {
        this.transport = nodemailer.createTransport({
            host,
            secure: true,
            auth: { user, pass },
            from,
        });
    }

    sendMail(to: string, subject: string, html: string) {
        return this.transport.sendMail({ to, subject, html });
    }

    sendTemplate<T extends keyof TemplatesOptions, O = TemplatesOptions[T]>(
        to: string,
        template: T,
        options: O
    ) {
        if (!this.templates[template])
            return Promise.reject(new Error("Email template not found"));

        const file = this.templates[template].file;
        const subject = this.templates[template].subject;
        const file_path = path.resolve(__dirname, "Templates", file);

        return Promise.resolve()
            .then(() => fs.readFileSync(file_path).toString())
            .catch(() => Promise.reject(new Error("Email template not found")))
            .then(template => Handlebars.compile(template)(options))
            .then(html => this.sendMail(to, subject, html));
    }
}
