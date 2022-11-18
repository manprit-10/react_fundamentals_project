import { Input } from "../../../../common/Input/Input";
import { Button } from "../../../../common/Button/Button";
export const SearchBar = function (props) {
  return (
    <div>
      <Input onChange={props.onChange} type="text" />
      <Button onClick={props.onClick} name="Search" />
    </div>
  );
};
