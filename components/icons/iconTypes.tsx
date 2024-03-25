import { ComponentPropsWithoutRef } from "react";

interface Props {
  size?: string;
  height?: string;
  background?: string;
  onClick?: () => void;
}

export type iconType = ComponentPropsWithoutRef<"svg"> & Props;
