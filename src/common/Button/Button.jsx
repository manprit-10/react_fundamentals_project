export const Button = function (props) {
    return <button className='button_main' onClick={props.onClick}>{props.name}</button>;
  };
  