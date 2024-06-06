const aircrafts = [
  {
    data: {
      name: "N110GA",
      usableFuel: "38 gal",
      model: "Beechjet 400 ",
      year: "1988",
      equipment: [
        // "Garmin106 CDI Indicator",
        // "Garmin GNX 375 Navigator/Transponder",
        // "Dual Bendix/King KX 155 Nav/Comm",
      ],
      imagePath: "/src/assets/beechjet-400.jpeg",
      alt: "Beechjet 400",
      imagesArray: ["/src/assets/beechjet-400.jpeg"],
      description: [
        "Acquired",
      ],
      hasRibbon: true,
      ribbonTitle: "acquired",
      ribbonColor: "bg-dark-blue",
    },
    slug: "N110GA",
  },
  {
    data: {
      name: "N2201U",
      usableFuel: "38 gal",
      model: "Beech Bonanza B36TC",
      year: "1998",
      equipment: [
        // "Dual G5",
        // "PS PAR 200A Audiopanel/Comm",
        // "Garmin 430",
        // "Garmin GTX 330 Transponder",
        // "JPI Fuel Flow Gauge",
      ],
      imagePath: "/src/assets/beech-bonanza-b36tc.jpg",
      alt: "Beech Bonanza B36TC",
      imagesArray: ["/src/assets/beech-bonanza-b36tc.jpg"],
      description: [
        "Sold",
      ],
      hasRibbon: true,
      ribbonTitle: "sold",
      ribbonColor: "bg-red-700",
    },
    slug: "N2201U",
  },
  {
    data: {
      name: "N6197B",
      usableFuel: "38 gal",
      model: "Cessna 182A",
      year: "1957",
      equipment: [
        // "Dual G5",
        // "PS PAR 200A Audiopanel/Comm",
        // "Garmin 430",
        // "Garmin GTX 330 Transponder",
        // "JPI Fuel Flow Gauge",
      ],
      imagePath: "/src/assets/cessna-182a.jpg",
      alt: "Cessna 182A",
      imagesArray: ["/src/assets/cessna-182a.jpg"],
      description: [
        "Sold",
      ],
      hasRibbon: true,
      ribbonTitle: "sold",
      ribbonColor: "bg-red-700",
    },
    slug: "N6197B",
  },
  {
    data: {
      name: "N500TU",
      usableFuel: "38 gal",
      model: "Aero Commander",
      year: "1962",
      equipment: [
        // "Dual G5",
        // "PS PAR 200A Audiopanel/Comm",
        // "Garmin 430",
        // "Garmin GTX 330 Transponder",
        // "JPI Fuel Flow Gauge",
      ],
      imagePath: "/src/assets/aero-commander-side.jpg",
      alt: "Aero Commander",
      imagesArray: [
        "/src/assets/aero-commander-front.jpg",
        "/src/assets/aero-commander-side.jpg",
      ],
      description: [
        "Sold",
      ],
      hasRibbon: true,
      ribbonTitle: "sold",
      ribbonColor: "bg-red-700",
    },
    slug: "N500TU",
  },
  {
    data: {
      name: "N6190C",
      usableFuel: "38 gal",
      model: "Cessna 172S",
      year: "2008",
      equipment: [
        // "Dual G5",
        // "PS PAR 200A Audiopanel/Comm",
        // "Garmin 430",
        // "Garmin GTX 330 Transponder",
        // "JPI Fuel Flow Gauge",
      ],
      imagePath: "/src/assets/N6190C-cessna.png",
      alt: "Cessna 172S",
      imagesArray: ["/src/assets/N6190C-cessna.png"],
      description: [
        "Sold",
      ],
      hasRibbon: true,
      ribbonTitle: "sold",
      ribbonColor: "bg-red-700",
    },
    slug: "N6190C",
  },
  {
    data: {
      name: "N6137Q",
      usableFuel: "38 gal",
      model: "Cessna 172SP",
      year: "2008",
      equipment: [
        // "Dual G5",
        // "PS PAR 200A Audiopanel/Comm",
        // "Garmin 430",
        // "Garmin GTX 330 Transponder",
        // "JPI Fuel Flow Gauge",
      ],
      imagePath: "/src/assets/N6137Q.png",
      alt: "Cessna 172SP",
      imagesArray: ["/src/assets/N6137Q.png", "/src/assets/N6137Q-side.png"],
      description: [
        "Sold",
      ],
      hasRibbon: true,
      ribbonTitle: "sold",
      ribbonColor: "bg-red-700",
    },
    slug: "N6137Q",
  },
  {
    data: {
      name: "N99VS",
      usableFuel: "38 gal",
      model: "Hawker 400XP",
      year: "2006",
      equipment: [
        // "Dual G5",
        // "PS PAR 200A Audiopanel/Comm",
        // "Garmin 430",
        // "Garmin GTX 330 Transponder",
        // "JPI Fuel Flow Gauge",
      ],
      imagePath: "/src/assets/N99VS.jpg",
      alt: "Hawker 400XP",
      imagesArray: ["/src/assets/N99VS.jpg"],
      description: [
        "Sold",
      ],
      hasRibbon: true,
      ribbonTitle: "sold",
      ribbonColor: "bg-red-700",
    },
    slug: "N99VS",
  },
  {
    data: {
      name: "N553HC",
      usableFuel: "38 gal",
      model: "Cessna T182T",
      year: "2004",
      equipment: [
        // "Dual G5",
        // "PS PAR 200A Audiopanel/Comm",
        // "Garmin 430",
        // "Garmin GTX 330 Transponder",
        // "JPI Fuel Flow Gauge",
      ],
      imagePath: "/src/assets/N553HC.jpg",
      alt: "Cessna T182T",
      imagesArray: ["/src/assets/N553HC.jpg"],
      description: [
        "Sold",
      ],
      hasRibbon: true,
      ribbonTitle: "sold",
      ribbonColor: "bg-red-700",
    },
    slug: "N553HC",
  },
  {
    data: {
      name: "N664JB",
      usableFuel: "38 gal",
      model: "Cirrus SR22",
      year: "",
      equipment: [
        // "Dual G5",
        // "PS PAR 200A Audiopanel/Comm",
        // "Garmin 430",
        // "Garmin GTX 330 Transponder",
        // "JPI Fuel Flow Gauge",
      ],
      imagePath: "/src/assets/N664JB.jpg",
      alt: "Cirrus SR22",
      imagesArray: ["/src/assets/N664JB.jpg"],
      description: [
        "Sold",
      ],
      hasRibbon: true,
      ribbonTitle: "sold",
      ribbonColor: "bg-red-700",
    },
    slug: "N664JB",
  },
  {
    data: {
      name: "N225P",
      usableFuel: "38 gal",
      model: "Beech Bonanza B36TC",
      year: "",
      equipment: [
        // "Dual G5",
        // "PS PAR 200A Audiopanel/Comm",
        // "Garmin 430",
        // "Garmin GTX 330 Transponder",
        // "JPI Fuel Flow Gauge",
      ],
      imagePath: "/src/assets/N225P.jpg",
      alt: "Beech Bonanza B36TC",
      imagesArray: ["/src/assets/N225P.jpg", "/src/assets/N225P-side.jpg"],
      description: [
        "Sold",
      ],
      hasRibbon: true,
      ribbonTitle: "sold",
      ribbonColor: "bg-red-700",
    },
    slug: "N225P",
  },
];

export default aircrafts;
