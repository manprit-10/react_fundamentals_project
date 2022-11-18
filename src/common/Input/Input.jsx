import '../common.css'

export const Input = function (props) {
    return (
      <input placeholder={props.placeholder} className="input_main" type={props.type} name={props.name} onChange={props.onChange}>
        {props.children}
      </input>
    );
  };
  