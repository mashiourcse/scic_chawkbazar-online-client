import React, { useState } from "react";
import "./ToogleSwitch.css";

function ToggleSwitch() {
  const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => setIsToggled(!isToggled);

  let x = "Pending";

  if(isToggled)
    x = "Approved";
  return (
    <div>
  <label className="toggle-switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="switch" />

      
    </label>
    <p>{x}</p>
    </div>
  );
}
export default ToggleSwitch;
