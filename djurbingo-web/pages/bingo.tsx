import type { NextPage } from "next";
import styles from "../styles/Bingo.module.css";
import { useRouter } from "next/router";
import {
  CollectionReference,
  doc,
  DocumentSnapshot,
  onSnapshot,
  runTransaction,
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
          <div key={player}>
            <h2>{`${player}s bräde`}</h2>
            {Array.from({ length: 25 }, (_, i) => (
              <button
                onClick={() =>
                  updateDoc(bingoDoc?.ref!, {
                    [`${player}.${i}.marked`]: !boxes[i].marked,
                  })
                }
              >
                {boxes[i].word}
                {boxes[i].marked && "❌"}
              </button>
            ))}
          </div>
        ))}
      </main>
    </div>
  );
};

export default Bingo;
