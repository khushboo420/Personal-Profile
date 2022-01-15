import React from "react";

import Card from "./Components/Card";
import Card2 from "./Components/Card2";

function App() {
  return (
    <>
    {1 > 2 && <Card></Card>}
    {0 < 1 && <Card2></Card2>}
    </>
  );
}

export default App;
