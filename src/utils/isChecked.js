import { useContext } from "react";
import { ConfiguratorContext } from "../context/configuratorContext";

export default function IsChecked(category, selectIndex) {
  const [context, _] = useContext(ConfiguratorContext);
  if (typeof category == "string") {
    if (context[category]["selected"] == selectIndex) {
      return true;
    } else return false;
  } else {
    if (context[category[0]]["options"][context[category[0]]["selected"]][category[1]]["selected"] == selectIndex) {
      return true;
    } else return false;
  }
}
