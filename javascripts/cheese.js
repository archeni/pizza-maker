import utilities from './components/utilities.js';

let cheesePrinter = () => {
    let cheese = "mozzarella";
    utilities.printToDom("cheese-counter", cheese);
}

export default { cheesePrinter };