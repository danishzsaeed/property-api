import express from "express";
import {PropertyService} from './services/property.service';
import cors from "cors"

const app = express();

const port = process.env.PORT || 4000

app.use(cors({ origin: "*", credentials: false }))

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/property-list",  (req, res) => {
  const propertyService = new PropertyService();
  res
    .status(200)
    .send(propertyService.getProperties());
});

app.get("/property",  (req, res) => {
  const propertyService = new PropertyService();
  res
    .status(200)
    .send(propertyService.getProperty());
});
 

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})