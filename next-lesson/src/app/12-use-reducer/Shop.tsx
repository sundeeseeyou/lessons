"use client";
import { useReducer } from "react";
import { PRODUCTS, type Product } from "./products";

type CartItem = Product & { qty: number };

type CartAction =
  | { type: "add"; payload: Product }
  | { type: "remove"; id: number }
  | { type: "clear" };

function cartReducer(cart: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "add": {
      const inCart = cart.find((item) => item.id === action.payload.id);

      if (inCart) {
        // Sudah ada -> qty +1
        return cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }
      // Belum ada -> tambah baris baru, qty 1
      return [...cart, { ...action.payload, qty: 1 }];
    }

    case "remove": {
      const newCart: CartItem[] = [];

      for (const item of cart) {
        if (item.id === action.id) {
          // barang yang di-klik "−"
          if (item.qty > 1) {
            // qty lebih dari 1 -> kurangi 1, tetap masuk keranjang
            newCart.push({ ...item, qty: item.qty - 1 });
          }
          // qty cuma 1 -> nggak di-push, otomatis hilang
        } else {
          // bukan barang yang di-klik -> masukin apa adanya
          newCart.push(item);
        }
      }

      return newCart;
    }

    case "clear": {
      return [];
    }

    default:
      return cart;
  }
}

export default function Shop() {
  const [cart, dispatch] = useReducer(cartReducer, []);

  // Hitung total harga
  let total = 0;
  for (const item of cart) {
    total = total + item.price * item.qty;
  }

  return (
    <div>
      <h2>Produk</h2>
      {PRODUCTS.map((product) => (
        <div key={product.id}>
          {product.name} - Rp{product.price}
          <button onClick={() => dispatch({ type: "add", payload: product })}>
            Add to cart
          </button>
        </div>
      ))}

      <h2>Cart</h2>
      {cart.length === 0 && <p>Keranjang kosong</p>}
      {cart.map((item) => (
        <div key={item.id}>
          {item.name} × {item.qty}
          <button onClick={() => dispatch({ type: "remove", id: item.id })}>
            −
          </button>
        </div>
      ))}

      <button onClick={() => dispatch({ type: "clear" })}>Empty cart</button>
      <p>Total: Rp{total}</p>
    </div>
  );
}
