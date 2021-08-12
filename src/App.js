import { Button, Typography } from "@material-ui/core";

const App = () => {
  return (
    <div className="App">
      <Typography variant="h1" color="secondary">
        Hello World
      </Typography>{" "}
      <Button variant="contained" color="secondary">
        Click Me
      </Button>
    </div>
  );
};

export default App;
