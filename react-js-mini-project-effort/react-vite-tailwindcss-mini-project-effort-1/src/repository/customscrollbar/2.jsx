import React from "react";
import { Scrollbar } from "react-scrollbars-custom";

export default function CustomApp() {
  return (
    <>
      <Scrollbar style={{ width: 250, height: 250 }}>
        <p>Hello world!</p>
      </Scrollbar>
      ;
    </>
  );
}
