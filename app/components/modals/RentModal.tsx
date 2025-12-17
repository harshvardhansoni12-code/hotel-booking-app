"use client";
import { useState, useMemo, use } from "react";
import useRentModal from "@/app/hooks/useRentModal";
import Modal from "./Modal";
import Heading from "../Heading";
import { categories } from "../navbar/Categories";
import CategoriesInput from "../Inputs/CategoryInput";
import { FieldValues, useForm } from "react-hook-form";
enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

const RentModal = () => {
  const rentModal = useRentModal();
  const [step, setStep] = useState(STEPS.CATEGORY);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      category: "",
      location: null,
      guestCount: 1,
      roomCount: 1,
      bnathroomCount: 1,
      imageSrc: "",
      price: 1,
      title: "",
      description: "",
    },
  });

  const category = watch("category");
  const setCustomValues = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };
  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return "Create";
    }
    return "Next";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined;
    }

    return "Back";
  }, [step]);

  let body = (
    <div className="flex flex-col gap-8">
      <Heading
        title={"Which of these best describe your place"}
        subtitle="Pick a Category"
      />
      <div
        className="grid 
      grid-cols-1 
      md:grid-cols-2 
      gap-3 
      max-h-[50vh] 
      overflow-y-auto"
      >
        {categories.map((items) => (
          <div key={items.label} className="col-span-1">
            <CategoriesInput
              onClick={(category) => {
                setCustomValues("category", category);
              }}
              selected={false}
              label={items.label}
              icon={items.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Modal
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={rentModal.onClose}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      title="Airbnb your home"
      body={body}
    />
  );
};

export default RentModal;
////////3:38:00
