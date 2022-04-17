import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

interface BingoForm {
  boxes: string;
  players: string;
}

const Home: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<BingoForm>();

  const onSubmit = handleSubmit(async (data) => {
    const result = await fetch(
      "https://europe-west1-djurbingo.cloudfunctions.net/python-djurbingo-create-bingo-cf ",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const parsed = await result.json();

    router.push(`/bingo?id=${parsed.id}`);
  });

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Välkommen till Djurbingo!</h1>

        <form onSubmit={onSubmit}>
          <label>
            <p>
              Ange innehållet för de 25 rutorna på bingobrädet på var sin rad.
            </p>
            <textarea
              {...register("boxes", {
                validate: {
                  twentyFiveBoxes: (v) => {
                    // @ts-ignore
                    const boxes = v.trim().split("\n").length;
                    return boxes >= 25
                      ? true
                      : `Lägg till mera ord! Du har ${boxes} av 25 rutor ifyllda!`;
                  },
                },
              })}
            />
            <div className={styles.errors}>
              {formState.errors.boxes?.message}
            </div>
          </label>
          <label>
            <p>Ange bingospelarna på var sin rad.</p>
            <textarea
              {...register("players", {
                required: "Lägg till spelare!",
              })}
            />
            <div className={styles.errors}>
              {formState.errors.players?.message}
            </div>
          </label>
          <button type="submit">Dags för bingo!</button>
        </form>
      </main>
    </div>
  );
};

export default Home;
