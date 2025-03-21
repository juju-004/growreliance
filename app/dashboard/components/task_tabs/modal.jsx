"use client";
import { XCircleIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import surveyData from "@/assets/data/surveyData.json";

const Form = ({ data }) => {
  return (
    <div className="collapse-content text-sm px-2 peer-checked:bg-c3/50">
      <form className="mb-3 px-2 flex flex-col gap-2">
        {data.map((input, k) =>
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
  );
};

const Modal = ({ details, currentKey, id }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    !show &&
      setTimeout(() => {
        setShow(true);
      }, 900);
  }, [currentKey]);

  const closeModal = () => setShow(false);

  return (
    <dialog id={id} className="modal modal-bottom ">
      {details && (
        <div className="modal-box relative max-w-[700px] mx-auto h-[calc(100vh-120px)] rounded-t-4xl flex flex-col">
          <div className="font-bold flex justify-between items-center text-xl pt-2 border-b-3 pb-1 border-c2">
            <h3>{details.title}</h3>
            <form onClick={closeModal} method="dialog">
              <button className="btn btn-ghost md:pl-2 md:border-1 btn-circle md:btn-square md:border-black/5">
                <XCircleIcon className="size-7 opacity-20 text-black" />{" "}
                <span className="md:block hidden">close</span>
              </button>
            </form>
          </div>
          <div className="w-full overflow-y-scroll flex-1 pb-8 pt-2">
            {surveyData.map((d, key) => (
              <div
                key={key}
                className="collapse mb-2 collapse-arrow bg-base-100 border border-base-300"
              >
                {show && (
                  <input
                    type="radio"
                    name="accordion-1"
                    className="peer"
                    defaultChecked={key ? false : true}
                  />
                )}
                <div className="collapse-title flex items-center gap-3 font-semibold peer-checked:bg-c3/50">
                  <span className="size-7 border-c2 border-2 rounded-full fx ">
                    {key + 1}
                  </span>{" "}
                  {d.title}{" "}
                </div>
                {<Form data={d.inputs} />}
              </div>
            ))}
            <button className="btn ml-4 mt-3 bg-c2 text-white">Submit</button>
          </div>
        </div>
      )}
      <form onClick={closeModal} method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Modal;
