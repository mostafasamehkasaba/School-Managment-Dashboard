"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormSection from "./FormSection";
import FormActions from "./FormActions";
import SelectField from "./SelectField";
import { classesData, subjectsData, teachersData } from "@/lib/data";

const subjectOptions = subjectsData.map((subject) => subject.name);
const classOptions = classesData.map((item) => item.name);
const teacherOptions = teachersData.map((teacher) => teacher.name);

const schema = z.object({
  subject: z.string().min(1, { message: "Subject is required!" }),
  class: z.string().min(1, { message: "Class is required!" }),
  teacher: z.string().min(1, { message: "Teacher is required!" }),
});

type Inputs = z.infer<typeof schema>;

const LessonForm = ({
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
        title="Lesson Details"
        description="Link a subject to a class and a teacher."
      >
        <SelectField
          label="Subject"
          name="subject"
          options={subjectOptions}
          placeholder="Select a subject"
          required
          defaultValue={data?.subject}
          register={register}
          error={errors.subject}
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
        <SelectField
          label="Teacher"
          name="teacher"
          options={teacherOptions}
          placeholder="Select a teacher"
          required
          defaultValue={data?.teacher}
          register={register}
          error={errors.teacher}
        />
      </FormSection>

      <FormActions
        type={type}
        entity="lesson"
        isSubmitting={isSubmitting}
        onClose={onClose}
      />
    </form>
  );
};

export default LessonForm;
