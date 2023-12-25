import { firestore } from "../../firebase/clientApp";
import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { Button } from "@mui/material";
import { parts } from "./api/parts";

export default function Trial(props) {
  const [data, setData] = useState(props.data);

  return (
    <div style={{ padding: "100px 150px 100px 150px" }}>
      <Button
        onClick={() => {
          console.log(data);
        }}
        variant="contained"
        color="secondary"
      >
        Click me!
      </Button>
      <div>
        {data[2].map((item) => {
          return (
            <>
              <h1>{item.name}</h1>
              <p>{item.body}</p>
            </>
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const docRef = doc(firestore, "parts", "details");
  const docSnap = await getDoc(docRef);

  return {
    props: {
      data: docSnap.data(),
    },
  };
}
