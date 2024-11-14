"use client";
import { Button } from "antd";

export function ButtonSolid({
  name,
  className = "",
  onClick = () => {},
  disable = false,
}) {
  return (
    <Button
      disabled={disable}
      onClick={onClick}
      className={className}
      size="middle"
      type="primary"
      rootClassName="solidButton"
    >
      {name}
    </Button>
  );
}

export function ButtonGhost({ name, className = "", onClick = () => {} }) {
  return (
    <Button
      onClick={onClick}
      className={className}
      size="middle"
      variant="filled"
      rootClassName="solidButton"
    >
      {name}
    </Button>
  );
}
