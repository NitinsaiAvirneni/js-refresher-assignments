// =================== YOUR CODE STARTS HERE ===================

// TODO 1: Use const and let appropriately
const PI = 3.14159;      // This should never change
let counter = 0;         // This will be reassigned

// TODO 2: Template literals with complex expressions
const user = { name: 'Sarah', age: 28, role: 'developer' };
const currentYear = new Date().getFullYear();

const userInfo = ` 
User Profile:
Name: ${user.name}
Age: ${user.age} (born in ${currentYear - user.age})
Role: ${user.role.toUpperCase()}
Status: ${user.age >= 18 ? 'Adult' : 'Minor'}
`;

// TODO 3: Array destructuring with default values and rest
const scores = [95, 87, 92, 78, 85];
const [highest, second, third = 90, ...remainingScores] = scores;

// TODO 4: Object destructuring with renaming and defaults
const product = {
    id: 'P001',
    title: 'Wireless Headphones',
    price: 199.99,
    category: 'Electronics'
};

const {
    id: productId,
    title: productName,
    price: productPrice,
    category: productCategory,
    rating = 4.5
} = product;

// TODO 5: Nested destructuring
const company = {
    name: 'TechCorp',
    location: {
        country: 'USA',
        city: 'San Francisco',
        address: {
            street: '123 Tech Street',
            zipCode: '94105'
        }
    },
    employees: 150
};

const {
    name: companyName,
    location: {
        city: companyCity,
        address: { street: companyStreet }
    },
    employees: employeeCount
} = company;

// TODO 6: Function with default parameters and rest parameters
function createReport(title, author = 'Unknown Author', ...sections) {
    return {
        title: title,
        author: author,
        sections: sections,
        createdAt: new Date().toISOString(),
        pageCount: sections.length
    };
}

// TODO 7: Arrow functions with different syntaxes
const square = x => x * x;
const add = (a, b) => a + b;
const processData = data => {
    const processed = data.map(item => item * 2);
    return processed;
};

// TODO 8: Spread operator with arrays
const fruits = ['apple', 'banana', 'orange'];
const vegetables = ['carrot', 'broccoli', 'spinach'];
const groceries = [...fruits, 'bread', ...vegetables, 'milk'];

// TODO 9: Spread operator with objects
const baseConfig = {
    theme: 'light',
    fontSize: 14,
    autoSave: true
};

const userConfig = {
    theme: 'dark',
    language: 'spanish'
};

const finalConfig = {
    ...baseConfig,
    ...userConfig,
    lastModified: Date.now()
};

// TODO 10: Enhanced object literals
const name = 'Calculator';
const version = '2.0';
const multiply = (a, b) => a * b;

const calculatorApp = {
    name,                           
    version,                        
    [`created_${Date.now()}`]: true, 

    add(a, b) {
        return a + b;
    },

    multiply,

    ['get' + 'Info']() {
        return `${this.name} v${this.version}`;
    }
};

// TODO 11: Function that uses multiple ES6+ features
function analyzeData(dataset, options = {}) {
    const {
        sortBy = 'value',
        filterMin = 0,
        limit = 10
    } = options;

    return dataset
        .filter(item => item.value >= filterMin)
        .sort((a, b) => {
            return sortBy === 'value' ?
                b.value - a.value :
                a.name.localeCompare(b.name);
        })
        .slice(0, limit)
        .map(({ name, value, ...other }) => ({
            name: name.toUpperCase(),
            value: value,
            hasMetadata: Object.keys(other).length > 0
        }));
}

// TODO 12: Template literal function (tagged template)
function highlight(strings, ...values) {
    return strings.reduce((result, string, i) => {
        const value = values[i] ? `<mark>${values[i]}</mark>` : '';
        return result + string + value;
    }, '');
}
