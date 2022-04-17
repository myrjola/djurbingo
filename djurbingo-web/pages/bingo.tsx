import type { NextPage } from "next";
import styles from "../styles/Bingo.module.css";
import { useRouter } from "next/router";
import {
  collection,
  CollectionReference,
  doc,
  DocumentSnapshot,
  onSnapshot,
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
          console.log("Current data: ", doc.data());
          setBingoDoc(doc);
        }
      );
      return () => unsub();
    }
  }, [bingoGameId]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Välkommen till Djurbingo!</h1>
        {bingoDoc && JSON.stringify(bingoDoc.data())}
      </main>
    </div>
  );
};

export default Bingo;
