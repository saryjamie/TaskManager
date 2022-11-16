import React, { useMemo, useState } from "react";
export default function Palindrome() {
  const [word, setWord] = useState("");
  const isPalindrome = useMemo(() => {
    return word === word.split("").reverse().join("");
  }, [word]);
  return (
    <div className="App">
      <form>
        <div>
          <label>word to check {""}</label>
          <input value={word} onChange={(e) => setWord(e.target.value)} />
        </div>
      </form>
      <div color="red">
        Is Palindrome: {""}
        {isPalindrome ? " Yes " : " No "}
      </div>
    </div>
  );
}

// function Palindrome() {

// //   const arr = [1, 2, 2, 1];
// //   for (var i = 0; i < arr.length; i++) {
// //     if ([i] === arr.length) {
// //       <h1>TRUE</h1>;
// //     }
// //     <h1>FALSE</h1>;
// //   }
// // }
// //   const a = 1;
// //   const b = 2;
// //   const c = 2;
// //   const d = 1;

// //   const test = () => {

// //     if (a === d && b === c) {
// //       <h1>true</h1>;
// //     }
// //     <h1>false</h1>;
// //   };
// //   return <h1>{test}</h1>;

// // for (a === d &&)
// // }

// export default Palindrome;
