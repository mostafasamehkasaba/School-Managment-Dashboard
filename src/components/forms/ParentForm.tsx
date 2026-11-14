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
  img: z.any().optional(),
});

type Inputs = z.infer<typeof schema>;

const ParentForm = ({
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

  const [defaultFirstName, ...defaultLastName] = (data?.name ?? "").split(" ");

  const onSubmit = handleSubmit((values) => {
    console.log(values);
  });

  return (
    <form className="flex flex-col gap-7" onSubmit={onSubmit} noValidate>
      <FormSection
        title="Authentication"
        description="Sign-in credentials for the parent's account."
      >
        <InputField
          label="Username"
          name="username"
          placeholder="e.g. mostafa.ali"
          required
          defaultValue={data?.username}
          register={register}
          error={errors.username}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          placeholder="name@example.com"
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
        description="Contact details used to reach the parent."
      >
        <InputField
          label="First Name"
          name="firstName"
          placeholder="Mostafa"
          required
          defaultValue={data?.firstName ?? defaultFirstName}
          register={register}
          error={errors.firstName}
        />
        <InputField
          label="Last Name"
          name="lastName"
          placeholder="Ali"
          required
          defaultValue={data?.lastName ?? defaultLastName.join(" ")}
          register={register}
          error={errors.lastName}
        />
        <InputField
          label="Phone"
          name="phone"
          placeholder="+20 100 000 0000"
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
        <PhotoField field={register("img")} defaultImage={data?.img} />
      </FormSection>

      <FormActions
        type={type}
        entity="parent"
        isSubmitting={isSubmitting}
        onClose={onClose}
      />
    </form>
  );
};

export default ParentForm;
