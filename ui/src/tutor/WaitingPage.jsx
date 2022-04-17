import * as React from "react";
var stylingObject = {
  container: {
    backgroundColor: "#525E75",
    color: "#fff",
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default function WaitingPage() {
  return (
    <>
      <div style={stylingObject.container}>
        <h1>WooHoo! No students currently in the queue!</h1>
      </div>
    </>
  );
}
