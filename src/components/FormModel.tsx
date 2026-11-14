"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, type ReactElement } from "react";

// USE LAZY LOADING

const FormLoading = () => (
  <div className="flex flex-col gap-5">
    {[0, 1, 2].map((row) => (
      <div key={row} className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="h-16 animate-pulse rounded-lg bg-gray-100" />
        <div className="h-16 animate-pulse rounded-lg bg-gray-100" />
      </div>
    ))}
  </div>
);

const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
  loading: () => <FormLoading />,
});
const StudentForm = dynamic(() => import("./forms/StudentForm"), {
  loading: () => <FormLoading />,
});
const ParentForm = dynamic(() => import("./forms/ParentForm"), {
  loading: () => <FormLoading />,
});
const SubjectForm = dynamic(() => import("./forms/SubjectForm"), {
  loading: () => <FormLoading />,
});
const ClassForm = dynamic(() => import("./forms/ClassForm"), {
  loading: () => <FormLoading />,
});
const LessonForm = dynamic(() => import("./forms/LessonForm"), {
  loading: () => <FormLoading />,
});
const ExamForm = dynamic(() => import("./forms/ExamForm"), {
  loading: () => <FormLoading />,
});
const AssignmentForm = dynamic(() => import("./forms/AssignmentForm"), {
  loading: () => <FormLoading />,
});
const ResultForm = dynamic(() => import("./forms/ResultForm"), {
  loading: () => <FormLoading />,
});
const EventForm = dynamic(() => import("./forms/EventForm"), {
  loading: () => <FormLoading />,
});

type Table =
  | "teacher"
  | "student"
  | "parent"
  | "subject"
  | "class"
  | "lesson"
  | "exam"
  | "assignment"
  | "result"
  | "attendance"
  | "event"
  | "announcement";

const forms: {
  [key: string]: (
    type: "create" | "update",
    data?: any,
    onClose?: () => void
  ) => ReactElement;
} = {
  teacher: (type, data, onClose) => (
    <TeacherForm type={type} data={data} onClose={onClose} />
  ),
  student: (type, data, onClose) => (
    <StudentForm type={type} data={data} onClose={onClose} />
  ),
  parent: (type, data, onClose) => (
    <ParentForm type={type} data={data} onClose={onClose} />
  ),
  subject: (type, data, onClose) => (
    <SubjectForm type={type} data={data} onClose={onClose} />
  ),
  class: (type, data, onClose) => (
    <ClassForm type={type} data={data} onClose={onClose} />
  ),
  lesson: (type, data, onClose) => (
    <LessonForm type={type} data={data} onClose={onClose} />
  ),
  exam: (type, data, onClose) => (
    <ExamForm type={type} data={data} onClose={onClose} />
  ),
  assignment: (type, data, onClose) => (
    <AssignmentForm type={type} data={data} onClose={onClose} />
  ),
  result: (type, data, onClose) => (
    <ResultForm type={type} data={data} onClose={onClose} />
  ),
  event: (type, data, onClose) => (
    <EventForm type={type} data={data} onClose={onClose} />
  ),
};

const labels: Record<Table, string> = {
  teacher: "teacher",
  student: "student",
  parent: "parent",
  subject: "subject",
  class: "class",
  lesson: "lesson",
  exam: "exam",
  assignment: "assignment",
  result: "result",
  attendance: "attendance",
  event: "event",
  announcement: "announcement",
};

/* ---------------------------------- Icons --------------------------------- */

const iconProps = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const PlusIcon = ({ size = 16 }: { size?: number }) => (
  <svg {...iconProps} width={size} height={size}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

const PencilIcon = ({ size = 16 }: { size?: number }) => (
  <svg {...iconProps} width={size} height={size}>
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
  </svg>
);

const TrashIcon = ({ size = 16 }: { size?: number }) => (
  <svg {...iconProps} width={size} height={size}>
    <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" />
    <path d="M10 11v6M14 11v6" />
  </svg>
);

const CloseIcon = () => (
  <svg {...iconProps} width={18} height={18}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

const AlertIcon = ({ size = 22 }: { size?: number }) => (
  <svg {...iconProps} width={size} height={size}>
    <path d="M12 9v4M12 17h.01" />
    <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
  </svg>
);

/* --------------------------------- Modal ---------------------------------- */

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table: Table;
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const [open, setOpen] = useState(false);

  const label = labels[table];
  const isDelete = type === "delete";

  const triggerStyle =
    type === "create"
      ? "h-8 w-8 bg-lamaYellow hover:shadow-[0_0_0_3px_rgba(250,226,124,0.45)]"
      : type === "update"
      ? "h-7 w-7 bg-lamaSky hover:shadow-[0_0_0_3px_rgba(195,235,250,0.6)]"
      : "h-7 w-7 bg-lamaPurple hover:shadow-[0_0_0_3px_rgba(207,206,255,0.6)]";

  const heading = isDelete
    ? `Delete ${label}`
    : type === "create"
    ? `Add a new ${label}`
    : `Edit ${label}`;

  const subheading = isDelete
    ? "This action cannot be undone."
    : type === "create"
    ? "Fill in the details below, then save your changes."
    : "Update the fields you want to change, then save.";

  const badgeStyle = isDelete
    ? "bg-red-50 text-red-500"
    : type === "create"
    ? "bg-lamaYellowLight text-yellow-600"
    : "bg-lamaSkyLight text-sky-600";

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  const renderForm = () => {
    if (isDelete) {
      return (
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-4 rounded-xl border border-red-100 bg-red-50/70 p-4">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-red-500 ring-1 ring-red-100">
              <AlertIcon />
            </span>
            <p className="text-sm text-gray-600">
              All data related to this {label} will be permanently removed. Are
              you sure you want to delete{" "}
              <span className="font-semibold text-gray-800">
                this {label}
              </span>
              ?
            </p>
          </div>
          <div className="flex items-center justify-end gap-3 border-t border-gray-100 pt-5">
            <button
              type="button"
              onClick={close}
              className="rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="button"
              className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 active:bg-red-800"
            >
              Delete {label}
            </button>
          </div>
        </div>
      );
    }

    if (type === "create" || type === "update") {
      return forms[table]
        ? forms[table](type, data, close)
        : "Form not found!";
    }

    return "Form not found!";
  };

  return (
    <>
      <button
        type="button"
        aria-label={`${heading}`}
        className={`${triggerStyle} flex shrink-0 items-center justify-center rounded-full text-gray-700 transition`}
        onClick={() => setOpen(true)}
      >
        {type === "create" ? (
          <PlusIcon />
        ) : type === "update" ? (
          <PencilIcon />
        ) : (
          <TrashIcon />
        )}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={heading}
          onClick={close}
        >
          <div
            className="animate-modal-in flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start gap-4 border-b border-gray-100 px-6 py-5">
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${badgeStyle}`}
              >
                {isDelete ? (
                  <TrashIcon size={20} />
                ) : type === "create" ? (
                  <PlusIcon size={20} />
                ) : (
                  <PencilIcon size={20} />
                )}
              </span>
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold text-gray-900">
                  {heading}
                </h2>
                <p className="text-sm text-gray-400">{subheading}</p>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="overflow-y-auto px-6 py-6">{renderForm()}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
