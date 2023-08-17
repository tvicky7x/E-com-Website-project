import React, { useState } from "react";

const Context = React.createContext({
  Cart: false,
  openCart: () => {},
  closeCart: () => {},
  List: [],
  Merchandise: [],
  CartList: [],
  addCart: () => {},
  removeCart: () => {},
  changeCart: () => {},
});

export function ContextProvider(props) {
  const List = [
    {
      item: "Stereo Hearts",
      id: "Stereo Hearts",
      url: "https://c.saavncdn.com/947/Stereo-Hearts-feat-Adam-Levine--English-2011-20190607045815-500x500.jpg",
      price: "150",
    },
    {
      item: "The Nights",
      id: "The Nights",
      url: "https://c.saavncdn.com/184/The-Nights-Avicii-By-Avicii-English-2015-500x500.jpg",
      price: "178",
    },
    {
      item: "Rise",
      id: "Rise",
      url: "https://c.saavncdn.com/750/Rise-English-2018-20180523230337-500x500.jpg",
      price: "128",
    },
    {
      item: "Me, Myself & I",
      id: "Me, Myself & I",
      url: "https://c.saavncdn.com/473/When-It-s-Dark-Out-English-2015-500x500.jpg",
      price: "195",
    },
  ];

  const Merchandise = [
    {
      item: "Love it Cup",
      id: "Love it Cup",
      url: "https://c1.wallpaperflare.com/preview/906/25/252/coffee-drink-cafe-cup.jpg",
      price: "75",
    },
    {
      item: "Legendary T-shirt",
      id: "Legendary T-shirt",
      url: "https://c1.wallpaperflare.com/preview/428/266/566/title-photo-logo-shirt.jpg",
      price: "250",
    },
    {
      item: "Cool Grocery Bag",
      id: "Cool Grocery Bag",
      url: "https://img.freepik.com/premium-photo/mockup-reusable-grocery-bags-with-print-form-large-black-peas-green-leaf-white-isol_248570-2576.jpg?w=360",
      price: "100",
    },
    {
      item: "Premium Bottles",
      id: "Premium Bottles",
      url: "https://mockuptree.com/wp-content/uploads/edd/2021/01/Free_Bottle_Mockups-e1610718967677.jpg",
      price: "395",
    },
  ];

  const [CartList, setCartList] = useState([]);
  const [Cart, setCart] = useState(false);

  function openCart() {
    setCart(true);
  }

  function closeCart() {
    setCart(false);
  }

  function addCart(data) {
    if (
      CartList.every((item) => {
        return item.id !== data.id;
      })
    ) {
      setCartList((oldCart) => {
        data.quantity = 1;
        return [...oldCart, data];
      });
    }
  }

  function removeCart(id) {
    setCartList((oldCart) => {
      return oldCart.filter((item) => {
        return item.id !== id;
      });
    });
  }

  function changeCart(id, value) {
    let newCartData = CartList.map((item) => {
      if (item.id === id) {
        let Quantity = item.quantity + value;
        if (Quantity > 0) {
          item.quantity = Quantity;
        }
      }
      return item;
    });
    setCartList(newCartData);
  }

  return (
    <Context.Provider
      value={{
        Cart: Cart,
        openCart: openCart,
        closeCart: closeCart,
        List: List,
        Merchandise: Merchandise,
        CartList: CartList,
        addCart: addCart,
        removeCart: removeCart,
        changeCart: changeCart,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default Context;
