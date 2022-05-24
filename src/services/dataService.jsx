var catalog = [
  {
    _id: "123",
    price: 12.32,
    stock: 13,
    title: "Uwell 15W Pod",
    image: "1.png",
    discount: 5,
    category: "Vegetable",
  },
  {
    _id: "124",
    price: 12.32,
    stock: 13,
    title: "Geek Vape L200",
    image: "2.png",
    discount: 5,
    category: "Vegetable",
  },
  {
    _id: "125",
    price: 12.32,
    stock: 13,
    title: "Geek Vape L200",
    image: "3.png",
    discount: 5,
    category: "Vegetable",
  },
  {
    _id: "126",
    price: 22.71,
    stock: 21,
    title: "Geek Vape L200",
    image: "4.png",
    discount: 10,
    category: "Fruit",
  },
  {
    _id: "127",
    price: 32.0,
    stock: 20,
    title: "Geek Vape L200",
    image: "5.png",
    discount: 0,
    category: "Vegetable",
  },
  {
    _id: "127",
    price: 32.0,
    stock: 20,
    title: "Geek Vape L200",
    image: "6.png",
    discount: 0,
    category: "Vegetable",
  },
  {
    _id: "127",
    price: 32.0,
    stock: 20,
    title: "Geek Vape Max100",
    image: "7.png",
    discount: 0,
    category: "Vegetable",
  },
];

class DataService {
  getCatalog() {
    // some instructions to

    // retrieve data from actual server
    return catalog;
  }
}
export default DataService;
