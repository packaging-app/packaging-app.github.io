"use client"

import { CustomButton } from "@/Components/Button/CustomButton";

export interface InterventionField {
  fieldName: string;
  fieldIcon: string;
}

export default function InterventionFieldsSection({
  fields,
}: {
  fields: InterventionField[];
}) {
  const positions = [
    "row-start-1 row-end-3 col-start-4 col-end-7 sm:w-[50%]",
    "row-start-1 row-end-3 col-start-7 col-end-9 sm:w-[90%]",
    "row-start-3 row-end-5 sm:col-start-3 col-start-4 col-end-6 sm:w-[40%]",
    "row-start-3 row-end-5 col-start-8 col-end-10 sm:w-[80%]",
    "row-start-6 row-end-8 col-start-5 col-end-10 w-[50%]",
    "row-start-7 row-end-9 col-start-3 col-end-5 sm:w-[80%]",
    "row-start-6 row-end-8 col-start-8 col-end-10 sm:w-[70%]",
    "row-start-9 row-end-11 col-start-8 col-end-10 sm:w-[80%]",
    "row-start-1 row-end-3 col-start-2 col-end-4 sm:w-[70%]",
    "row-start-3 row-end-5 col-start-1 col-end-4 sm:w-[50%]",
  ];

  return (
    <section className="md:pt-20 pt-8 pb-20">
      <div className="w-full flex flex-col md:flex-row items-center justify-evenly px-6 lg:px-10 opacity-0 -translate-x-1 gap-20 md:gap-0">
        {/* Left Content */}
        <div className="space-y-6 lg:w-[46%] md:min-w-96 min-w-full">
          <h1 className="xl:text-4xl lg:text-3xl text-2xl font-bold text-gray-900 leading-snug lg:min-w-[390px] ">
            Nos Champs d’Intervention
          </h1>
          <ol className="list-decimal text-gray-600 xl:text-lg lg:text-md text-sm font-semibold">
            {fields.map((field) => (
              <li className="ml-8 md:mb-2" key={field.fieldName}>
                {field.fieldName}
              </li>
            ))}
          </ol>
          <CustomButton href={"/contact"}>Commencer Maintenant</CustomButton>
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-9 grid-rows-10 justify-center items-end max-w-[700px] max-h-[500px] gap-4">
          {fields.map((field, index) => (
            <div
              className={` bg-white aspect-square rounded-full overflow-hidden flex justify-center items-center shadow-xl ${positions[index]}`}
              key={index}
            >
              <img
                alt={field.fieldName}
                src={field.fieldIcon}
                className="h-full object-cover"
              />
            </div>
          ))}
          <div className="col-start-1 col-end-3 row-start-5 row-end-11 h-full w-[100%] rounded-md rounded-tr-[80px] rounded-bl-[80px]" style={{ backgroundColor: '#2874fc' }}></div>
          <div className="col-start-3 col-end-8 row-start-9 row-end-11 h-full w-full rounded-md rounded-tl-[80px] rounded-br-[80px]" style={{ backgroundColor: '#cbb2a4' }}></div>
        </div>
      </div>
    </section>
  );
}
