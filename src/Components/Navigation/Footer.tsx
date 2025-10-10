"use client"

import { CustomButton } from "@/Components/Button/CustomButton";

const services = [
  { name: "Image de Marque", href: "/branding" },
  { name: "Gestion des relations clients", href: "/crm" },
  { name: "Digitalisation", href: "/digitalization" },
  { name: "Retail", href: "/retail" },
];

export default function Footer() {
  return (
    <footer className="bg-faint py-12">
      <div className="mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo + Description */}
        <div className="md:col-span-2 space-y-4">
          <a href="/" className="block h-8 w-fit">
            <img
              src="/img/logos/logo-with-title.png"
              alt="FLM Solutions Logo"
              className="h-8 w-auto"
            />
          </a>

          <p className="text-sm max-w-xs mt-2">
            FLM Solutions vous aide à moderniser, structurer et développer vos
            process commerciaux en mettant en avant vos services et votre image
            de marque.
          </p>
          <CustomButton>Contactez Nous</CustomButton>
        </div>

        {/* Product */}
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            {services.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="hover:text-main-blue">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-main-blue">
                Accueil
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-main-blue">
                A Propos
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-main-blue">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 border-t border-blue-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm px-6 lg:px-16">
        <p>
          © {new Date().getFullYear()} FLM Solutions. Tous droits réservés.
        </p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            target="_blank"
            href="https://www.linkedin.com/company/flm-solutions/"
            className="hover:text-main-blue"
          >
            LinkedIn
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/flm_solutions/"
            className="hover:text-main-blue"
          >
            Instagram
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100086239284436&fbclid=PAZXh0bgNhZW0CMTEAAacEFAzi99P0r_vGtaW8ZS4-TSlEoAcLtU1WKqBG-pWP6enS9Ag4Cip0gEaoxQ_aem_dv93w4FN06aqoxmgGddAnQ"
            className="hover:text-main-blue"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
