import { CustomButton } from "@/Components/Button/CustomButton";

export default function CompanySection() {
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
            Qui Accompagnons Nous ?
          </h1>
          <p className="text-gray-600 xl:text-lg lg:text-md text-sm font-semibold">
            Nous accompagnons depuis prés de 10 ans des Start-ups, des TPE, des
            PME, des Multinationales, ainsi que des ONG. dans leurs volontés de
            mettre en valeur leurs produits ou services, faire évoluer leurs
            images de marque, générer du revenu supplémentaire.
            <br />
            <br />
            Grâce à nos experts en retail, en digital, en relation client et en
            communication, nous agissons à chaque étape du cycle de vie d'un
            produit ou service pour créer de la valeur en proposant des leviers
            et des solutions innovantes.
          </p>
          <CustomButton href={"/contact"}>Commencer Maintenant</CustomButton>
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
