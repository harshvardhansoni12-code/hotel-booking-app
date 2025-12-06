"use client";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
//
import useRegisterModal from "../../hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../Inputs/Input";
import Button from "../Button";
const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      setIsLoading(true);
      await axios.post("/api/register", data);
      registerModal.onClose();
      toast.success("signed up");
    } catch (error) {
      toast.error("something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  // this is the body content of modal
  //here we will make input fields for email name password
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title={"Welcome to airbnb"} subtitle="create an account!" />
      <Input
        id="email"
        label="Email"
        register={register} // MUST be this
        errors={errors}
      />
      <Input
        id="name"
        label="Name"
        register={register} // MUST be this
        errors={errors}
      />
      <Input
        id="password"
        label="password"
        register={register} // MUST be this
        errors={errors}
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 m-3 ">
      <hr />
      <Button
        outline
        label="continue with Google"
        icon={FcGoogle}
        onClick={() => {}}
      />
      <Button
        outline
        label="continue with Github"
        icon={AiFillGithub}
        onClick={() => {}}
      />
      <div
        className="
      text-neutral-500
      text-center
      mt-4 
      font-light
      "
      >
        <div
          className="
        flex flex-row items-center gap-2
        "
        >
          <div>Already have an account?</div>
          <div
            className="
          text-neutral-800
          cursor-pointer
          hover:underline

          "
            onClick={registerModal.onClose}
          >
            Log in!
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Modal
      title="Registers"
      actionLabel="Continue"
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  ); //action label required
};

//1:06:42
export default RegisterModal;
//1:35:38
