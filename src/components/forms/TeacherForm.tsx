"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputFiled";
import FormSection from "./FormSection";
import PhotoField from "./PhotoField";
import FormActions from "./FormActions";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),
  email: z.string().email({ message: "Invalid email address!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" }),
  firstName: z.string().min(1, { message: "First name is required!" }),
  lastName: z.string().min(1, { message: "Last name is required!" }),
  phone: z.string().min(1, { message: "Phone is required!" }),
  address: z.string().min(1, { message: "Address is required!" }),
  bloodType: z.string().min(1, { message: "Blood Type is required!" }),
  birthday: z.string().min(1, { message: "Birthday is required!" }),
  sex: z.enum(["male", "female"], { message: "Sex is required!" }),
  img: z.any().optional(),
});

type Inputs = z.infer<typeof schema>;

const selectClass =
  "w-full appearance-none rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-gray-800 shadow-sm outline-none transition hover:border-gray-300 focus:border-sky-400 focus:ring-4 focus:ring-sky-100";

const TeacherForm = ({
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
        title="Authentication"
        description="Sign-in credentials for the teacher's account."
      >
        <InputField
          label="Username"
          name="username"
          placeholder="e.g. john.doe"
          required
          defaultValue={data?.username}
          register={register}
          error={errors.username}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          placeholder="name@school.com"
          required
          defaultValue={data?.email}
          register={register}
          error={errors.email}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          placeholder="At least 8 characters"
          required
          defaultValue={data?.password}
          register={register}
          error={errors.password}
        />
      </FormSection>

      <FormSection
        title="Personal Information"
        description="Basic details used across the dashboard."
      >
        <InputField
          label="First Name"
          name="firstName"
          placeholder="John"
          required
          defaultValue={data?.firstName}
          register={register}
          error={errors.firstName}
        />
        <InputField
          label="Last Name"
          name="lastName"
          placeholder="Doe"
          required
          defaultValue={data?.lastName}
          register={register}
          error={errors.lastName}
        />
        <InputField
          label="Phone"
          name="phone"
          placeholder="+1 555 000 0000"
          required
          defaultValue={data?.phone}
          register={register}
          error={errors.phone}
        />
        <InputField
          label="Address"
          name="address"
          placeholder="Street, city, country"
          required
          defaultValue={data?.address}
          register={register}
          error={errors.address}
        />
        <InputField
          label="Blood Type"
          name="bloodType"
          placeholder="e.g. A+"
          required
          defaultValue={data?.bloodType}
          register={register}
          error={errors.bloodType}
        />
        <InputField
          label="Birthday"
          name="birthday"
          type="date"
          required
          defaultValue={data?.birthday}
          register={register}
          error={errors.birthday}
        />
        <div className="flex flex-col gap-1.5">
          <label htmlFor="sex" className="text-sm font-medium text-gray-700">
            Sex<span className="ml-0.5 text-red-500">*</span>
          </label>
          <select
            id="sex"
            className={selectClass}
            {...register("sex")}
            defaultValue={data?.sex ?? ""}
          >
            <option value="" disabled>
              Select sex
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.sex?.message && (
            <p className="text-xs font-medium text-red-500">
              {errors.sex.message.toString()}
            </p>
          )}
        </div>
        <PhotoField field={register("img")} defaultImage={data?.img} />
      </FormSection>

      <FormActions
        type={type}
        entity="teacher"
        isSubmitting={isSubmitting}
        onClose={onClose}
      />
    </form>
  );
};

export default TeacherForm;
