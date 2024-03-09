
export interface NestedMenuItem {
  title: string;
  link: string;
}

export interface MenuItem {
    title: string;
    link: string;
    nestedMenu: NestedMenuItem[];
  }
  