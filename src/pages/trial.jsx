import { useState, useEffect } from "react";

export default function Page() {
  const obj = {
    anis: [
      { a: 1, b: 2 },
      { a: 2, b: 1 },
    ],
    emil: { a: 1 },
  };

  const key = obj[Object.keys(obj)[0]];
  const value = Object.values(key)[0];
  console.log(typeof Object.values(value));
  console.log(Object.values(value));
  return (
    <div
      style={{
        width: "calc(100% - 300px)",
        height: "auto",
        padding: "100px 150px 100px 150px",
      }}
    >
      {Object.values(key).map((value, index) => {
        return (
          <>
            <p key={index}>
              {value.a}
              {value.b}
            </p>
          </>
        );
      })}
    </div>
  );
}
