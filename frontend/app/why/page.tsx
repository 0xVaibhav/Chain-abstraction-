import React from "react";

const page = () => {
  return (
    <div className="container mx-auto my-auto flex flex-col gap-8">
      <h1 className="text-accent text-center text-6xl">
        Why to use Green Threads
      </h1>
      <p className="text-white/75 text-2xl text-center mx-auto w-[70%]">
        Recycling dead stock is a crucial step towards a more sustainable
        fashion industry. By diverting unsold inventory from landfills, we can
        significantly reduce greenhouse gas emissions and conserve valuable
        resources. This practice also helps to mitigate water pollution, protect
        biodiversity, and minimize microplastic pollution.
      </p>
      <div className="text-xl text-center flex flex-col gap-4">
        <p className="text-accent">
          Reduced Landfill Waste:
          <span className="text-white/80"> Prevents methane emissions</span>
        </p>
        <p className="text-accent">
          Conserved Resources:
          <span className="text-white/80">
            {" "}
            Saves energy, water, and raw materials
          </span>
        </p>
        <p className="text-accent">
          Lowered Carbon Footprint:
          <span className="text-white/80">
            {" "}
            Reduces the industry's overall carbon emissions
          </span>
        </p>
        <p className="text-accent">
          Reduced Water Pollution:
          <span className="text-white/80">
            Minimizes harmful chemical discharge
          </span>
        </p>
        <p className="text-accent">
          Preserved Biodiversity:
          <span className="text-white/80"> Protects forests and habitats</span>
        </p>
        <p className="text-accent">
          Reduced Microplastic Pollution:
          <span className="text-white/80">
            Limits the production of synthetic fabrics
          </span>
        </p>
      </div>
    </div>
  );
};

export default page;
