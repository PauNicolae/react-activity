function Button(props) {
   return (
      <button
         onClick={() => alert('You clicked on ' + props.name)}
         className="Button"
      >
         {props.name}
      </button>
   );
}

export default Button;
