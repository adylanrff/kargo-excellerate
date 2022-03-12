import { forwardRef } from "react";
import { useFormContext } from "react-hook-form";
export const LabeledTextField = forwardRef(({
  label,
  outerProps,
  labelProps,
  name,
  ...props
}, ref) => {
  const {
    register,
    formState: {
      isSubmitting,
      errors
    }
  } = useFormContext();
  const error = Array.isArray(errors[name]) ? errors[name].join(", ") : errors[name]?.message || errors[name];
  return <div {...outerProps}>
        <label {...labelProps}>
          {label}
          <input disabled={isSubmitting} {...register(name)} {...props} />
        </label>

        {error && <div role="alert" style={{
      color: "red"
    }}>
            {error}
          </div>}

        <style jsx>{`
          label {
            display: flex;
            flex-direction: column;
            align-items: start;
            font-size: 1rem;
          }
          input {
            font-size: 1rem;
            padding: 0.25rem 0.5rem;
            border-radius: 3px;
            border: 1px solid purple;
            appearance: none;
            margin-top: 0.5rem;
          }
        `}</style>
      </div>;
});
export default LabeledTextField;