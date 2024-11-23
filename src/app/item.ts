export interface Item {
    label: string;
    routerLink: string;
    id?: number;
    // style?: string;
    style?: { [key: string]: string };
    
    
    
    // icon?: string;
    // shortcut?: string;
    // children?: Item[];
    // visible?: boolean;
    // expanded?: boolean;
    // routerLinkActiveOptions?: any;
}
