import { assets } from "../src/assets/assets";

export const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Hotels', path: '/rooms' },
    { name: 'Contact', path: '/' },
    { name: 'About', path: '/' },
];

export const roomTypes = [
   { name: "Single Bed"},
   { name: "Double Bed"},
   { name: "Luxury Room"},
   { name: "Family Suite"},
]
export const priceRanges = [
    {name: '0 to 500'},
    {name: '500 to 1000'},
    {name: '1000 to 2000'},
    {name: '2000 to 3000'},
]
export const sortOtions = [
    {name: 'Price Low to High'},
    {name: 'Price High to Low'},
    {name: 'Newes First'},
]

export const sidebarLinks = [
    {name: 'Dashboard', path: '/owner', icon: assets.dashboardIcon},     
    {name: 'Add Room', path: '/owner/add-room', icon: assets.addIcon},    
    {name: 'List Room', path: '/owner/list-room', icon: assets.listIcon},    
]
export const footer = [
    {name: 'Home', route: '/'},
    {name: 'About us', route: '/about_us'},
    {name: 'Contact us', route: '/contact_us'},
    {name: 'Privacy policy', route: '/privacy_policy'},

]

export const dashRoom = [
    {name: 'Select Room Type'},
    {name: 'Single Bed'},
    {name: 'Double Bed'},
    {name: 'Luxury Room'},
    {name: 'Single Bed'},    
]