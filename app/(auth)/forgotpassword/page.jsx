"use client";

import FormButton from "@/components/button/form-button";
import AuthHeader from "@/components/header/auth-header";
import FormInput from "@/components/input/form-input";
import FormLoader from "@/components/loaders/form-loader";
import { EnvelopeOpenIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useState } from "react";

function ForgotPassword() {
  const [loading, setLoading] = useState(false);

  const submitAction = async (formData) => {
    const email = formData.get("email");
    setLoading(true);

    console.log(email);

    setTimeout(() => {
      setLoading(false);
      document.getElementById("my_modal_2").showModal();
    }, 3000);
  };

  return (
    <>
      {loading && <FormLoader />}
      <AuthHeader
        text={"Forgot Password"}
        subText={"Enter your email account to reset password"}
      />
      <form action={submitAction} className="w-full px-5 py-6">
        <FormInput name={"email"} placeholder={"Email Address"} />
        <FormButton text={"Continue"} />
      </form>

      <dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box text-center rounded-t-4xl flex flex-col justify-center items-center  overflow-visible relative">
          <span className="size-20 text-white fx p-6  rounded-3xl bg-c1 absolute -top-[40px]">
            <EnvelopeOpenIcon />
          </span>
          <h3 className="font-bold text-3xl pt-9">Check your email</h3>
          <p className="py-4">
            We have sent an instruction to your mailbox to rcover the password
            to your account
          </p>
          <form method="dialog" className="w-full">
            <Link href={"/login"}>
              <FormButton text={"Done"} className={"mt-5 "} />
            </Link>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default ForgotPassword;
