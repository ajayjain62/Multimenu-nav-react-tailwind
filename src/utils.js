import {
  Bolt,
  ShoppingBag,
  BellDot,
  BookOpenText,
  BriefcaseBusiness,
  CircleHelp,
  TriangleAlert,
  Users,
  Lock,
  Dessert,
  ShieldPlus,
  MessageCircle,
  Images,
  Figma,
  Play,
  MapPin,
  Database,
  PanelsTopLeft,
  PanelTop,
  Star,
  Feather,
  Cloud,
  Square,
  Circle,
} from "lucide-react";

export const Menus = [
  {
    name: "Bedsheet",
    subMenuHeading: ["By Size", "Styles"],
    subMenu: [
      {
        name: "Single Bedsheet ",
        desc: "Compact and cozy for single beds",
        icon: PanelsTopLeft,
      },
      {
        name: "Fitted Bedsheet",
        desc: "Fits snugly on the mattress",
        icon: ShoppingBag,
      },
      {
        name: "Double Bedsheet ",
        desc: "Perfect for double beds",
        icon: Bolt,
      },
      {
        name: "Printed Bedsheet",
        desc: "Stylish and patterned",
        icon: Images,
      },
      {
        name: "King Bedsheet ",
        desc: "Spacious for king-size beds",
        icon: PanelTop,
      },
      {
        name: "Plain Satin Bedsheet",
        desc: "Elegant and smooth texture",
        icon: BellDot,
      },
      {
        name: "Super King Bedsheet ",
        desc: "Ultimate luxury for super king-size beds",
        icon: Database,
      },
      {
        name: "Kids Print Bedsheet",
        desc: "Fun designs for kids",
        icon: Play,
      },
    ],
    gridCols: 2,
  },
  {
    name: "Comforter & Duvet",
    subMenuHeading: ["Comfort Options", "Styles"],
    subMenu: [
      {
        name: "Single Bed Comforter",
        desc: "Perfect for single beds",
        icon: PanelsTopLeft,
      },
      {
        name: "Double Bed Comforter",
        desc: "Ideal for couples",
        icon: Bolt,
      },
      {
        name: "Printed Comforter",
        desc: "Stylish and colorful",
        icon: Images,
      },
      {
        name: "Solid Color Reversible Comforter",
        desc: "Versatile and reversible",
        icon: Database,
      },
      {
        name: "Kids Comforter",
        desc: "Fun and cozy for children",
        icon: ShoppingBag,
      },
    ],
    gridCols: 2,
  },
  {
    name: "Mattress & Pillow Protector",
    subMenuHeading: ["Types", "Styles"],
    subMenu: [
      {
        name: "Quilted Mattress Protector",
        desc: "Extra cushioning",
        icon: PanelTop,
      },
      {
        name: "Fitted Quilted Mattress Protector",
        desc: "Snug fit",
        icon: Database,
      },
      {
        name: "Terry Mattress Protector",
        desc: "Waterproof and soft",
        icon: ShoppingBag,
      },
      {
        name: "Pillow Protector",
        desc: "Preserve pillow life",
        icon: MapPin,
      },
    ],
    gridCols: 2,
  },
  {
    name: "Pillows & Cushions",
    subMenuHeading: ["Options", "Styles"],
    subMenu: [
      {
        name: "Memory Foam Pillow",
        desc: "Regular Memory Foam Pillow  Contour Neck Support Foam Pillow",
        icon: BellDot,
        subMenu: [
          {
            name: "Regular Memory Foam Pillow",
            desc: "Standard comfort and support",
            icon: Play,
          },
          {
            name: "Contour Neck Support Foam Pillow",
            desc: "Ergonomic design for neck support",
            icon: ShieldPlus,
          },
        ],
      },
      {
        name: "Quilted Pillow",
        desc: "Soft and plush",
        icon: Star,
      },
      {
        name: "Single Dori Pillow",
        desc: "Stylish piping design",
        icon: Users,
      },
      {
        name: "Gusset / Double Dori Pillow",
        desc: "Reinforced for durability",
        icon: Feather,
      },
      {
        name: "Plain Pillow",
        desc: "Simple and elegant",
        icon: Cloud,
      },
      {
        name: "Satin Pillow",
        desc: "Luxury feel and shine",
        icon: Square,
      },
      {
        name: "Dori Cushion",
        desc: "Decorative and stylish",
        icon: Circle,
      },
      {
        name: "Plain Cushion",
        desc: "Minimalistic design",
        icon: Cloud,
      },
      {
        name: "Quilted Cushion",
        desc: "Textured and plush",
        icon: Star,
      },
      {
        name: "Bolster",
        desc: "Cylindrical pillow for support",
        icon: Feather,
      },
    ],
    gridCols: 2,
  },
  {
    name: "Hotel & Hospitality",
    subMenuHeading: ["Essentials", "Styles"],
    subMenu: [
      {
        name: "White Comforter",
        desc: "Luxurious, premium, cozy",
        icon: ShieldPlus,
      },
      {
        name: "Extra Soft Fluffy Pillow",
        desc: "Soft, comfortable, supportive",
        icon: Star,
      },
      {
        name: "Cushions",
        desc: "Decorative, functional, stylish",
        icon: Feather,
      },
      {
        name: "Bedsheets",
        desc: "Durable, elegant, smooth",
        icon: Database,
      },
      {
        name: "Towels and Bathmats",
        desc: "Absorbent, soft, durable",
        icon: Cloud,
      },
      {
        name: "Duvet Cover",
        desc: "Protective, elegant, versatile",
        icon: PanelsTopLeft,
      },
      {
        name: "Mattress Protector",
        desc: "Hygienic, durable, essential",
        icon: MapPin,
      },
      {
        name: "Pillow Protector",
        desc: "Clean, fresh, protective",
        icon: Play,
      },
    ],
    gridCols: 2,
  },
  {
    name: "Covers",
    subMenuHeading: ["Options", "Styles"],
    subMenu: [
      {
        name: "Cushion Covers",
        desc: "Decorative and durable",
        icon: Dessert,
      },
      {
        name: "Bed Covers",
        desc: "Elegant designs",
        icon: Lock,
      },
      {
        name: "Duvet Covers",
        desc: "Protect and style duvets",
        icon: ShieldPlus,
      },
    ],
    gridCols: 1,
  },
  {
    name: "Dohar",
    subMenuHeading: ["Size Options", "Styles"],
    subMenu: [
      {
        name: "Single Bed Dohar",
        desc: "Lightweight and warm",
        icon: PanelsTopLeft,
      },
      {
        name: "Double Bed Dohar",
        desc: "Comfortable for two",
        icon: Bolt,
      },
    ],
    gridCols: 1,
  },
];
