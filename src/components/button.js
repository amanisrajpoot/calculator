

function Button({symbol,operation}) {
  return (
    <div className="button" onClick={()=>operation()}>
        {symbol}
    </div>
  );
}

export default Button;
