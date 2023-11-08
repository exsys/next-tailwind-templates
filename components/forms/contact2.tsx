"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import TwitterBird from "../svgs/twitter-bird";
import Discord from "../svgs/discord";
import LinkedIn from "../svgs/linkedin";
import Telegram from "../svgs/telegram";
import Link from "next/link";

type FormInputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
}

/**
 * NOTE:
 * don't forget to import the svgs and install dependencies:
 * npm i react-hook-form
 * npm i heroicons
 */

export default function Contact2() {
    const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm<FormInputs>({
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        }
    });

    const submitContactForm: SubmitHandler<FormInputs> = async (form) => {
        const { name, email, subject, message } = form;
        const formObject: FormInputs = { name, email, subject, message };

        const res = await fetch("/api/email", {
            method: "post",
            body: JSON.stringify(formObject),
            headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        if (data.ok) {
            //toastSuccess("Successfully sent email", "dark");
            setValue("name", "");
            setValue("email", "");
            setValue("subject", "");
            setValue("message", "");
        } else {
            //toastError(data.error, "dark");
        }
    }

    return (
        <div className="w-full h-fit mt-40 md:mt-0">
            <h1 className="text-center text-4xl font-semibold mb-8">Contact</h1>
            <div className="flex flex-col lg:flex-row gap-10 w-[96%] max-w-[1000px] mx-auto">
                <div className="flex-1">
                    <h2 className="text-3xl font-semibold mb-2">Say Hello</h2>
                    <form onSubmit={handleSubmit(submitContactForm)}>
                        <div className="flex flex-col gap-6">
                            <div>
                                <input type="text" placeholder="Your Name" {...register("name", { required: "Name is required" })}
                                    id="name" className="w-full p-3 outline-none rounded-lg border border-slate-500" />
                            </div>
                            <div>
                                <input type="text" placeholder="Your Email (or other way to contact you)"
                                    {...register("email", { required: "Contact is required" })} id="email"
                                    className="w-full p-3 outline-none rounded-lg border border-slate-500" />
                            </div>
                            <div>
                                <input type="text" placeholder="Your Subject" {...register("subject", { required: "Subject is required" })}
                                    id="subject" className="w-full p-3 outline-none rounded-lg border border-slate-500" />
                            </div>
                            <div>
                                <textarea cols={30} rows={6} placeholder="Your Message" id="message"
                                    {...register("message", { required: "Message is required" })}
                                    className="w-full p-3 outline-none rounded-lg border border-slate-500" />
                            </div>
                            <button type="submit" disabled={isSubmitting}
                                className="text-left bg-yellow-400 w-fit px-5 py-3 rounded-full">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
                <div className="flex-1 text-lg">
                    <h2 className="text-3xl font-semibold mb-2">Contact Info</h2>
                    <div className="mb-6">
                        Or contact me directly through one of my Social Media Accounts
                    </div>
                    <div className="flex flex-col gap-4 mb-6">
                        <div className="flex gap-4">
                            <Link href={"https://www.x.com/exsysjj"} target="_blank"
                                className="w-12 h-12 rounded-full border border-gray-400 p-2 flex items-center justify-center cursor-pointer">
                                <TwitterBird />
                            </Link>
                            <div title="@exsys"
                                className="w-12 h-12 rounded-full border border-gray-400 p-2 flex items-center justify-center cursor-pointer">
                                <Discord />
                            </div>
                            <Link href={"https://www.linkedin.com/in/justin-meschankin-5057b8184/"} target="_blank"
                                className="w-12 h-12 rounded-full border border-gray-400 p-2 flex items-center justify-center cursor-pointer">
                                <LinkedIn />
                            </Link>
                            <Link href={"https://t.me/exsysjj"} target="_blank"
                                className="w-12 h-12 rounded-full border border-gray-400 p-2 flex items-center justify-center cursor-pointer">
                                <Telegram />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}