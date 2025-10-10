import { CustomButton } from "@/Components/Button/CustomButton";

export default function AboutHeroSection() {
  return (
    <section className="bg-main-blue md:pt-20 pt-8 pb-20">
      <div className="w-full flex flex-col gap-10 md:flex-row items-center justify-evenly px-6 lg:px-10 opacity-0 -translate-x-1">
        {/* Left Content */}
        <div className="space-y-6 lg:w-[46%] md:min-w-96 min-w-full">
          <h1 className="xl:text-5xl lg:text-4xl text-3xl font-bold text-white leading-snug">
            A propos de
            <span className="text-secondary-green"> FLM Solutions </span>
          </h1>
          <p className="text-faint xl:text-lg lg:text-md text-sm font-semibold">
            Nous accompagnons depuis près de 10 ans des Start-ups, des TPE, des
            PME, des Multinationales, ainsi que des ONG dans leurs volontés de
            mettre en valeur leurs produits ou services, faire évoluer leurs
            images de marque, générer du revenu supplémentaire.
          </p>
          <CustomButton isWhite={true} href={"/contact"}>Commencer Maintenant</CustomButton>
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-6 grid-rows-4 items-end max-w-[700px] max-h-[400px] gap-4">
          <div className="col-start-2 col-end-7 row-start-1 row-end-5 h-full w-full overflow-hidden rounded-md rounded-tr-[120px] rounded-bl-[120px] flex justify-center">
            <img
              src="/img/ap-h.png"
              alt="Professionals handshake"
              className="object-cover min-w-full min-h-full shadow-md"
            />
          </div>
          <div className="col-start-1 col-end-2 row-start-2 row-end-5 h-full w-full rounded-md rounded-tl-[120px] rounded-br-[120px] bg-faint"></div>
        </div>
      </div>
    </section>
  );
}
