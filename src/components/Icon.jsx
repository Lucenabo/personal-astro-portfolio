import React from "react";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

const iconSets = {
  fa: FaIcons,
  si: SiIcons,
};

const Icon = ({
  name,
  set = "si",
  size = 32,
  color = "currentColor",
  className = "",
}) => {
  const IconComponent = iconSets[set][name];

  if (!IconComponent) {
    console.warn(`Icon ${name} from set ${set} not found`);
    return null;
  }

  return <IconComponent size={size} color={color} className={className} />;
};

export default Icon;
