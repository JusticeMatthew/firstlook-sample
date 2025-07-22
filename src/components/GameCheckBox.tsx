import { type JSX, splitProps } from "solid-js";

type CheckboxProps = {
  ref: (element: HTMLInputElement) => void;
  name: string;
  value?: string;
  checked?: boolean;
  onInput: JSX.EventHandler<HTMLInputElement, InputEvent>;
  onChange: JSX.EventHandler<HTMLInputElement, Event>;
  onBlur: JSX.EventHandler<HTMLInputElement, FocusEvent>;
  required?: boolean;
  class?: string;
  label: string;
  error?: string;
};

/**
 * Checkbox that allows users to select an option. The label next to the
 * checkbox describes the selection option.
 */
export function Checkbox(props: CheckboxProps) {
  const [, inputProps] = splitProps(props, [
    "class",
    "value",
    "label",
    "error",
  ]);

  return (
    <div class={props.class}>
      <label class="flex space-x-4 font-medium select-none md:text-lg lg:text-xl">
        <input
          {...inputProps}
          class="mt-1 h-4 w-4 cursor-pointer lg:mt-1 lg:h-5 lg:w-5"
          type="checkbox"
          id={props.name}
          value={props.value || ""}
          checked={props.checked}
          aria-invalid={!!props.error}
          aria-errormessage={`${props.name}-error`}
        />
        <span>{props.label}</span>
      </label>
    </div>
  );
}
