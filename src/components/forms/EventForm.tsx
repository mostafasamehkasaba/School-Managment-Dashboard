"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputFiled";
import FormSection from "./FormSection";
import FormActions from "./FormActions";
import SelectField from "./SelectField";
import { classesData } from "@/lib/data";

const classOptions = classesData.map((item) => item.name);

const schema = z.object({
  title: z.string().min(1, { message: "Title is required!" }),
  class: z.string().min(1, { message: "Class is required!" }),
  date: z.string().min(1, { message: "Date is required!" }),
  startTime: z.string().min(1, { message: "Start time is required!" }),
  endTime: z.string().min(1, { message: "End time is required!" }),
});

type Inputs = z.infer<typeof schema>;

const EventForm = ({
  type,
  data,
  onClose,
}: {
  type: "create" | "update";
  data?: any;
  onClose?: () => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((values) => {
    console.log(values);
  });

  return (
    <form className="flex flex-col gap-7" onSubmit={onSubmit} noValidate>
      <FormSection
        title="Event Details"
        description="Plan a school event for a class."
      >
        <InputField
          label="Title"
          name="title"
          placeholder="e.g. Lake Trip"
          required
          defaultValue={data?.title}
          register={register}
          error={errors.title}
        />
        <SelectField
          label="Class"
          name="class"
          options={classOptions}
          placeholder="Select a class"
          required
          defaultValue={data?.class}
          register={register}
          error={errors.class}
        />
        <InputField
          label="Date"
          name="date"
          type="date"
          required
          defaultValue={data?.date}
          register={register}
          error={errors.date}
        />
        <div className="grid grid-cols-2 gap-4">
          <InputField
            label="Start Time"
            name="startTime"
            type="time"
            required
            defaultValue={data?.startTime}
            register={register}
            error={errors.startTime}
          />
          <InputField
            label="End Time"
            name="endTime"
            type="time"
            required
            defaultValue={data?.endTime}
            register={register}
            error={errors.endTime}
          />
        </div>
      </FormSection>

      <FormActions
        type={type}
        entity="event"
        isSubmitting={isSubmitting}
        onClose={onClose}
      />
    </form>
  );
};

export default EventForm;
