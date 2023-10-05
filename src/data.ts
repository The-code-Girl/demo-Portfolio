 import expense1 from './assets/expense1.svg'
import food from './assets/food.svg'
import calculator from './assets/calculator.svg'
import piano from './assets/piano.svg'
import search from './assets/search.svg'
import screen from './assets/screen.svg'

interface Project{
  id : number;
  category : number;
  img : string;
  title : string;
}

export const projects : Project[] = [
  {
    id: 0,
    category: 1,
    img: expense1,
    title: "Expense Tracker",
  },
  {
    id: 1,
    category: 1,
    img: food,
    title: "Food Ordering App",
  },
  {
    id: 2,
    category: 1,
    img: calculator,
    title: "Investment Calculator",
  },
  {
    id: 3,
    category: 2,
    img: screen,
    title: "Flex-Panel",
  },
  {
    id: 4,
    category: 2,
    img: search,
    title: "Type Ahead",
  },
  {
    id: 5,
    category: 2,
    img: piano,
    title: "Drum Kit",
  },
];
