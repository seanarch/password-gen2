import { useState } from "react";

const useHashing = () => {
  const [hashed, setHashed] = useState("");

  const hashingpassword = () => {};

  return { hashed, hashingpassword };
};

export default useHashing;
