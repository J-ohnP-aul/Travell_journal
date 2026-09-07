import Image1 from "/src/assets/mtFuji.png"
import Image2 from "/src/assets/mtKenya.png"
import Image3 from "/src/assets/mtEverest.png"
import Image4 from "/src/assets/nnPark.png"


export default [
  {
    id:1,
    image:Image1,
    google_maplink:"https://www.google.com/maps/place/Mount+Fuji/@35.3606255,138.7273634,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNmbXk?entry=ttu",
    name:"Japan",
    site_name:"Mt Fuji",
    date:"June 15, 2023",
    description:`
        Japan’s Mt. Fuji is an active volcano about 100 kilometers southwest of Tokyo. Commonly called “Fuji-san,” it’s the country’s tallest peak, at 3,776 meters. A pilgrimage site for centuries, it’s considered one of ...`        
  },
  {
    id:2,
    image: Image2,
    google_maplink:
      "https://www.google.com/maps/place/Mount+Kenya/@0.152043,37.308407,12z",
    name: "Kenya",
    site_name: "Mt Kenya",
    date: "July 22, 2023",
    description: `
      Mount Kenya is the highest mountain in Kenya and the second-highest peak in
      Africa, rising to 5,199 meters. Located near the equator, it is known for its
      dramatic peaks, glaciers, forests, and diverse wildlife.
    `,
  },
   {
    id:3,
    image: Image3,
    google_maplink:
      "https://www.google.com/maps/place/Mount+Everest/@27.9881203,86.9249751,12z",
    name: "Nepal",
    site_name: "Mt Everest",
    date: "May 29, 2023",
    description: `
      Mount Everest is the highest mountain on Earth, reaching approximately
      8,849 meters above sea level. Located in the Himalayas on the border of
      Nepal and Tibet, it attracts climbers and adventurers from around the world.
    `,
  },
  {
    id:4,
    image: Image4,
    google_maplink:
      "https://www.google.com/maps/place/Nairobi+National+Park/@-1.373333,36.858889,13z",
    name: "Kenya",
    site_name: "Nairobi National Park",
    date: "August 10, 2023",
    description: `
      Nairobi National Park is a unique wildlife reserve located just outside
      Kenya’s capital city. The park is home to lions, giraffes, zebras, rhinos,
      buffaloes, and many other animals, with Nairobi’s skyline visible in the distance.
    `,
  },
]