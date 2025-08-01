import React from 'react';
interface MenuItemProps {
    id: string;
    label: string;
    icon: string;
    active?: boolean;
    isOpen: boolean;
}
export declare const MenuItem: React.FC<MenuItemProps>;
export {};
