import { type JSX, splitProps } from "solid-js";

type CheckboxProps = {
  ref: (element: HTMLInputElement) => void;
  name: string;
  game: any;
  value?: string;
  checked?: boolean;
  onInput: JSX.EventHandler<HTMLInputElement, InputEvent>;
  onChange: JSX.EventHandler<HTMLInputElement, Event>;
  onBlur: JSX.EventHandler<HTMLInputElement, FocusEvent>;
  required?: boolean;
  class?: string;
  label: string;
};

export default function GameCheckbox(props: CheckboxProps) {
  const [, inputProps] = splitProps(props, ["game", "class", "value", "label"]);

  return (
    <div class={`${props.class} group w-full cursor-pointer`}>
      <label class="text-copy inline text-lg font-medium select-none">
        <img
          src={props.game.data.image.src}
          alt={props.game.data.image.alt}
          class="ring-heading mb-2 cursor-pointer rounded-xl shadow-lg group-has-[:checked]:ring-4"
          width={200}
          height={400}
        />
        <input
          {...inputProps}
          class="accent-heading h-4 w-4"
          type="checkbox"
          id={props.game.title}
          value={props.value || ""}
          checked={props.checked}
        />
        <span class="ml-2">{props.label}</span>
      </label>
    </div>
  );
}
