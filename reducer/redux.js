const array = ['Lait', 'Viande', 'Epice'];

// Application de la methode Reduce
// (reducer => (func), Val Init (fac));

array.reduce(reducer, 'Yaourt');

// reducer => (Accumulateur, Val Courante dans le arr)
const reducer = (accum, currVal) => accum + currVal;


const [state, dispatch] = useReducer(reducer, initialArg, init);