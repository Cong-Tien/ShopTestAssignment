import { useEffect, useState } from "react";
import "./App.css";
import productAPI from "./api/product";

function App() {
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(0);
  const [add, setAdd] = useState("ADD TO CART");
  const [listProduct, setListProduct] = useState([]);
  const [arrCart, setArrCart] = useState([]);

  function calculateTotal(cart) {
    const total = cart.reduce((initPrice, product) => {
      return initPrice + product.price * product.count;
    }, 0);
    return parseFloat(total.toFixed(2));
  }

  useEffect(() => {
    productAPI.getProductList().then((result) => {
      setListProduct(result.data)
    }).catch(err => console.log(err))
    const arrCartStore = JSON.parse(localStorage.getItem("arrCart"));
    arrCartStore && setArrCart(arrCartStore);
  }, []);

  useEffect(() => {
    const total = calculateTotal(arrCart);
    setTotal(total);
    const checked = listProduct.map((item) => {
      if (arrCart.map((item) => item.id).includes(item.id)) {
        return { ...item, checked: true };
      }
      return { ...item, checked: false };
    });
    setListProduct(checked);
    return localStorage.setItem("arrCart", JSON.stringify(arrCart));
  }, [arrCart, count]);

  const increaseCount = (item) => {
    item.count += 1;
    setCount(count + 1);
  };

  const decreaseCount = (item) => {
    if (item.count > 1) {
      item.count -= 1;
      setCount(count - 1);
    }
  };

  const addToCart = (e, item) => {
    document.getElementById(item.id).innerHTML = '<img src="./img/check.png"/>';
    document.getElementById(item.id).disabled = true;
    const updatedItem = { ...item, count: 1, checked: true };
    setArrCart([...arrCart, updatedItem]);
  };

  const deleteCart = (itemCart) => {
    const cartItem = document.getElementById(`cart${itemCart.id}`);
  
  if (cartItem) {
    cartItem.classList.add('fade-out');
    setTimeout(() => {
      const updatedCart = arrCart.filter((item) => item.id !== itemCart.id);
      itemCart.checked = false;
      setArrCart(updatedCart);
    }, 1000);
  }
  };
  return (
    <div className="App">
      <div className="container">
        <div className="content">
          <div className="product">
            <div className="product-content">
              <img src="./img/nike.png" alt="..." />
              <p>Our Product</p>
              <div className="list-item">
                {listProduct?.map((item, index) => {
                  return (
                    <div className="item">
                      <div
                        key={index}
                        style={{ backgroundColor: item.color }}
                        className="item-image"
                      >
                        <img src={item.image} />
                      </div>
                      <p>{item.name}</p>
                      <span>{item.description}</span>
                      <div className="add-to-cart">
                        <span>${item.price}</span>
                        <button
                          id={item.id}
                          onClick={(e) => addToCart(e, item)}
                          disabled={item?.checked}
                        >
                          {item?.checked ? <img src="./img/check.png" /> : add}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="deco"></div>
          </div>
          <div className="cart">
            <div className="cart-content">
              <img src="./img/nike.png" alt="..." />
              <div className="cart-title">
                <p className="title">Your cart</p>
                <p className="total-price">${total}</p>
              </div>
              <div className="list-item">
                {!arrCart.length ? (
                  <p className="empty">Your cart is empty.</p>
                ) : (
                  arrCart?.map((item, index) => {
                    return (
                      <div className="item" id={`cart${item.id}`} key={item.id}>
                        <div
                          style={{ backgroundColor: item.color }}
                          className="item-image"
                        >
                          <img src={item.image} />
                        </div>
                        <div className="cart-info">
                          <p>{item.name}</p>
                          <p>${item.price}</p>
                          <div className="quantity">
                            <div className="action">
                              <button onClick={() => decreaseCount(item)}>
                                -
                              </button>
                              <span>{item.count}</span>
                              <button onClick={() => increaseCount(item)}>
                                +
                              </button>
                            </div>
                            <div className="delete">
                              <button onClick={() => deleteCart(item)}>
                                <img src="./img/trash.png" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
            <div className="deco"></div>
          </div>
        </div>
        <div className="curve"> </div>
      </div>
    </div>
  );
}

export default App;
