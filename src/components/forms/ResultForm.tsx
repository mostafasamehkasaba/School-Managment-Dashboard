"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputFiled";
import FormSection from "./FormSection";
import FormActions from "./FormActions";
import SelectField from "./SelectField";
import { classesData, studentsData, subjectsData, teachersData } from "@/lib/data";

const subjectOptions = subjectsData.map((subject) => subject.name);
const classOptions = classesData.map((item) => item.name);
const teacherOptions = teachersData.map((teacher) => teacher.name);
const studentOptions = studentsData.map((student) => student.name);

const schema = z.object({
  subject: z.string().min(1, { message: "Subject is required!" }),
  class: z.string().min(1, { message: "Class is required!" }),
  teacher: z.string().min(1, { message: "Teacher is required!" }),
  student: z.string().min(1, { message: "Student is required!" }),
  type: z.enum(["exam", "assignment"], { message: "Type is required!" }),
  date: z.string().min(1, { message: "Date is required!" }),
  score: z
    .string()
    .min(1, { message: "Score is required!" })
    .regex(/^\d+$/, { message: "Score must be a number!" }),
});

type Inputs = z.infer<typeof schema>;

const ResultForm = ({
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
    console.log({ ...values, score: Number(values.score) });
  });

  return (
    <form className="flex flex-col gap-7" onSubmit={onSubmit} noValidate>
      <FormSection
        title="Result Details"
        description="Record a student's score for an exam or assignment."
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
          label="Student"
          name="student"
          options={studentOptions}
          placeholder="Select a student"
          required
          defaultValue={data?.student}
          register={register}
          error={errors.student}
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
        <SelectField
          label="Type"
          name="type"
          options={["exam", "assignment"]}
          placeholder="Select a type"
          required
          defaultValue={data?.type}
          register={register}
          error={errors.type}
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
        <InputField
          label="Score"
          name="score"
          type="number"
          placeholder="e.g. 90"
          required
          defaultValue={data?.score?.toString()}
          register={register}
          error={errors.score}
        />
      </FormSection>

      <FormActions
        type={type}
        entity="result"
        isSubmitting={isSubmitting}
        onClose={onClose}
      />
    </form>
  );
};

export default ResultForm;
