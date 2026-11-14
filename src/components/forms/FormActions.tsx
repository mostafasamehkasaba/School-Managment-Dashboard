type FormActionsProps = {
  type: "create" | "update";
  entity: string;
  isSubmitting?: boolean;
  onClose?: () => void;
};

const FormActions = ({
  type,
  entity,
  isSubmitting,
  onClose,
}: FormActionsProps) => (
  <div className="flex items-center justify-end gap-3 border-t border-gray-100 pt-5">
    <button
      type="button"
      onClick={onClose}
      className="rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
    >
      Cancel
    </button>
    <button
      type="submit"
      disabled={isSubmitting}
      className="rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-600 active:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {type === "create" ? `Create ${entity}` : "Save changes"}
    </button>
  </div>
);

export default FormActions;
