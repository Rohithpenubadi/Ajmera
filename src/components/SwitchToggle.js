import Switch from "react-switch";
export const SwitchToggle = ({ checked, onChange }) => {
  return (
    <Switch
      checked={checked}
      onChange={onChange}
      offColor="#000"
      onColor="#fff"
      offHandleColor="#fff"
      onHandleColor="#000"
      checkedIcon={""}
      uncheckedIcon={""}
    />
  );
};
