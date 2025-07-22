import type { SubmitHandler } from "@modular-forms/solid";
import { createForm } from "@modular-forms/solid";

import GameCheckbox from "$/components/GameCheckBox.tsx";

export type GameForm = {
  games: any;
};

type GameFormProps = {
  games: any;
};

export default function GameForm({ games }: GameFormProps) {
  const [gameForm, { Form, Field }] = createForm<GameForm>();

  const handleSubmit: SubmitHandler<GameForm> = (values) => {
    const checkedGames = Object.entries(values)
      .filter(([_, isChecked]) => isChecked === true)
      .map(([gameName, _]) => gameName);

    console.log("Checked games:", checkedGames);
  };

  return (
    <Form onSubmit={handleSubmit} class="mt-12 grid grid-cols-3 gap-8">
      {games.map((game: any) => (
        <Field name={game.data.title} type="boolean">
          {(field, props) => (
            <GameCheckbox
              label={game.data.title}
              value={field.value}
              game={game}
              {...props}
            />
          )}
        </Field>
      ))}
      <button
        type="submit"
        class="from-gradient-top to-gradient-bottom col-span-3 mt-12 cursor-pointer self-center rounded-2xl bg-linear-to-b px-18 py-2 text-2xl font-bold text-black/80 transition-all hover:scale-105">
        Next
      </button>
    </Form>
  );
}
