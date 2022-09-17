import React from "react";
import { MantineProvider } from "@mantine/core";
import { Router } from "./routes/Router";

function App() {
  return (
    <div>
      <MantineProvider>
        <Router />
      </MantineProvider>
    </div>
  );
}

export default App;
