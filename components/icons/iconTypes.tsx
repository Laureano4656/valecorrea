import { ComponentPropsWithoutRef } from "react";

interface Props {
  size?: string;
  height?: string;
  background?: string;
}

export type iconType = ComponentPropsWithoutRef<"svg"> & Props;
