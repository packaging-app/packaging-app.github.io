import { useTranslation } from "react-i18next";

export default function WhoAreWeSection() {
  const { t } = useTranslation("common");
  return (
    <section className="py-20 opacity-0 -translate-x-1">
      <div className="w-full flex flex-col lg:gap-20 gap-6 md:flex-row items-stretch justify-evenly px-6 lg:px-10">
        {/* Left Images */}
        <div className="overflow-hidden rounded-tl-[50px] rounded-br-[50px]">
          <img
            src="/img/ap-w.png"
            alt="Whiteboard presentation"
            className="object-cover shadow-md min-w-full min-h-full"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6 font-semibold flex flex-col justify-around">
          <h1 className="xl:text-4xl lg:text-3xl text-2xl font-bold text-gray-900 leading-snug">
            {t("about.whoWeAre.title")}
          </h1>
          <p className="text-gray-600 xl:text-lg lg:text-md text-sm">
            {t("about.whoWeAre.description")}
          </p>
        </div>
      </div>
    </section>
  );
}
