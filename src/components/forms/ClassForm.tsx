"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputFiled";
import FormSection from "./FormSection";
import FormActions from "./FormActions";

const schema = z.object({
  name: z.string().min(1, { message: "Class name is required!" }),
  capacity: z
    .string()
    .min(1, { message: "Capacity is required!" })
    .regex(/^\d+$/, { message: "Capacity must be a number!" }),
  grade: z
    .string()
    .min(1, { message: "Grade is required!" })
    .regex(/^\d+$/, { message: "Grade must be a number!" }),
  supervisor: z.string().min(1, { message: "Supervisor is required!" }),
});

type Inputs = z.infer<typeof schema>;

const ClassForm = ({
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
    console.log({
      ...values,
      capacity: Number(values.capacity),
      grade: Number(values.grade),
    });
  });

  return (
    <form className="flex flex-col gap-7" onSubmit={onSubmit} noValidate>
      <FormSection
        title="Class Details"
        description="Basic information about the class group."
      >
        <InputField
          label="Class Name"
          name="name"
          placeholder="e.g. 1A"
          required
          defaultValue={data?.name}
          register={register}
          error={errors.name}
        />
        <InputField
          label="Capacity"
          name="capacity"
          type="number"
          placeholder="e.g. 20"
          required
          defaultValue={data?.capacity?.toString()}
          register={register}
          error={errors.capacity}
        />
        <InputField
          label="Grade"
          name="grade"
          type="number"
          placeholder="e.g. 1"
          required
          defaultValue={data?.grade?.toString()}
          register={register}
          error={errors.grade}
        />
        <InputField
          label="Supervisor"
          name="supervisor"
          placeholder="e.g. Joseph Padilla"
          required
          defaultValue={data?.supervisor}
          register={register}
          error={errors.supervisor}
        />
      </FormSection>

      <FormActions
        type={type}
        entity="class"
        isSubmitting={isSubmitting}
        onClose={onClose}
      />
    </form>
  );
};

export default ClassForm;
