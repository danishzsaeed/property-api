import express from "express";
import {PropertyService} from './services/property.service';
const app = express();

const port = process.env.PORT || 3000
 
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