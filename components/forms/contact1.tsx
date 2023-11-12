"use client";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { useForm, SubmitHandler } from "react-hook-form";
import TwitterBird from "../svgs/twitter-bird";
import Discord from "../svgs/discord";
import LinkedIn from "../svgs/linkedin";
import Telegram from "../svgs/telegram";

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
 * npm i @heroicons/react
 */

export default function Contact1() {
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
            <h1 className="text-center text-4xl font-semibold mb-8">Contact Us</h1>
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
                        Or contact us directly
                    </div>
                    <div className="flex flex-col gap-4 mb-6">
                        <div className="flex items-center">
                            <div className="border border-gray-500 rounded-full w-12 h-12 p-2 mr-3">
                                <EnvelopeIcon />
                            </div>
                            <div>
                                <h3 className="text-xl font-medium">Email</h3>
                                <div>johndoe@email.com</div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="border border-gray-500 rounded-full w-12 h-12 p-2 mr-3">
                                <PhoneIcon />
                            </div>
                            <div>
                                <h3 className="text-xl font-medium">Phone</h3>
                                <div>+0123456789</div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="border border-gray-500 rounded-full w-12 h-12 p-2 mr-3">
                                <MapPinIcon />
                            </div>
                            <div>
                                <h3 className="text-xl font-medium">Address</h3>
                                <div>2661 Midland, Ecplise Street, Griffith 500</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl mb-3 font-medium">Visit our Social Media and get connected</h3>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full border border-gray-400 p-2 flex items-center justify-center
                            cursor-pointer">
                                <TwitterBird />
                            </div>
                            <div className="w-12 h-12 rounded-full border border-gray-400 p-2 flex items-center justify-center
                            cursor-pointer">
                                <Discord />
                            </div>
                            <div className="w-12 h-12 rounded-full border border-gray-400 p-2 flex items-center justify-center
                            cursor-pointer">
                                <LinkedIn />
                            </div>
                            <div className="w-12 h-12 rounded-full border border-gray-400 p-2 flex items-center justify-center
                            cursor-pointer">
                                <Telegram />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}