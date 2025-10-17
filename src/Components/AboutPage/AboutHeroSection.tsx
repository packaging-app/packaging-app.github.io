import { CustomButton } from "@/Components/Button/CustomButton";
import { useTranslation } from "react-i18next";

export default function AboutHeroSection() {
  const { t } = useTranslation("common");
  return (
    <section className="bg-main-blue md:pt-20 pt-8 pb-20">
      <div className="w-full flex flex-col gap-10 md:flex-row items-center justify-evenly px-6 lg:px-10 opacity-0 -translate-x-1">
        {/* Left Content */}
        <div className="space-y-6 lg:w-[46%] md:min-w-96 min-w-full">
          <h1 className="xl:text-5xl lg:text-4xl text-3xl font-bold text-white leading-snug">
            {t("about.hero.title")}
            <span className="text-secondary-green"> Nimetex Groupe </span>
          </h1>
          <p className="text-faint xl:text-lg lg:text-md text-sm font-semibold">
            {t("about.hero.description")}
          </p>
          <CustomButton isWhite={true} href={"/contact"}>{t("about.hero.cta")}</CustomButton>
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-6 grid-rows-4 items-end max-w-[700px] max-h-[400px] gap-4">
          <div className="col-start-2 col-end-7 row-start-1 row-end-5 h-full w-full overflow-hidden rounded-md rounded-tr-[120px] rounded-bl-[120px] flex justify-center">
            <img
              src="/img/nimtex-groupe.jpg"
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
