// ==========================================
// PERIODIC TABLE JAVASCRIPT
// ==========================================

// Element data:
// Atomic Number | Symbol | Name | Group | Period

const elementData = [
    [1,"H","Hydrogen",1,1],
    [2,"He","Helium",18,1],

    [3,"Li","Lithium",1,2],
    [4,"Be","Beryllium",2,2],
    [5,"B","Boron",13,2],
    [6,"C","Carbon",14,2],
    [7,"N","Nitrogen",15,2],
    [8,"O","Oxygen",16,2],
    [9,"F","Fluorine",17,2],
    [10,"Ne","Neon",18,2],

    [11,"Na","Sodium",1,3],
    [12,"Mg","Magnesium",2,3],
    [13,"Al","Aluminium",13,3],
    [14,"Si","Silicon",14,3],
    [15,"P","Phosphorus",15,3],
    [16,"S","Sulfur",16,3],
    [17,"Cl","Chlorine",17,3],
    [18,"Ar","Argon",18,3],

    [19,"K","Potassium",1,4],
    [20,"Ca","Calcium",2,4],
    [21,"Sc","Scandium",3,4],
    [22,"Ti","Titanium",4,4],
    [23,"V","Vanadium",5,4],
    [24,"Cr","Chromium",6,4],
    [25,"Mn","Manganese",7,4],
    [26,"Fe","Iron",8,4],
    [27,"Co","Cobalt",9,4],
    [28,"Ni","Nickel",10,4],
    [29,"Cu","Copper",11,4],
    [30,"Zn","Zinc",12,4],
    [31,"Ga","Gallium",13,4],
    [32,"Ge","Germanium",14,4],
    [33,"As","Arsenic",15,4],
    [34,"Se","Selenium",16,4],
    [35,"Br","Bromine",17,4],
    [36,"Kr","Krypton",18,4],

    [37,"Rb","Rubidium",1,5],
    [38,"Sr","Strontium",2,5],
    [39,"Y","Yttrium",3,5],
    [40,"Zr","Zirconium",4,5],
    [41,"Nb","Niobium",5,5],
    [42,"Mo","Molybdenum",6,5],
    [43,"Tc","Technetium",7,5],
    [44,"Ru","Ruthenium",8,5],
    [45,"Rh","Rhodium",9,5],
    [46,"Pd","Palladium",10,5],
    [47,"Ag","Silver",11,5],
    [48,"Cd","Cadmium",12,5],
    [49,"In","Indium",13,5],
    [50,"Sn","Tin",14,5],
    [51,"Sb","Antimony",15,5],
    [52,"Te","Tellurium",16,5],
    [53,"I","Iodine",17,5],
    [54,"Xe","Xenon",18,5],

    [55,"Cs","Cesium",1,6],
    [56,"Ba","Barium",2,6],
    [57,"La","Lanthanum",3,6],
    [58,"Ce","Cerium",4,6],
    [59,"Pr","Praseodymium",5,6],
    [60,"Nd","Neodymium",6,6],
    [61,"Pm","Promethium",7,6],
    [62,"Sm","Samarium",8,6],
    [63,"Eu","Europium",9,6],
    [64,"Gd","Gadolinium",10,6],
    [65,"Tb","Terbium",11,6],
    [66,"Dy","Dysprosium",12,6],
    [67,"Ho","Holmium",13,6],
    [68,"Er","Erbium",14,6],
    [69,"Tm","Thulium",15,6],
    [70,"Yb","Ytterbium",16,6],
    [71,"Lu","Lutetium",17,6],
    [72,"Hf","Hafnium",4,6],
    [73,"Ta","Tantalum",5,6],
    [74,"W","Tungsten",6,6],
    [75,"Re","Rhenium",7,6],
    [76,"Os","Osmium",8,6],
    [77,"Ir","Iridium",9,6],
    [78,"Pt","Platinum",10,6],
    [79,"Au","Gold",11,6],
    [80,"Hg","Mercury",12,6],
    [81,"Tl","Thallium",13,6],
    [82,"Pb","Lead",14,6],
    [83,"Bi","Bismuth",15,6],
    [84,"Po","Polonium",16,6],
    [85,"At","Astatine",17,6],
    [86,"Rn","Radon",18,6],

    [87,"Fr","Francium",1,7],
    [88,"Ra","Radium",2,7],
    [89,"Ac","Actinium",3,7],
    [90,"Th","Thorium",4,7],
    [91,"Pa","Protactinium",5,7],
    [92,"U","Uranium",6,7],
    [93,"Np","Neptunium",7,7],
    [94,"Pu","Plutonium",8,7],
    [95,"Am","Americium",9,7],
    [96,"Cm","Curium",10,7],
    [97,"Bk","Berkelium",11,7],
    [98,"Cf","Californium",12,7],
    [99,"Es","Einsteinium",13,7],
    [100,"Fm","Fermium",14,7],
    [101,"Md","Mendelevium",15,7],
    [102,"No","Nobelium",16,7],
    [103,"Lr","Lawrencium",17,7],
    [104,"Rf","Rutherfordium",4,7],
    [105,"Db","Dubnium",5,7],
    [106,"Sg","Seaborgium",6,7],
    [107,"Bh","Bohrium",7,7],
    [108,"Hs","Hassium",8,7],
    [109,"Mt","Meitnerium",9,7],
    [110,"Ds","Darmstadtium",10,7],
    [111,"Rg","Roentgenium",11,7],
    [112,"Cn","Copernicium",12,7],
    [113,"Nh","Nihonium",13,7],
    [114,"Fl","Flerovium",14,7],
    [115,"Mc","Moscovium",15,7],
    [116,"Lv","Livermorium",16,7],
    [117,"Ts","Tennessine",17,7],
    [118,"Og","Oganesson",18,7]
];


// ==========================================
// ELEMENT CATEGORIES
// ==========================================

function getCategory(number) {

    if ([2,10,18,36,54,86,118].includes(number)) {
        return "Noble Gas";
    }

    if ([3,11,19,37,55,87].includes(number)) {
        return "Alkali Metal";
    }

    if ([4,12,20,38,56,88].includes(number)) {
        return "Alkaline Earth Metal";
    }

    if (number >= 57 && number <= 71) {
        return "Lanthanide";
    }

    if (number >= 89 && number <= 103) {
        return "Actinide";
    }

    if ([5,14,32,33,51,52].includes(number)) {
        return "Metalloid";
    }

    if ([9,17,35,53,85,117].includes(number)) {
        return "Halogen";
    }

    if ([1,6,7,8,15,16,34].includes(number)) {
        return "Nonmetal";
    }

    if ([13,31,49,50,81,82,83,84,113,114,115,116].includes(number)) {
        return "Post-Transition Metal";
    }

    if (
        (number >= 21 && number <= 30) ||
        (number >= 39 && number <= 48) ||
        (number >= 72 && number <= 80) ||
        (number >= 104 && number <= 112)
    ) {
        return "Transition Metal";
    }

    return "Unknown";
}


// ==========================================
// CATEGORY CSS CLASSES
// ==========================================

function getCategoryClass(category) {

    const classes = {
        "Alkali Metal": "alkali-metal",
        "Alkaline Earth Metal": "alkaline-earth",
        "Transition Metal": "transition-metal",
        "Post-Transition Metal": "post-transition-metal",
        "Metalloid": "metalloid",
        "Nonmetal": "nonmetal",
        "Halogen": "halogen",
        "Noble Gas": "noble-gas",
        "Lanthanide": "lanthanide",
        "Actinide": "actinide",
        "Unknown": "unknown"
    };

    return classes[category] || "unknown";
}


// ==========================================
// CREATE ELEMENT TILE
// ==========================================

function createElement(element) {

    const [number, symbol, name, group, period] = element;

    const category = getCategory(number);
    const categoryClass = getCategoryClass(category);

    const tile = document.createElement("div");

    tile.classList.add("element", categoryClass);

    tile.dataset.number = number;
    tile.dataset.symbol = symbol;
    tile.dataset.name = name;
    tile.dataset.group = group;
    tile.dataset.period = period;
    tile.dataset.category = category;

    // Position in the main table
    tile.style.gridColumn = group;
    tile.style.gridRow = period;

    // Lanthanides
    if (number >= 58 && number <= 71) {
        tile.style.gridColumn = number - 54;
        tile.style.gridRow = 9;
    }

    // Actinides
    if (number >= 90 && number <= 103) {
        tile.style.gridColumn = number - 86;
        tile.style.gridRow = 10;
    }

    tile.innerHTML = `
        <div class="number">${number}</div>
        <div class="symbol">${symbol}</div>
        <div class="name">${name}</div>
    `;

    return tile;
}


// ==========================================
// GENERATE PERIODIC TABLE
// ==========================================

const displayTable = document.getElementById("displayTable");

elementData.forEach(function(element) {

    const tile = createElement(element);

    displayTable.appendChild(tile);

});


// ==========================================
// ADD CATEGORY LEGEND
// ==========================================

const legendData = [
    ["Alkali Metal", "alkali-metal"],
    ["Alkaline Earth Metal", "alkaline-earth"],
    ["Transition Metal", "transition-metal"],
    ["Post-Transition Metal", "post-transition-metal"],
    ["Metalloid", "metalloid"],
    ["Nonmetal", "nonmetal"],
    ["Halogen", "halogen"],
    ["Noble Gas", "noble-gas"],
    ["Lanthanide", "lanthanide"],
    ["Actinide", "actinide"]
];

const legend = document.createElement("div");

legend.className = "legend";

legendData.forEach(function(item) {

    const legendItem = document.createElement("div");

    legendItem.className = "legendItem";

    legendItem.innerHTML = `
        <div class="legendColor ${item[1]}"></div>
        <span>${item[0]}</span>
    `;

    legend.appendChild(legendItem);

});

document.getElementById("legendContainer").appendChild(legend);