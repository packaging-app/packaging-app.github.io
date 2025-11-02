"use client";

export interface DefinitionSectionProps {
  title: string;
  description: string[];
  rightImage: string;
  leftImage: string;
}

export default function DefinitionSection({
  props,
}: {
  props: DefinitionSectionProps;
}) {
  return (
    <section className="bg-faint py-20 opacity-0 -translate-x-1">
      <div className="w-full flex flex-col gap-10 md:flex-row items-center justify-evenly px-6 lg:px-10">
        {/* Left Images */}
        <div className="grid grid-cols-7 grid-rows-10 items-end max-w-[800px] max-h-[600px] gap-4">
          <div className="col-start-1 col-end-5 row-start-1 row-end-11 h-full w-full overflow-hidden rounded-md rounded-tr-[50px] rounded-bl-[50px]">
            <img
              src={props.leftImage}
              alt=""
              className="object-cover min-w-full min-h-full shadow-md"
            />
          </div>
          <div className="col-start-5 col-end-8 row-start-4 row-end-11 h-full w-full overflow-hidden rounded-md rounded-tl-[80px] rounded-br-[80px]">
            <img
              src={props.rightImage}
              alt=""
              className="object-cover min-w-full min-h-full shadow-md"
            />
          </div>
          <div className="col-start-5 col-end-6 row-start-2 row-end-4 aspect-square h-[120%] rounded-full bg-primary"></div>
        </div>

        {/* Right Content */}
        <div className="space-y-6 lg:w-[46%] md:min-w-96 min-w-full font-semibold">
          <h1 className="xl:text-4xl lg:text-3xl text-2xl font-bold text-gray-900 leading-snug">
            {props.title}
          </h1>
          <ul className="list-disc pl-5 text-gray-600 xl:text-lg lg:text-md text-sm ">
            {props.description.map((item, i) => (
              <li className="mb-5" key={i}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
