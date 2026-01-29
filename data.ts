import {
    Blocks,
    CircleDollarSign,
    Globe,
    PlugZap,
    TvMinimal,
} from "lucide-react-native";

export const categories = [
  {
    Icon: PlugZap,
    name: "Electricity",
  },
  {
    Icon: Globe,
    name: "Internet",
  },
  {
    Icon: TvMinimal,
    name: "Subscribe",
  },
  {
    Icon: CircleDollarSign,
    name: "Convert",
  },
  {
    Icon: Blocks,
    name: "More",
  },
];

export const quickTrans = [
  {
    bgColor: "#fedadb",
    name: "Abigail",
    phone: 8065088147,
    bank: "Opay",
    image: require(`@/public/pimg/four.png`)
  },
  {
    bgColor: "#1eb364",
    name: "Eunice",
    phone: 8065088147,
    bank: "Moniepoint",
    image: require(`@/public/pimg/seven.png`)
  },
  {
    bgColor: "#e9b275",
    name: "Gabriel",
    phone: 8065088147,
    bank: "Access bank",
    image: require(`@/public/pimg/three.png`)
  },
  {
    bgColor: "#968ced",
    name: "Oluchi",
    phone: 8065088147,
    bank: "Kuda",
    image: require(`@/public/pimg/two.png`)
  },
  {
    bgColor: "#f6ae8b",
    name: "Timi",
    phone: 8065088147,
    bank: "Opay",
    image: require(`@/public/pimg/six.png`)
  },
];

export const recentTrans= [
  {
    bgColor: "#e9b275",
    name: "Femi Gabriel",
    timeHr: 10,
    timeMin: 42,
    amount: 800,
    status: "Sent",
    image: require(`@/public/pimg/three.png`)
  },
    {
    bgColor: "#968ced",
    name: "Oluchi",
    timeHr: 17,
    timeMin: 12,
    amount: 200,
    status: "Received",
    image: require(`@/public/pimg/two.png`)
  },
    {
    bgColor: "#1eb364",
    name: "Eunice",
    timeHr: 14,
    timeMin: 55,
    amount: 1200,
    status: "Sent",
    image: require(`@/public/pimg/seven.png`)
  },
]
