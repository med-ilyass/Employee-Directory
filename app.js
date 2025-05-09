import express from "express";
import employees from "#db/employees";
import { request } from "express";

const app = express();

app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

app.route("/employees").get((req, res) => {
  res.send(employees);
});

app.route("/employees/random").get((req, res) => {
  
    const randomIndex = Math.floor(Math.random() * employees.length);
    const randomEmployee = employees[randomIndex];
  
    console.log("Random pick:", randomEmployee);
    res.send(randomEmployee);
  });
  
app.route("/employees/:id").get((req, res) => {
  const id = Number(req.params.id);
  const found = employees.find((e) => e.id ===id );
  if (found) {
    res.json(found);
  } else {
    res.status(404).send("There is no employee with that id.");
  }
});



export default app;