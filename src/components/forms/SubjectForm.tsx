"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputFiled";
import FormSection from "./FormSection";
import FormActions from "./FormActions";

const schema = z.object({
  name: z.string().min(1, { message: "Subject name is required!" }),
  teachers: z.string().min(1, { message: "At least one teacher is required!" }),
});

type Inputs = z.infer<typeof schema>;

const SubjectForm = ({
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
      teachers: values.teachers.split(",").map((teacher) => teacher.trim()),
    });
  });

  return (
    <form className="flex flex-col gap-7" onSubmit={onSubmit} noValidate>
      <FormSection
        title="Subject Details"
        description="The subject name and the teachers who teach it."
      >
        <InputField
          label="Subject Name"
          name="name"
          placeholder="e.g. Math"
          required
          defaultValue={data?.name}
          register={register}
          error={errors.name}
        />
        <InputField
          label="Teachers"
          name="teachers"
          placeholder="Separate names with commas"
          required
          defaultValue={data?.teachers?.join(", ")}
          register={register}
          error={errors.teachers}
        />
      </FormSection>

      <FormActions
        type={type}
        entity="subject"
        isSubmitting={isSubmitting}
        onClose={onClose}
      />
    </form>
  );
};

export default SubjectForm;
