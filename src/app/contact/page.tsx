"use client"

import NavBar from "@/Components/Navigation/NavBar";
import React from "react";
import scrollAnimator from "@/Context/Animation/AnimationService";
import Footer from "@/Components/Navigation/Footer";

export default function ContactPage() {
    React.useEffect(() => {
        scrollAnimator();
    }, []);

    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [subject, setSubject] = React.useState("");
    const [message, setMessage] = React.useState("");

    const validateInput = (input: HTMLInputElement | HTMLTextAreaElement) => {
        if (input.checkValidity()) {
            input.classList.remove("bg-red-50");
            input.classList.add("bg-green-50");
        } else {
            input.classList.remove("bg-green-50");
            input.classList.add("bg-red-50");
        }
    };

    const buildMailto = () => {
        const mail = "sales@flm-solutions.com";
        const body = `${message}
        
        
                        Nom et prénom: ${firstName} ${lastName}
                        Téléphone: ${phone}`;

        return `mailto:${mail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <>
            <NavBar />
            <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center opacity-0">
                    <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        Contact
                    </h2>
                    <p className="mt-2 text-lg/8 text-gray-600">
                        Des questions ou besoin d’aide ? Remplissez notre formulaire et
                        notre équipe vous répondra rapidement. Nous sommes là pour vous !
                    </p>
                </div>

                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="mx-auto mt-16 max-w-xl sm:mt-20 opacity-0"
                >
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        {/* First Name */}
                        <div>
                            <label
                                htmlFor="first-name"
                                className="block text-sm font-semibold text-gray-900"
                            >
                                Prénom
                            </label>
                            <input
                                id="first-name"
                                type="text"
                                required
                                value={firstName}
                                onChange={(e) => {
                                    setFirstName(e.target.value);
                                    validateInput(e.target);
                                }}
                                className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                            />
                        </div>

                        {/* Last Name */}
                        <div>
                            <label
                                htmlFor="last-name"
                                className="block text-sm font-semibold text-gray-900"
                            >
                                Nom
                            </label>
                            <input
                                id="last-name"
                                type="text"
                                required
                                value={lastName}
                                onChange={(e) => {
                                    setLastName(e.target.value);
                                    validateInput(e.target);
                                }}
                                className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                            />
                        </div>

                        {/* Phone */}
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="phone"
                                className="block text-sm font-semibold text-gray-900"
                            >
                                Téléphone
                            </label>
                            <input
                                id="phone"
                                type="tel"
                                pattern="\\d+"
                                required
                                value={phone}
                                onChange={(e) => {
                                    setPhone(e.target.value);
                                    validateInput(e.target);
                                }}
                                className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                            />
                        </div>

                        {/* Subject */}
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="subject"
                                className="block text-sm font-semibold text-gray-900"
                            >
                                Sujet
                            </label>
                            <input
                                id="subject"
                                type="text"
                                required
                                value={subject}
                                onChange={(e) => {
                                    setSubject(e.target.value);
                                    validateInput(e.target);
                                }}
                                className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                            />
                        </div>

                        {/* Message */}
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="message"
                                className="block text-sm font-semibold text-gray-900"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                maxLength={255}
                                required
                                value={message}
                                onChange={(e) => {
                                    setMessage(e.target.value);
                                    validateInput(e.target);
                                }}
                                className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div className="mt-10">
                        <a
                            href={buildMailto()}
                            className="block w-full rounded-md bg-main-blue px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition duration-300"
                        >
                            Envoyer
                        </a>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
}