"use client";

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
    const mail = "contact@nimetex-groupe.com";
    const body = `${message}
        
        
                        Name: ${firstName} ${lastName}
                        Phone: ${phone}`;

    return `mailto:${mail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <NavBar />
      <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center opacity-0">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Contact Nimetex Groupe
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Questions about our packaging solutions? Fill out our form and our
            team will respond quickly. We&apos;re here to help!
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl sm:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="opacity-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h3>
              <form onSubmit={e => e.preventDefault()} className="space-y-6">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  {/* First Name */}
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold text-gray-900"
                    >
                      First Name
                    </label>
                    <input
                      id="first-name"
                      type="text"
                      required
                      value={firstName}
                      onChange={e => {
                        setFirstName(e.target.value);
                        validateInput(e.target);
                      }}
                      className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-semibold text-gray-900"
                    >
                      Last Name
                    </label>
                    <input
                      id="last-name"
                      type="text"
                      required
                      value={lastName}
                      onChange={e => {
                        setLastName(e.target.value);
                        validateInput(e.target);
                      }}
                      className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm"
                    />
                  </div>

                  {/* Phone */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-900"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      pattern="\\d+"
                      required
                      value={phone}
                      onChange={e => {
                        setPhone(e.target.value);
                        validateInput(e.target);
                      }}
                      className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm"
                    />
                  </div>

                  {/* Subject */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-gray-900"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      value={subject}
                      onChange={e => {
                        setSubject(e.target.value);
                        validateInput(e.target);
                      }}
                      className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm"
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
                      onChange={e => {
                        setMessage(e.target.value);
                        validateInput(e.target);
                      }}
                      className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm"
                    />
                  </div>
                </div>

                <div className="mt-10">
                  <a
                    href={buildMailto()}
                    className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition duration-300"
                    style={{ backgroundColor: "#054eb4" }}
                  >
                    Send Message
                  </a>
                </div>
              </form>
            </div>

            {/* Contact Information & Map */}
            <div className="opacity-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Visit Us
              </h3>

              {/* Contact Details */}
              <div className="mb-8 space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Address</h4>
                  <p className="text-gray-600">
                    Neopark de Monastir LOT 46P – Route de Sahline, Manzel Harb
                    5036
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">commercial@nimetex.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">+216 31 107 375</p>
                </div>
              </div>

              {/* Google Maps */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.182904685609!2d10.7553116!3d35.72172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13020d01a1ff9c45%3A0x1a3082cae4ecd688!2sNimetex%20groupe!5e0!3m2!1sfr!2stn!4v1760181190565!5m2!1sfr!2stn"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nimetex Groupe Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
