import React, { createContext, ReactNode, useContext } from "react";

type shoppingcartproviderprops = {
  children: ReactNode;
};

type cItem = {
  id: number;
  qty: number;
};

type shopcartContext = {
  getItemQuality: (id: number) => number;
  increaseCartqty: (id: number) => void;
  drecreaseqty: (id: number) => void;
  Removeqty: (id: number) => void;
  cartQuantityyy: number;
  carditem: cItem[];
};
const ShopingCartContext = createContext({} as shopcartContext);

// console.log(ShopingCartContext);

const LOCAL_STORAGE_KEY = "shoppingApp.shop";

export function ShopingCart() {
  return useContext(ShopingCartContext);
}
export function ShoppingCartPovider({ children }: shoppingcartproviderprops) {
  const [carditem, setCardItem] = React.useState<cItem[]>([]);

  React.useEffect(() => {
    const storecard = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY) as string
    );
    if (storecard) setCardItem(storecard);
  }, []);

  React.useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(carditem));
  }, [carditem]);

  const cartQuantityyy = carditem.reduce((qlty, item) => item.qty + qlty, 0);

  const getItemQuality = (id: number) => {
    return carditem.find((item) => item.id === id)?.qty || 0;
  };

  const increaseCartqty = (id: number) => {
    setCardItem((curritem) => {
      if (carditem.find((item) => item.id === id) == null) {
        return [...curritem, { id, qty: 1 }];
      } else {
        return curritem.map((itm) => {
          if (itm.id === id) {
            return { ...itm, qty: itm.qty + 1 };
          } else {
            return itm;
          }
        });
      }
    });
  };

  const drecreaseqty = (id: number) => {
    setCardItem((curritem) => {
      if (carditem.find((item) => item.id === id)?.qty === 1) {
        return curritem.filter((itm) => itm.id !== id);
      } else {
        return curritem.map((itm) => {
          if (itm.id === id) {
            return { ...itm, qty: itm.qty - 1 };
          } else {
            return itm;
          }
        });
      }
    });
  };

  const Removeqty = (id: number) => {
    setCardItem((currItem) => {
      return currItem.filter((itm) => itm.id !== id);
    });
  };

  return (
    <ShopingCartContext.Provider
      value={{
        getItemQuality,
        increaseCartqty,
        drecreaseqty,
        Removeqty,
        cartQuantityyy,
        carditem,
      }}
    >
      {children}
    </ShopingCartContext.Provider>
  );
}
