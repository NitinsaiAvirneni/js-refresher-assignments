/**
 * Assignment 10: Modules and Advanced Concepts
 */

// Closures and Module Pattern
const CounterModule = (function() {
    let count = 0; // private variable

    return {
        increment: function() {
            return ++count;
        },

        decrement: function() {
            return --count;
        },

        getValue: function() {
            return count;
        },

        reset: function() {
            count = 0;
            return count;
        }
    };
})();

// Generator functions
function* numberGenerator(start = 0, end = 10) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

// Generator with yield*
function* fibonacciGenerator(n) {
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        yield a;
        [a, b] = [b, a + b];
    }
}

// Symbol usage
const uniqueKey = Symbol('uniqueKey');
const anotherKey = Symbol('anotherKey');

const symbolObject = {
    [uniqueKey]: 'This is a symbol property',
    [anotherKey]: 'Another symbol property',
    regularProperty: 'This is regular'
};

// WeakMap usage
const privateData = new WeakMap();
const obj1 = { name: 'Object 1' };
const obj2 = { name: 'Object 2' };

privateData.set(obj1, { secret: 'Secret data for obj1' });
privateData.set(obj2, { secret: 'Secret data for obj2' });

// WeakSet usage
const visitedObjects = new WeakSet();
visitedObjects.add(obj1);
visitedObjects.add(obj2);

// Proxy usage
const targetObject = { name: 'John', age: 30 };

const proxiedObject = new Proxy(targetObject, {
    get: function(target, property) {
        console.log(`Getting ${property}`);
        return target[prop]()
