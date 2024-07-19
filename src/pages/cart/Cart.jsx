import React from "react";
import { useCart } from "../../components/CartContex";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, dispatch } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="w-[85%] h-[780px] m-auto mt-[40px]">
      <Link
        to="/"
        className="text-[18px] text-[#0D2612] font-medium mt-[60px] inline-block"
      >
        &larr; Back to Shopping
      </Link>
      <h2 className="text-3xl font-bold mt-[40px] ml-[10px]">SHOPPING CART</h2>
      <div>
        <div className="w-[780px] flex justify-between border-t-2 border-dashed border-[#454444CC] mt-[55px]">
          <span className="flex text-[18px] text-[#0D2612] font-medium ml-[25px] mt-[13px]">
            <p>Product</p>
          </span>
          <span className="flex text-[18px] text-[#0D2612] font-medium mr-[25px] gap-[150px] mt-[13px]">
            <p>Quantity</p>
            <p>Price</p>
          </span>
        </div>
        {cart.length > 0 ? (
          <div className="flex justify-between">
            <div className="w-[780px]">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="w-[100%] flex border-t-2 border-dashed border-[#454444CC] mt-[35px]"
                >
                  <div className="w-[95%] h-[150px] relative flex m-auto mt-[35px]">
                    <button
                      onClick={() =>
                        dispatch({ type: "REMOVE", payload: item })
                      }
                      className="absolute text-[35px] font-normal top-[-23px] left-[-4px] bg-transparent"
                    >
                      &times;
                    </button>
                    <img
                      src={item.image_url}
                      alt={item.product_name}
                      className="w-[150px] h-[150px] absolute object-cover left-[40px]"
                    />
                    <div className="flex border">
                      <div className="absolute flex flex-col left-[230px]">
                        <span className="text-[20px] text-[#0D2612] font-bold">
                          Logitech
                        </span>
                        <span className="text-[18px] text-[#190D26] font-normal mt-[7px]">
                          {item.name}
                        </span>
                        <span className="text-[16px] text-[#190D26] font-light mt-[20px]">
                          <p>Black</p>
                          <p className="text-[#0BA42D]">In stock</p>
                        </span>
                      </div>

                      <div className="absolute left-[470px]">
                        <div className="w-[135px] h-[47px] flex justify-around items-center rounded-[40px] bg-[#F5F5F5] border text-[22px] text-[#0D2612] font-semibold ">
                          <button
                            onClick={() =>
                              dispatch({ type: "DECREMENT", payload: item })
                            }
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() =>
                              dispatch({ type: "INCREMENT", payload: item })
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="absolute right-[0px]">
                        <span className="text-[24px] text-[#0D2612] font-bold ">
                          ${item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-[400px] mt-[-40px]">
              <div>
                <h3 className="text-[32px] text-[#0D2612] font-medium">
                  CART TOTALS
                </h3>
                <div className="w-[100%] flex justify-between border-t-2 border-dashed border-[#454444CC] mt-[26px]">
                  <span className="text-[18px] text-[#0D2612] font-light mt-[37px]">
                    Shipping (3-5 Business Days)
                  </span>
                  <span className="text-[18px] text-[#190D26] font-medium mt-[37px]">
                    Free
                  </span>
                </div>
                <div className="mb-2 flex justify-between mt-[20px]">
                  <span className="text-[18px] text-[#0D2612] font-light">
                    TAX (estimated for the United States (US))
                  </span>
                  <span className="text-[18px] text-[#190D26] font-medium">
                    $0
                  </span>
                </div>
                <div className="mb-2 flex justify-between mt-[20px]">
                  <span className="text-[18px] text-[#0D2612] font-light">
                    Subtotal
                  </span>
                  <span className="text-[18px] text-[#190D26] font-medium">
                    ${total.toFixed(2)}
                  </span>
                </div>
                <div className="mb-2 flex justify-between  border-t-2 border-dashed border-[#454444CC] mt-[25px]">
                  <span className="text-[18px] text-[#0D2612] font-light mt-[30px]">
                    Total
                  </span>
                  <span className="text-[18px] text-[#190D26] font-medium mt-[30px]">
                    ${total.toFixed(2)}
                  </span>
                </div>
                <div className="flex flex-col items-center  mt-[60px]">
                  <button className="w-[395px] h-[55px] rounded-[10px] bg-[#0BA42D] text-[18px] text-white font-bold">
                    PROCEED TO CHECKOUT
                  </button>
                  <Link
                    to="/"
                    className="text-[18px] text-[#0D2612] font-semibold mt-[45px]"
                  >
                    &larr; Back to Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-[25px] mt-[20px]">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
