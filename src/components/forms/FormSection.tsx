import { ReactNode } from "react";

type FormSectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

const FormSection = ({ title, description, children }: FormSectionProps) => (
  <section className="flex flex-col gap-4">
    <div className="flex items-center gap-3">
      <span className="h-5 w-1 rounded-full bg-sky-400" />
      <div className="flex flex-col">
        <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
        {description && (
          <p className="text-xs text-gray-400">{description}</p>
        )}
      </div>
    </div>
    <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-2">
      {children}
    </div>
  </section>
);

export default FormSection;
