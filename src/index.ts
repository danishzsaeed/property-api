import express from "express";
import {PropertyService} from './services/property.service';
import cors from "cors"

const app = express();

const port = process.env.PORT || 4000
app.options('*', cors()) // include before other routes

app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/property-list",  (req, res) => {
  console.log('GET /property-list')
  const propertyService = new PropertyService();
  res
    .status(200)
    .send(propertyService.getProperties());
});

app.get("/property",  (req, res) => {
  console.log('property')
  const propertyService = new PropertyService();
  res
    .status(200)
    .send(propertyService.getProperty());
});
 

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})