// Project
import { Product } from './products.model';

export const PRODUCTS: Product[] = [
  { id: 1, name: 'Packages', imgUrl: '../../../assets/icons/box.png', routerLink: '/package' },
  { id: 2, name: 'Furnitures', imgUrl: '../../../assets/icons/lamp.png', routerLink: '/furniture' },
  { id: 3, name: 'Appliances', imgUrl: '../../../assets/icons/washing-machine.png', routerLink: '/appliance' },
  { id: 4, name: 'Electronics', imgUrl: '../../../assets/icons/television.png', routerLink: '/electronic' },
  { id: 5, name: 'Fitness', imgUrl: '../../../assets/icons/treadmill.png', routerLink: '/fitness' },
  { id: 5, name: 'WFH Essentials', imgUrl: '../../../assets/icons/table.png', routerLink: '/wfh' },
  { id: 5, name: 'Miscellaneous', imgUrl: '../../../assets/icons/add.png', routerLink: '/miscellaneous' },
];
