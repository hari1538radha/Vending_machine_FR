import React, { useState } from "react";
import "./itemcard.css";

//redux
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../../Store/Slice/OrderSlice";

function ItemCard({ props }) {
  const [onClickStyle, setStyle] = useState({});
  const dispatch=useDispatch()

  const onClickHandler = () => {
    if (onClickStyle.transform === undefined) {
      setStyle({ transform: "rotateY(180deg)" });
    } else {
      setStyle({});
    }
  };

  const addToCart=(itemId)=>{
    dispatch(addItem(itemId))
  }

  return (
    <div
      className="flip-card w-[18vw] h-[150px] m-1"
      onClick={()=>{addToCart(props.Id)}}
    >
      <div className="flip-card-inner" style={onClickStyle} onClick={()=>{onClickHandler()}}>
        <div className="flip-card-front bg-green-100 items-center rounded-xl ">
          <div className="absolute top-[-3%] left-[85%] bg-blue-700 px-[3px] rounded-full text-center">
            0
          </div>
          <img src={props.ImageURL} className="title w-[50px] h-[50px]" />
          <p>
            {props.SlotName} <br />
            {props.Price}
          </p>
        </div>
        <div
          className="flip-card-back bg-black text-white rounded-xl items-center"
          onClick={() => {
          }}
        >
          <div>50rs</div>
          <div>3/{props.Quantity}</div>
          <div className="flex items-center">
            <button className="bg-red-500 py-[10px] px-[15px] rounded-md mr-[2px]">
              -
            </button>

            <button className="bg-green-500 py-[10px] px-[15px] rounded-md">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;