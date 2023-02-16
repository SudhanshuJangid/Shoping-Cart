import Book from "../images/Book.jpg";
import Tajbgn from "../images/TajMahal.jpg";
import Flower from "../images/Sunflower.jpg";
import Tree from "../images/Treeone.jpg";
import Bridge from "../images/bridge.jpg";

interface items {
  id: number;
  name: string;
  price: number;
  imgurl: any;
}

export const DataItem: items[] = [
  {
    id: 1,
    name: "Book",
    price: 10.0,
    imgurl: Book,
  },
  {
    id: 2,
    name: "Computer",
    price: 110.0,
    imgurl: Tajbgn,
  },
  {
    id: 3,
    name: "Banana",
    price: 5.0,
    imgurl: Flower,
  },
  {
    id: 4,
    name: "Tree",
    price: 140.0,
    imgurl: Tree,
  },
  {
    id: 5,
    name: "Bridge Wood",
    price: 30.0,
    imgurl: Bridge,
  },
];
