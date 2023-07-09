import { useNavigate } from "@solidjs/router";
import { ParentComponent } from "solid-js";

import styles from "./Link.module.css";

type LinkProps = { to: string };

const Link: ParentComponent<LinkProps> = (props) => {
  const navigate = useNavigate();

  return (
    <a class={styles.Link} onClick={() => navigate(props.to)}>
      {props.children}
    </a>
  );
};

export default Link;
