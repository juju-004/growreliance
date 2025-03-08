"use client";
import React, { useEffect, useState } from "react";

const AssignModal = ({ details, currentKey }) => {
  const [show, setShow] = useState(false);
  const dummyData = [
    {
      title: "Farmer Information",
      inputs: [
        { label: "Name", name: "name" },
        { label: "Location", name: "location" },
        { label: "Farm Size (in acres or hectres)", name: "size" },
        { label: "Phone", name: "phone" },
      ],
    },
    {
      title: "Crop Information",
      inputs: [
        { label: "Variety", name: "variety" },
        { label: "Planting Data", name: "planting" },
        { label: "Expected Harvest Data", name: "harvestdata" },
        { label: "Current Growth stage", name: "growth" },
        {
          label: "Estimated Yield (tons or kilograms per hectre / acre)",
          name: "yield",
        },
      ],
    },
    {
      title: "Farming practices",
      inputs: [
        { label: "Irrigation method", name: "irrigation" },
        { label: "Fertilizer used", name: "fertilizer" },
        { label: "Pesticides used", name: "pesticides" },
        {
          label: "Methods",
          name: "methods",
          options: ["Organic", "Inorganic"],
        },
      ],
    },
    {
      title: "Challenges and issues",
      inputs: [
        { label: "Pests / Diseases", name: "pests_diseases" },
        {
          label: "Weather impact (e.g drought, floods)",
          name: "weather_impact",
        },
        {
          label: "Labor avialability",
          name: "labor_availability",
          options: ["1 - 10", "11 - 25", "25 & above"],
        },
      ],
    },
    {
      title: "Production Costs",
      inputs: [
        { label: "Input Costs", name: "input" },
        { label: "Labor Costs", name: "labor" },
        { label: "Transport Costs", name: "transport" },
      ],
    },
    {
      title: "Yield and production data",
      inputs: [
        { label: "Harvest Quantity", name: "harvest_quantity" },
        { label: "Post harvest losses", name: "post_harvest_losses" },
        { label: "Storage Facilities", name: "storage_facilities" },
      ],
    },
    {
      title: "Market Information",
      inputs: [
        {
          label: "Current Selling Price",
          name: "current_selling_price",
        },
        {
          label: "Market Demand",
          name: "market_demand",
          options: ["low", "medium", "high"],
        },
        {
          label: "Primary Buyers (e.g local market, wholesalers, processors)",
          name: "primary_buyers",
        },
      ],
    },
    {
      title: "Consumer Information",
      inputs: [
        {
          label: "Current Selling Price",
          name: "consumer_current_selling_price",
        },
        ,
        {
          label: "Market Demand",
          name: "consumer_market_demand",
          options: ["low", "medium", "high"],
        },
        {
          label: "Primary Buyers (e.g local market, wholesalers, processors)",
          name: "consumer_primary_buyers",
        },
      ],
    },
  ];

  useEffect(() => {
    !show &&
      setTimeout(() => {
        setShow(true);
      }, 900);
  }, [currentKey]);

  const closeModal = () => setShow(false);

  return (
    <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
      {details && (
        <div className="modal-box relative h-[calc(100vh-120px)] rounded-t-4xl flex flex-col">
          <h3 className="font-bold text-xl pt-2 border-b-3 pb-1 border-c2">
            {details.title}
          </h3>
          <div className="w-full overflow-y-scroll flex-1 pb-8 pt-2">
            {dummyData.map((d, key) => (
              <div
                key={key}
                className="collapse mb-2 collapse-arrow bg-base-100 border border-base-300"
              >
                {show && (
                  <input
                    type="radio"
                    name="accordion-2"
                    className="peer"
                    defaultChecked={key ? false : true}
                  />
                )}
                <div className="collapse-title flex items-center gap-3 font-semibold peer-checked:bg-c3/50">
                  <span className="size-7 border-c2 border-2 rounded-full fx ">
                    {key + 1}
                  </span>{" "}
                  {d.title}
                </div>
                <div className="collapse-content text-sm px-2 peer-checked:bg-c3/50">
                  <form className="mb-3 px-2 flex flex-col gap-2">
                    {d.inputs.map((input, k) =>
                      input.options ? (
                        <React.Fragment key={k}>
                          <label htmlFor={input.name}>{input.label}</label>
                          <div className="w-full flex justify-between">
                            {input.options.map((opt, ke) => (
                              <div key={ke} className="flex gap-3">
                                <input
                                  type="radio"
                                  name={input.name}
                                  className="radio checked:text-c2"
                                />

                                <label htmlFor={input.name}>{opt}</label>
                              </div>
                            ))}
                          </div>
                        </React.Fragment>
                      ) : (
                        <React.Fragment key={k}>
                          <label htmlFor={input.name}>{input.label}</label>
                          <input
                            type="text"
                            name={input.name}
                            placeholder=""
                            className="input bg-transparent w-full focus:border-c2 focus:ring-0 focus:outline-0 "
                          />
                        </React.Fragment>
                      )
                    )}
                  </form>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-5 absolute bottom-0 inset-x-0 px-10 py-3 from-transparent to-white bg-gradient-to-b">
            <button disabled className="btn flex-1 btn-success text-white">
              Submit
            </button>
            <form onClick={closeModal} method="dialog">
              <button className="btn btn-error text-white flex-1">Leave</button>
            </form>
          </div>
        </div>
      )}
      <form onClick={closeModal} method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default AssignModal;
