import { Facebook, Instagram, X } from "@mui/icons-material";

export const siteBrands: Record<
  string,
  {
    label: string;
    info: {
      name: string;
      logo: string;
      heroImageSrc: string;
      panelBgColor: string;
      heroImageSrc2: string;
      contents: { title: string; content: string }[];
      galleryImageSrcs: string[];
    };
  }
> = {
  elica: {
    label: "Elica",
    info: {
      name: "Elica Kitchen Services",
      logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=142,fit=crop/A85Er13l6yT19Lvr/daa4bc74-9d22-4f88-b994-215570ecfdd4.__cr0-0-800-600_pt0_sx800_v1___-mePbGVWLBZfkzww5.jpg",
      heroImageSrc:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/A85Er13l6yT19Lvr/hq720-mxBMr7XMjWCo0X8P.jpg",
      panelBgColor: "#3E565E",
      heroImageSrc2:
        "https://images.unsplash.com/photo-1596552183299-000ef779e88d?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw5fHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwwfHx8fDE3MzY5NjI4MzN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=224",
      contents: [
        {
          title: "Cooktop Repair",
          content:
            "Specialized repair services for Elica cooktops. We ensure your appliance works perfectly.",
        },
        {
          title: "Gas Stove Repair",
          content:
            "Professional repair for Elica gas stoves. Quick and reliable service guaranteed.",
        },
        {
          title: "Hob Repair Services",
          content:
            "Efficient repairs for Elica kitchen hobs. Contact us for fast solutions.",
        },
      ],
      galleryImageSrcs: [
        "https://images.unsplash.com/photo-1556185781-a47769abb7ee?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwyMnx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1610527003928-47afd5f470c6?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxM3x8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=158&h=160",
        "https://images.unsplash.com/photo-1571843439991-dd2b8e051966?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxOHx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=320",
        "https://images.unsplash.com/photo-1586208958839-06c17cacdf08?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxMHx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=164&h=160",
        "https://images.unsplash.com/photo-1535230387253-9cd5be991a86?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw2fHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwwfHx8fDE3MzY5NjI4MzN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=158&h=154",
        "https://images.unsplash.com/photo-1712076421577-a1babcea847d?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwwfHx8fDE3MzY5NjI4MzN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=320",
      ],
    },
  },
  faber: {
    label: "Faber",
    info: {
      name: "Faber Kitchen Services",
      logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=156,fit=crop/A85Er13l6yT19Lvr/download-11-AzG3DVRar8cGLNZO.jpg",
      heroImageSrc:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/A85Er13l6yT19Lvr/970x300_3_65410b29-7ef3-438d-b70c-03ea95f4c158-YZ9x2VN3lpCerP28.jpg",
      panelBgColor: "#3E565E",
      heroImageSrc2:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=224,fit=crop/A85Er13l6yT19Lvr/1500x15002_15c91bc4-d677-4fb5-93c1-c94c7f0672d9-Y4Lx4V3D5GIe6qoz.jpg",
      contents: [
        {
          title: "Cooktop Repair",
          content:
            "Specialized repair services for Faber cooktops. We ensure your appliance works perfectly.",
        },
        {
          title: "Gas Stove Repair",
          content:
            "Professional repair for Faber gas stoves. Quick and reliable service guaranteed.",
        },
        {
          title: "Hob Repair Services",
          content:
            "Efficient repairs for Faber kitchen hobs. Contact us for fast solutions.",
        },
      ],
      galleryImageSrcs: [
        "https://images.unsplash.com/photo-1556185781-a47769abb7ee?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwyMnx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1610527003928-47afd5f470c6?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxM3x8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=158&h=160",
        "https://images.unsplash.com/photo-1571843439991-dd2b8e051966?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxOHx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=320",
        "https://images.unsplash.com/photo-1586208958839-06c17cacdf08?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxMHx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=164&h=160",
        "https://images.unsplash.com/photo-1535230387253-9cd5be991a86?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw2fHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwwfHx8fDE3MzY5NjI4MzN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=158&h=154",
        "https://images.unsplash.com/photo-1712076421577-a1babcea847d?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwwfHx8fDE3MzY5NjI4MzN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=320",
      ],
    },
  },
  glen: {
    label: "Glen",
    info: {
      name: "Glen Kitchen Services",
      logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=141,fit=crop/A85Er13l6yT19Lvr/download-20-mePbGVe2w5TbzagO.png",
      heroImageSrc:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/A85Er13l6yT19Lvr/61lw9ojgetl-m2Wa4pEMOOFr5y9w.jpg",
      panelBgColor: "#33a7da",
      heroImageSrc2:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=612,h=375,fit=crop/A85Er13l6yT19Lvr/61lw9ojgetl-YKbEJ6Eg3bhPJK7O.jpg",
      contents: [
        {
          title: "Cooktop Repair",
          content:
            "Specialized repair services for Glen cooktops. We ensure your appliance works perfectly.",
        },
        {
          title: "Gas Stove Repair",
          content:
            "Professional repair for Glen gas stoves. Quick and reliable service guaranteed.",
        },
        {
          title: "Hob Repair Services",
          content:
            "Efficient repairs for Glen kitchen hobs. Contact us for fast solutions.",
        },
      ],
      galleryImageSrcs: [
        "https://images.unsplash.com/photo-1556185781-a47769abb7ee?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwyMnx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1610527003928-47afd5f470c6?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxM3x8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=158&h=160",
        "https://images.unsplash.com/photo-1571843439991-dd2b8e051966?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxOHx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=320",
        "https://images.unsplash.com/photo-1586208958839-06c17cacdf08?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxMHx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=164&h=160",
        "https://images.unsplash.com/photo-1535230387253-9cd5be991a86?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw2fHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwwfHx8fDE3MzY5NjI4MzN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=158&h=154",
        "https://images.unsplash.com/photo-1712076421577-a1babcea847d?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwwfHx8fDE3MzY5NjI4MzN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=320",
      ],
    },
  },
  gilma: {
    label: "Gilma",
    info: {
      name: "Gilma Kitchen Services",
      logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=121,fit=crop/A85Er13l6yT19Lvr/download-21-A0x1rpQ3aXhWOyWr.png",
      heroImageSrc:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/A85Er13l6yT19Lvr/gilma-Y4LxJ7k3enHxR2b3.jpg",
      panelBgColor: "#E56125",
      heroImageSrc2:
        "https://images.unsplash.com/photo-1596552183299-000ef779e88d?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw5fHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwwfHx8fDE3MzY5NjI4MzN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=224",
      contents: [
        {
          title: "Cooktop Repair",
          content:
            "Specialized repair services for Gilma cooktops. We ensure your appliance works perfectly.",
        },
        {
          title: "Gas Stove Repair",
          content:
            "Professional repair for Gilma gas stoves. Quick and reliable service guaranteed.",
        },
        {
          title: "Hob Repair Services",
          content:
            "Efficient repairs for Gilma kitchen hobs. Contact us for fast solutions.",
        },
      ],
      galleryImageSrcs: [
        "https://images.unsplash.com/photo-1556185781-a47769abb7ee?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwyMnx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1610527003928-47afd5f470c6?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxM3x8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=158&h=160",
        "https://images.unsplash.com/photo-1571843439991-dd2b8e051966?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxOHx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=320",
        "https://images.unsplash.com/photo-1586208958839-06c17cacdf08?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxMHx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=164&h=160",
        "https://images.unsplash.com/photo-1535230387253-9cd5be991a86?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw2fHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwwfHx8fDE3MzY5NjI4MzN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=158&h=154",
        "https://images.unsplash.com/photo-1712076421577-a1babcea847d?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwwfHx8fDE3MzY5NjI4MzN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=320",
      ],
    },
  },
  hafele: {
    label: "Hafele",
    info: {
      name: "Hafele Kitchen Services",
      logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=131,fit=crop/A85Er13l6yT19Lvr/download-22-mnlq5V29bWsV9ab8.png",
      heroImageSrc:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/A85Er13l6yT19Lvr/master_banner_web1400x620_ha-m7V53L2Mj1C7M6Za.jpg",
      panelBgColor: "#3E565E",
      heroImageSrc2:
        "https://images.unsplash.com/photo-1596552183299-000ef779e88d?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw5fHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwwfHx8fDE3MzY5NjI4MzN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=224",
      contents: [
        {
          title: "Cooktop Repair",
          content:
            "Specialized repair services for Hafele cooktops. We ensure your appliance works perfectly.",
        },
        {
          title: "Gas Stove Repair",
          content:
            "Professional repair for Hafele gas stoves. Quick and reliable service guaranteed.",
        },
        {
          title: "Hob Repair Services",
          content:
            "Efficient repairs for Hafele kitchen hobs. Contact us for fast solutions.",
        },
      ],
      galleryImageSrcs: [
        "https://images.unsplash.com/photo-1556185781-a47769abb7ee?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwyMnx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1610527003928-47afd5f470c6?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxM3x8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=158&h=160",
        "https://images.unsplash.com/photo-1571843439991-dd2b8e051966?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxOHx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=320",
        "https://images.unsplash.com/photo-1586208958839-06c17cacdf08?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxMHx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=164&h=160",
        "https://images.unsplash.com/photo-1535230387253-9cd5be991a86?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw2fHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwwfHx8fDE3MzY5NjI4MzN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=158&h=154",
        "https://images.unsplash.com/photo-1712076421577-a1babcea847d?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwwfHx8fDE3MzY5NjI4MzN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=320",
      ],
    },
  },
  siemens: {
    label: "Siemens",
    info: {
      name: "Siemens Kitchen Services",
      logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=119,fit=crop/A85Er13l6yT19Lvr/download-23-A3QOrkBkr9Hlk7Zq.png",
      heroImageSrc:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/A85Er13l6yT19Lvr/untitled-design-2023-11-06t221000.824-mv02We7zg1tWMMJw.png",
      panelBgColor: "#3E565E",
      heroImageSrc2:
        "https://images.unsplash.com/photo-1596552183299-000ef779e88d?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw5fHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwwfHx8fDE3MzY5NjI4MzN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=224",
      contents: [
        {
          title: "Cooktop Repair",
          content:
            "Specialized repair services for Siemens cooktops. We ensure your appliance works perfectly.",
        },
        {
          title: "Gas Stove Repair",
          content:
            "Professional repair for Siemens gas stoves. Quick and reliable service guaranteed.",
        },
        {
          title: "Hob Repair Services",
          content:
            "Efficient repairs for Siemens kitchen hobs. Contact us for fast solutions.",
        },
      ],
      galleryImageSrcs: [
        "https://images.unsplash.com/photo-1556185781-a47769abb7ee?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwyMnx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1610527003928-47afd5f470c6?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxM3x8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=158&h=160",
        "https://images.unsplash.com/photo-1571843439991-dd2b8e051966?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxOHx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=320",
        "https://images.unsplash.com/photo-1586208958839-06c17cacdf08?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxMHx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=164&h=160",
        "https://images.unsplash.com/photo-1535230387253-9cd5be991a86?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw2fHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwwfHx8fDE3MzY5NjI4MzN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=158&h=154",
        "https://images.unsplash.com/photo-1712076421577-a1babcea847d?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwwfHx8fDE3MzY5NjI4MzN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=320",
      ],
    },
  },
  bosch: {
    label: "Bosch",
    info: {
      name: "Bosch Kitchen Services",
      logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=112,fit=crop/A85Er13l6yT19Lvr/download-25-AE0avK2V1EuXVbJB.png",
      heroImageSrc:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/A85Er13l6yT19Lvr/5b68f78f11ea13a63d04c27ae0c345a9-YBge426o2ZsVjNr3.png",
      panelBgColor: "#3E565E",
      heroImageSrc2:
        "https://images.unsplash.com/photo-1596552183299-000ef779e88d?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw5fHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwwfHx8fDE3MzY5NjI4MzN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=224",
      contents: [
        {
          title: "Cooktop Repair",
          content:
            "Specialized repair services for Bosch cooktops. We ensure your appliance works perfectly.",
        },
        {
          title: "Gas Stove Repair",
          content:
            "Professional repair for Bosch gas stoves. Quick and reliable service guaranteed.",
        },
        {
          title: "Hob Repair Services",
          content:
            "Efficient repairs for Bosch kitchen hobs. Contact us for fast solutions.",
        },
      ],
      galleryImageSrcs: [
        "https://images.unsplash.com/photo-1556185781-a47769abb7ee?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwyMnx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1610527003928-47afd5f470c6?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxM3x8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=158&h=160",
        "https://images.unsplash.com/photo-1571843439991-dd2b8e051966?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxOHx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=320",
        "https://images.unsplash.com/photo-1586208958839-06c17cacdf08?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxMHx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=164&h=160",
        "https://images.unsplash.com/photo-1535230387253-9cd5be991a86?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw2fHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwwfHx8fDE3MzY5NjI4MzN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=158&h=154",
        "https://images.unsplash.com/photo-1712076421577-a1babcea847d?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwwfHx8fDE3MzY5NjI4MzN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=320",
      ],
    },
  },
  hindware: {
    label: "Hindware",
    info: {
      name: "Hindware Kitchen Services",
      logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=112,fit=crop/A85Er13l6yT19Lvr/download-12-AGBnvKMLx7T7KzOx.jpg",
      heroImageSrc:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/A85Er13l6yT19Lvr/island_chimney_range_1366x400_px_2_sep_2021_png-mk3q9kVlrPHyv9eD.png",
      panelBgColor: "#3E565E",
      heroImageSrc2:
        "https://images.unsplash.com/photo-1596552183299-000ef779e88d?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw5fHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwwfHx8fDE3MzY5NjI4MzN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=224",
      contents: [
        {
          title: "Cooktop Repair",
          content:
            "Specialized repair services for Hindware cooktops. We ensure your appliance works perfectly.",
        },
        {
          title: "Gas Stove Repair",
          content:
            "Professional repair for Hindware gas stoves. Quick and reliable service guaranteed.",
        },
        {
          title: "Hob Repair Services",
          content:
            "Efficient repairs for Hindware kitchen hobs. Contact us for fast solutions.",
        },
      ],
      galleryImageSrcs: [
        "https://images.unsplash.com/photo-1556185781-a47769abb7ee?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwyMnx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1610527003928-47afd5f470c6?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxM3x8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=158&h=160",
        "https://images.unsplash.com/photo-1571843439991-dd2b8e051966?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxOHx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=320",
        "https://images.unsplash.com/photo-1586208958839-06c17cacdf08?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxMHx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=164&h=160",
        "https://images.unsplash.com/photo-1535230387253-9cd5be991a86?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw2fHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwwfHx8fDE3MzY5NjI4MzN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=158&h=154",
        "https://images.unsplash.com/photo-1712076421577-a1babcea847d?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwwfHx8fDE3MzY5NjI4MzN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=320",
      ],
    },
  },
  prestige: {
    label: "Prestige",
    info: {
      name: "Prestige Kitchen Services",
      logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=120,h=66,fit=crop/A85Er13l6yT19Lvr/079bd266-24d3-4a15-b659-8fdc9acd369f._cr0-0-1000-1000_pt0_sx300__-YbNq9W3ZR0CWL1zQ.jpg",
      heroImageSrc:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/A85Er13l6yT19Lvr/microsoftteams-image-93-YKbErqbLEnF0nqBg.jpg",
      panelBgColor: "#cb2328",
      heroImageSrc2:
        "https://images.unsplash.com/photo-1596552183299-000ef779e88d?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw5fHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwwfHx8fDE3MzY5NjI4MzN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=224",
      contents: [
        {
          title: "Cooktop Repair",
          content:
            "Specialized repair services for Prestige cooktops. We ensure your appliance works perfectly.",
        },
        {
          title: "Gas Stove Repair",
          content:
            "Professional repair for Prestige gas stoves. Quick and reliable service guaranteed.",
        },
        {
          title: "Hob Repair Services",
          content:
            "Efficient repairs for Prestige kitchen hobs. Contact us for fast solutions.",
        },
      ],
      galleryImageSrcs: [
        "https://images.unsplash.com/photo-1556185781-a47769abb7ee?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwyMnx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1610527003928-47afd5f470c6?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxM3x8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=158&h=160",
        "https://images.unsplash.com/photo-1571843439991-dd2b8e051966?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxOHx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=320",
        "https://images.unsplash.com/photo-1586208958839-06c17cacdf08?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxMHx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=164&h=160",
        "https://images.unsplash.com/photo-1535230387253-9cd5be991a86?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw2fHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwwfHx8fDE3MzY5NjI4MzN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=158&h=154",
        "https://images.unsplash.com/photo-1712076421577-a1babcea847d?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwwfHx8fDE3MzY5NjI4MzN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=320",
      ],
    },
  },
  kaff: {
    label: "KAFF",
    info: {
      name: "KAFF Kitchen Services",
      logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=107,h=35,fit=crop/A85Er13l6yT19Lvr/logo-1-3-Yanq9N98LLHk6z0B.png",
      heroImageSrc:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/A85Er13l6yT19Lvr/kaff-dOq84QayJKTEjQ4W.jpg",
      panelBgColor: "#cb2328",
      heroImageSrc2:
        "https://images.unsplash.com/photo-1596552183299-000ef779e88d?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw5fHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwwfHx8fDE3MzY5NjI4MzN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=224",
      contents: [
        {
          title: "Cooktop Repair",
          content:
            "Specialized repair services for KAFF cooktops. We ensure your appliance works perfectly.",
        },
        {
          title: "Gas Stove Repair",
          content:
            "Professional repair for KAFF gas stoves. Quick and reliable service guaranteed.",
        },
        {
          title: "Hob Repair Services",
          content:
            "Efficient repairs for KAFF kitchen hobs. Contact us for fast solutions.",
        },
      ],
      galleryImageSrcs: [
        "https://images.unsplash.com/photo-1556185781-a47769abb7ee?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwyMnx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1610527003928-47afd5f470c6?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxM3x8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=158&h=160",
        "https://images.unsplash.com/photo-1571843439991-dd2b8e051966?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxOHx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=320",
        "https://images.unsplash.com/photo-1586208958839-06c17cacdf08?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxMHx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=164&h=160",
        "https://images.unsplash.com/photo-1535230387253-9cd5be991a86?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw2fHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwwfHx8fDE3MzY5NjI4MzN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=158&h=154",
        "https://images.unsplash.com/photo-1712076421577-a1babcea847d?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwwfHx8fDE3MzY5NjI4MzN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=320",
      ],
    },
  },
  carysil: {
    label: "Carysil",
    info: {
      name: "Carysil Kitchen Services",
      logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=107,h=35,fit=crop/A85Er13l6yT19Lvr/carysil-logo-jpg-A3QO74NGbzTEKqxq.jpeg",
      heroImageSrc:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/A85Er13l6yT19Lvr/microwave-and-oven-dOq8D09BwPSOx5WJ.jpg",
      panelBgColor: "#cb2328",
      heroImageSrc2:
        "https://images.unsplash.com/photo-1596552183299-000ef779e88d?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw5fHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwwfHx8fDE3MzY5NjI4MzN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=224",
      contents: [
        {
          title: "Cooktop Repair",
          content:
            "Specialized repair services for Carysil cooktops. We ensure your appliance works perfectly.",
        },
        {
          title: "Gas Stove Repair",
          content:
            "Professional repair for Carysil gas stoves. Quick and reliable service guaranteed.",
        },
        {
          title: "Hob Repair Services",
          content:
            "Efficient repairs for Carysil kitchen hobs. Contact us for fast solutions.",
        },
      ],
      galleryImageSrcs: [
        "https://images.unsplash.com/photo-1556185781-a47769abb7ee?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwyMnx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1610527003928-47afd5f470c6?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxM3x8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=158&h=160",
        "https://images.unsplash.com/photo-1571843439991-dd2b8e051966?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxOHx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=320",
        "https://images.unsplash.com/photo-1586208958839-06c17cacdf08?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxMHx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=164&h=160",
        "https://images.unsplash.com/photo-1535230387253-9cd5be991a86?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw2fHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwwfHx8fDE3MzY5NjI4MzN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=158&h=154",
        "https://images.unsplash.com/photo-1712076421577-a1babcea847d?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwwfHx8fDE3MzY5NjI4MzN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=320",
      ],
    },
  },
  sleek: {
    label: "Sleek",
    info: {
      name: "Sleek Kitchen Services",
      logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=85,h=49,fit=crop/A85Er13l6yT19Lvr/logo-1-m2WaEk5B1lcEOov3.jpg",
      heroImageSrc:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/A85Er13l6yT19Lvr/services-spotlight-sleek-kitchen-colour-pro-m6Ljb1oaERuoV9eR.jpg",
      panelBgColor: "#cb2328",
      heroImageSrc2:
        "https://images.unsplash.com/photo-1596552183299-000ef779e88d?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw5fHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwwfHx8fDE3MzY5NjI4MzN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=224",
      contents: [
        {
          title: "Cooktop Repair",
          content:
            "Specialized repair services for Sleek cooktops. We ensure your appliance works perfectly.",
        },
        {
          title: "Gas Stove Repair",
          content:
            "Professional repair for Sleek gas stoves. Quick and reliable service guaranteed.",
        },
        {
          title: "Hob Repair Services",
          content:
            "Efficient repairs for Sleek kitchen hobs. Contact us for fast solutions.",
        },
      ],
      galleryImageSrcs: [
        "https://images.unsplash.com/photo-1556185781-a47769abb7ee?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwyMnx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1610527003928-47afd5f470c6?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxM3x8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=158&h=160",
        "https://images.unsplash.com/photo-1571843439991-dd2b8e051966?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxOHx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=320",
        "https://images.unsplash.com/photo-1586208958839-06c17cacdf08?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxMHx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8fHwxNzM2OTYyODMzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=164&h=160",
        "https://images.unsplash.com/photo-1535230387253-9cd5be991a86?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw2fHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwwfHx8fDE3MzY5NjI4MzN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=158&h=154",
        "https://images.unsplash.com/photo-1712076421577-a1babcea847d?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwwfHx8fDE3MzY5NjI4MzN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=320",
      ],
    },
  },
};

export const siteMetaData = {
  GlobalLayout: {
    contactBannerBgColor: "#3226ed",
    contactBannerText: 18001235778,
    siteLogoSrc:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=232,fit=crop,q=95/A85Er13l6yT19Lvr/whatsapp-image-2025-01-09-at-11.21.04-pm-AQEDV2vegOHZ0O7v.jpeg",
    footerBgColor: "#1E1A17",
    footerSection1: {
      title: "SUPPORT",
      content: "Expert gas stove repair in Bangalore and Hyderabad.",
      links: [
        {
          icon: Facebook,
          href: "https://facebook.com",
        },
        {
          icon: Instagram,
          href: "https://instagram.com",
        },
        {
          icon: X,
          href: "https://x.com",
        },
      ],
    },
    footerSection2: {
      title: "BRANDS",
      content1: "gasstovecare@gmail.com",
      content2: 18001235871,
    },
    footerSection3: {
      title: "CONTACT",
    },
    footerRightsText: "© 2024. All rights reserved.",
  },
  SiteNav: [
    { label: "Home", href: "/" },
    {
      label: "Services",
      href: "/services",
      subnav: Object.keys(siteBrands).map((s) => ({
        label: siteBrands[s].label,
        href: `/services/${s}`,
      })),
    },
    { label: "Contact", href: "/contact" },
    { label: "Reviews", href: "/reviews" },
  ],
  HomePage: {
    parallaxImageSrc:
      "https://images.unsplash.com/photo-1608454770647-01dc0f7dd97d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    parallaxImageTitle1: "Expert Gas Stove Repair Services",
    parallaxImageTitle2: "Reliable repairs for Elica, Faber, Glen, and more.",
    parallaxSections: [
      {
        title: "Burner Repair",
        description: "Quick and efficient burner repair services available.",
      },
      { title: "Brand Expertise", description: "Gas Leak Fixes" },
      {
        title: "Trusted Brands",
        description: "Professional solutions for all gas leak issues.",
      },
    ],
    section1: {
      title: "Expert Gas Stove Repair Services",
      content:
        "We specialize in modern gas stove repairs in Bangalore and Hyderabad, ensuring quality service for brands like Elica, Faber, Glen, and more.",
      heroImageSrc:
        "https://images.unsplash.com/photo-1590720563742-f88d6bff91ce?auto=format&fit=crop&w=319&h=321",
      heroImageTitle: "“Highly professional and reliable service.”",
      heroImageSubtitle: "Ravi Kumar",
    },
    section2: {
      title:
        "Looking for Expert Technicians for Kitchen products Repairs and Services?",
      title2: "Our Brand Services",
      content2:
        " Provide high quality brand repairs and services by our expert technicians.",
    },
    section3: {
      title: "Expert Gas Repair",
      content:
        "Reliable gas stove repair services in Bangalore and Hyderabad. Book your service today!",
      servicesList: [
        {
          title: "Burner Repair",
          description:
            "Professional burner repair services for all major brands including Elica, Faber, and Glen.",
          image:
            "https://images.unsplash.com/photo-1610528599023-36a3b1e63318?auto=format&fit=crop&w=328&h=224",
        },
        {
          title: "Gas Leak Fix",
          description:
            "Expert solutions for gas leaks, ensuring safety and efficiency for your home appliances.",
          image:
            "https://images.unsplash.com/photo-1565007573790-f34269703b0a?auto=format&fit=crop&w=328&h=223",
        },
        {
          title: "Maintenance Services",
          description:
            "Comprehensive maintenance services for your gas stoves, enhancing performance and longevity.",
          image:
            "https://images.unsplash.com/photo-1510925635549-fd7f9d54812a?auto=format&fit=crop&w=328&h=224",
        },
      ],
    },
    section4: {
      title: "Gas Stove",
      content: "Expert repairs for Elica, Faber, Glen, and more brands.",
      imageList: [
        "https://images.unsplash.com/photo-1595166986545-bf6dacb22b4e?auto=format&fit=crop",
        "https://images.unsplash.com/photo-1695946355344-c80cefbce431?auto=format&fit=crop",
        "https://images.unsplash.com/photo-1570379949159-4d477e361a07?auto=format&fit=crop",
        "https://images.unsplash.com/photo-1607324772107-8ad6740ca195?auto=format&fit=crop&w=158&h=168",
        "https://images.unsplash.com/photo-1575202286599-d7606f6387d0?auto=format&fit=crop&w=158&h=168",
        "https://images.unsplash.com/photo-1556552027-b265c38fa3a2?auto=format&fit=crop&w=158&h=168",
      ],
    },
  },
  ServicesPage: {},
  ContactPage: {
    title: "Contact Us",
    content:
      "Get in touch for gas stove repair services in Bangalore and Hyderabad. We're here to help!",
    content2:
      "Reach out for gas stove repair services in Bangalore and Hyderabad. We're here to help you with all your gas stove needs.",
    content3: "Bangalore and Hyderabad",
    content4: "9 AM - 6 PM",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7773386.98396428!2d72.57974239876822!3d12.971598315761922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670d4b49c4b%3A0x804cb6bb46d7923e!2sBangalore%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1615825445965!5m2!1sen!2sin&z=200",
  },
  ReviewsPage: {
    ratings: 5,
    imageSrc:
      "https://images.unsplash.com/photo-1664619512002-cb1e81971cb5?auto=format&fit=crop&w=328&h=320",
    review:
      "Excellent service! My gas stove was repaired quickly and efficiently. Highly recommend their expertise.",
    reviewerImageSrc:
      "https://images.unsplash.com/photo-1518352707451-f2acbfd062f9?auto=format&fit=crop&w=47&h=46",
    reviewerName: "Ravi Kumar",
    services: [
      {
        id: 1,
        title:
          "Expert Gas Stove Repair Services in Bangalore and Hyderabad You Can Trust",
        description:
          "Gas Stove Care offers modern, reliable repair services for top brands like Elica, Faber, and more. Our user-friendly website makes booking easy. Explore burner repairs, gas leak fixes, and customer testimonials to ensure you receive the best service in Bangalore and Hyderabad. Book your service today!",
        date: "5/8/2024",
        readTime: "1 min read",
        imageSrc:
          "https://images.unsplash.com/photo-1601314090192-724a4b5409e9?auto=format&fit=crop&w=328&h=197",
        altText: "A woman using a gas stove",
      },
      {
        id: 2,
        title: "Expert Gas Stove Repair Services in Bangalore and Hyderabad",
        description:
          "Discover top-notch gas stove repair services for brands like Elica, Faber, and Bosch. Our user-friendly website makes booking easy. Enjoy reliable repairs for your gas stoves in Bangalore and Hyderabad. Trust our expertise to ensure your stove operates safely and efficiently. Book your service today!",
        date: "5/8/2024",
        readTime: "1 min read",
        imageSrc:
          "https://images.unsplash.com/photo-1640409084337-4c94270e5b0c?auto=format&fit=crop&w=328&h=197",
        altText: "A stove on fire",
      },
    ],
  },
};
