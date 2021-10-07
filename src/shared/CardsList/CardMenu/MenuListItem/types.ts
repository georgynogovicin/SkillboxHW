import React from "react";

export type ListItem = {
  id: string;
  label: string;
  icon?: React.ReactNode;
  showOnMobile?: boolean;
  onClick?: () => void;
}