import type { NextPage } from "next";
import styles from "../styles/Bingo.module.css";
import { useRouter } from "next/router";
import {
  CollectionReference,
  doc,
  DocumentSnapshot,
  FieldValue,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { firestoreDb } from "../src/firebaseConfig";
import { useEffect, useState } from "react";

interface BingoBox {
  word: string;
  marked: false;
}

interface BingoBoard {
  [index: number]: BingoBox;
}

interface BingoBoards {
  [player: string]: BingoBoard;
}

interface BingoGame {
  id: string;
  boards: BingoBoards;
}

const Bingo: NextPage = () => {
  const { query } = useRouter();

  const [bingoDoc, setBingoDoc] = useState<DocumentSnapshot<BingoGame> | null>(
    null
  );
  const bingoGameId = query?.id?.toString();

  useEffect(() => {
    if (bingoGameId) {
      const unsub = onSnapshot(
        doc<BingoGame>(
          firestoreDb as unknown as CollectionReference<BingoGame>,
          "bingo-games",
          bingoGameId
        ),
        (doc) => {
          setBingoDoc(doc);
        }
      );
      return () => unsub();
    }
  }, [bingoGameId]);

  const boardEntries = Object.entries(bingoDoc?.data() ?? {}).sort(
    ([player1], [player2]) => player1.localeCompare(player2)
  );

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Välkommen till Djurbingo!</h1>
        {boardEntries.map(([player, boxes]) => (
          <section key={player}>
            <h2>{`${player}s bräde`}</h2>
            <div className={styles.grid}>
              {Array.from({ length: 25 }, (_, i) => {
                const marked = boxes[i].marked;
                const word = boxes[i].word;
                return (
                  <button
                    className={
                      Array.from(word).length === 1 ? styles.emoji : undefined
                    }
                    key={i}
                    onClick={() =>
                      updateDoc(bingoDoc?.ref!, {
                        [`${player}.${i}.marked`]:
                          !marked as unknown as FieldValue,
                      })
                    }
                  >
                    <div className={styles.marker}>{marked && "❌"}</div>
                    <div>
                      {word.split(/\s/).map((w) => (
                        <div key={w}>{w}</div>
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default Bingo;
