import { faker } from "@faker-js/faker";
import { Property } from "../modules/property.module";

export class PropertyService {   
    
    getProperties(): Property[] {
        const properties: Property[] = [];
        for (let index = 0; index < parseInt(faker.random.numeric(2)); index++) {
            properties.push(this.getProperty());
            
        }
      return properties;
    }

    getProperty(): Property {
        const property: Property = {
        name: faker.random.word(),
        image: faker.image.business(),
        price: parseInt(faker.random.numeric(2)),
        desc: faker.random.words()
        }
        return property;
      }
  }
