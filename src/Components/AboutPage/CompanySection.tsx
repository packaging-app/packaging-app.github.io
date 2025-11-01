import { CustomButton } from "@/Components/Button/CustomButton";
import { useTranslation } from "react-i18next";

export default function CompanySection() {
  const { t } = useTranslation("common");
  const positions = [
    "row-start-3 row-end-6 col-start-5 col-end-9 w-[90%] sm:w-[60%]",
    "row-start-7 row-end-9 col-start-3 col-end-6 sm:w-[80%]",
    "row-start-6 row-end-9 col-start-7 col-end-9 w-[100%]",
    "row-start-2 row-end-5 col-start-2 col-end-4 w-[100%]",
    "row-start-1 row-end-4 col-start-8 col-end-10 w-[100%]",
  ];

  const imageList: string[] = [
    "/img/about/1.png",
    "/img/about/2.png",
    "/img/about/3.png",
    "/img/about/4.png",
    "/img/about/5.png",
  ];

  return (
    <section className="pb-20">
      <div className="w-full flex flex-col md:flex-row items-center justify-evenly px-6 lg:px-10 opacity-0 -translate-x-1 gap-20 md:gap-0">
        {/* Left Content */}
        <div className="space-y-6 lg:w-[46%] md:min-w-96 min-w-full">
          <h1 className="xl:text-4xl lg:text-3xl text-2xl font-bold text-gray-900 leading-snug lg:min-w-[390px] ">
            {t("about.clients.title")}
          </h1>
          <p className="text-gray-600 xl:text-lg lg:text-md text-sm font-semibold">
            {t("about.clients.description")}
          </p>
          <CustomButton href={"/contact"}>
            {t("about.clients.cta")}
          </CustomButton>
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-9 grid-rows-10 justify-center items-end max-w-[700px] max-h-[500px] gap-4">
          {imageList.map((image, index) => (
            <div
              className={` bg-white aspect-square rounded-full overflow-hidden flex justify-center items-center shadow-xl ${positions[index]}`}
              key={index}
            >
              <img
                alt={`image n:${index}`}
                src={image}
                className="h-full object-cover"
              />
            </div>
          ))}
          <div className="col-start-1 col-end-3 row-start-5 row-end-11 h-full ml-[20%] w-[80%] rounded-md rounded-tr-[80px] rounded-bl-[80px] bg-main-blue"></div>
          <div className="col-start-3 col-end-10 row-start-9 row-end-11 h-full w-full rounded-md rounded-tl-[80px] rounded-br-[80px] bg-secondary-green"></div>
        </div>
      </div>
    </section>
  );
}
