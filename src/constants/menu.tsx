import {
  ActivityIcon,
  CircleHelpIcon,
  CircleUserIcon,
  HouseIcon,
  LucideIcon,
  LucideProps,
  RocketIcon,
  SettingsIcon,
  UserIcon
} from "lucide-react";
import { v4 as uuid } from "uuid";

type FieldProps = {
  label: string;
  id: string;
};

export type SideBarProps = {
  icon: LucideProps;
} & FieldProps;

export const SIDEBAR_MENU: SideBarProps[] = [
  {
    id: uuid(),
    label: "home",
    icon: <HouseIcon />
  },
  {
    id: uuid(),
    label: "user",
    icon: <UserIcon />
  },
  {
    id: uuid(),
    label: "automations",
    icon: <ActivityIcon />
  },
  {
    id: uuid(),
    label: "integrations",
    icon: <RocketIcon />
  },
  {
    id: uuid(),
    label: "setting",
    icon: <SettingsIcon />
  }
  // {
  //   id: uuid(),
  //   label: "profile",
  //   icon: <CircleUserIcon />
  // },
  // {
  //   id: uuid(),
  //   label: "help",
  //   icon: <CircleHelpIcon />
  // }
];
