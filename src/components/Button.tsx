import React from 'react';

import { useStateContext } from '../contexts/ContextProvider';

type props ={
  prop:{
  icon: JSX.Element|undefined,
  bgColor: string,
  color: string, 
  bgHoverColor: string,
  size:string, 
  text: string, 
  borderRadius: string, 
  width: number|undefined,
  }
}

// icon, bgColor, color, bgHoverColor, size, text, borderRadius, width 
const Button = ({prop} : props) => {
  const { setIsClicked, initialState } = useStateContext();

  const styles : React.CSSProperties={
    backgroundColor: prop.bgColor,
    color: prop.color, 
    borderRadius: prop.borderRadius,
  }
  return (
    <button
      type="button"
      onClick={() => setIsClicked(initialState)}
      style = {styles}
      className={` text-${prop.size} p-3 w-${prop.width} hover:drop-shadow-xl hover:bg-${prop.bgHoverColor}`}
    >
      {prop.icon} {prop.text}
    </button>
  );
};

export default Button;
