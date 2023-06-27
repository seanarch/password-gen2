import { useState } from "react";

const useConvertPassword = () => {
  const [converted, setConverted] = useState("");

  const convertPassword = (phrase) => {
    let lowercasePhrase = phrase.toLowerCase();
    const index = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];

    const mapped_1 = [
      "D",
      "B",
      "F",
      "a",
      "e",
      "c",
      "g",
      "H",
      "i",
      "N",
      "R",
      "L",
      "m",
      "j",
      "u",
      "P",
      "X",
      "k",
      "4",
      "T",
      "o",
      "V",
      "5",
      "2",
      "y",
      "7",
      "X",
      "1",
      "q",
      "3",
      "s",
      "Q",
      "6",
      "Z",
      "8",
      "9",
    ];

    const mapped_2 = [
      "Dn",
      "Bl",
      "Fp",
      "aK",
      "eO",
      "cM",
      "gQ",
      "Hr",
      "iS",
      "Nx",
      "R1",
      "Lv",
      "mW",
      "jT",
      "u4",
      "Pz",
      "X7",
      "kU",
      "5e",
      "T3",
      "oY",
      "V5",
      "5f",
      "2c",
      "y8",
      "7h",
      "8s",
      "1b",
      "qO",
      "4d",
      "s2",
      "Qz",
      "7g",
      "Z9",
      "8i",
      "9j",
    ];

    let convertedList = [];
    let convertedList2 = [];
    let convert = [];

    for (let i = 0; i < index.length; i++) {
      convertedList[index[i]] = mapped_1[i];
    }

    for (let i = 0; i < index.length; i++) {
      convertedList2[index[i]] = mapped_2[i];
    }

    if (lowercasePhrase.length <= 3) {
      for (let i = 0; i < lowercasePhrase.length; i++) {
        convert += convertedList2[lowercasePhrase[i]];
      }
    } else {
      for (let i = 0; i < lowercasePhrase.length; i++) {
        convert += convertedList[lowercasePhrase[i]];
      }
    }
    setConverted(convert);
  };
  return { converted, convertPassword };
};

export default useConvertPassword;
