"use client"

import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export default function ContactSection() {
  return (
    <section className="relative bg-faint w-full md:h-[700px] h-[1020px] ">
      {/* Google Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.1682904696634!2d10.2303623!3d36.83667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd353e8e5ffc51%3A0x5b4d8e729951794a!2sCrystal%20Palace!5e0!3m2!1sfr!2stn!4v1727177177777!5m2!1sfr!2stn"
        width="100%"
        height="700px"
        allowFullScreen
        loading="lazy"
        className="absolute inset-0 border-0"
      ></iframe>

      {/* Contact Card */}
      <div className="md:absolute relative md:top-30 md:left-20 top-[700px] left-0 w-[calc(100% - var(--spacing) * 16)] bg-blue-600 text-white md:rounded-3xl p-8 md:w-80 space-y-4 md:shadow-lg">
        <h3 className="text-2xl font-bold">Contacts</h3>

        <div className="flex items-start space-x-3">
          <MapPinIcon className="h-6 w-6 flex-shrink-0" />
          <p className="text-sm leading-relaxed">
            1.B.4. immeuble Cristal Palace, Rue du lac d'Annecy Les berges du
            lac 1053 Tunis
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <PhoneIcon className="h-6 w-6 flex-shrink-0" />
          <p className="text-sm">+216 58 430 043</p>
        </div>

        <div className="flex items-center space-x-3">
          <EnvelopeIcon className="h-6 w-6 flex-shrink-0" />
          <p className="text-sm">sales@flm-solutions.com</p>
        </div>

        <div className="flex items-start space-x-3">
          <ClockIcon className="h-6 w-6 flex-shrink-0" />
          <div className="text-sm leading-relaxed">
            <p>Mon–Fri 08.00–17.00</p>
            <p>Sat 09.00–12.00</p>
          </div>
        </div>
      </div>
    </section>
  );
}
