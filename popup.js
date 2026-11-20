
// ==========================================
// POPUP INFORMATION JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // GET POPUP ELEMENTS

    const modalContainer = document.getElementById("modalContainer");
    const modalBox = document.getElementById("modalBox");

    const modalSymbol = document.getElementById("modalSymbol");
    const modalName = document.getElementById("modalName");
    const modalAtomicNumber = document.getElementById("modalAtomicNumber");

    const modalInfo = document.getElementById("modalInfo");

    const closeModal = document.getElementById("closeModal");

    // GET ALL PERIODIC TABLE ELEMENTS

    const elements = document.querySelectorAll(".element");


    // ==========================================
    // OPEN POPUP
    // ==========================================

    function openPopup(element) {

        const number = element.dataset.number;
        const symbol = element.dataset.symbol;
        const name = element.dataset.name;

        const category = element.dataset.category;
        const group = element.dataset.group;
        const period = element.dataset.period;

        // DISPLAY ELEMENT INFORMATION

        modalSymbol.textContent = symbol;
        modalName.textContent = name;

        modalAtomicNumber.textContent =
            "Atomic Number: " + number;

        // DISPLAY POPUP DETAILS

        modalInfo.innerHTML = `

            <h3>Element Information</h3>

            <p>
                <strong>Symbol:</strong>
                ${symbol}
            </p>

            <p>
                <strong>Name:</strong>
                ${name}
            </p>

            <p>
                <strong>Atomic Number:</strong>
                ${number}
            </p>

            <p>
                <strong>Category:</strong>
                ${category}
            </p>

            <p>
                <strong>Group:</strong>
                ${group}
            </p>

            <p>
                <strong>Period:</strong>
                ${period}
            </p>

            <h3>About ${name}</h3>

            <p>
                ${getDescription(number, name, category)}
            </p>

        `;

        // SHOW POPUP

        modalContainer.classList.add("active");

        // PREVENT BACKGROUND SCROLLING

        document.body.style.overflow = "hidden";
    }


    // ==========================================
    // ELEMENT DESCRIPTIONS
    // ==========================================

    function getDescription(number, name, category) {

        const descriptions = {

            1: "Hydrogen is the lightest and most abundant element in the universe. It is a colorless and odorless gas.",

            2: "Helium is a colorless, odorless, and very light gas. It is commonly used in balloons.",

            3: "Lithium is a soft, silvery metal commonly used in rechargeable batteries.",

            4: "Beryllium is a lightweight metal used in aerospace materials.",

            5: "Boron is a metalloid used in glass, ceramics, and other materials.",

            6: "Carbon is an important element found in living organisms and many materials.",

            7: "Nitrogen is a colorless gas that makes up most of Earth's atmosphere.",

            8: "Oxygen is a gas essential for respiration and supports combustion.",

            9: "Fluorine is a highly reactive element belonging to the halogen family.",

            10: "Neon is a noble gas known for its use in brightly colored signs.",

            11: "Sodium is a soft metal that reacts readily with water.",

            12: "Magnesium is a lightweight metal used in alloys and various products.",

            13: "Aluminium is a lightweight metal used in packaging and construction.",

            14: "Silicon is a metalloid commonly used in computer chips and electronic devices.",

            15: "Phosphorus is an element important in biological systems and fertilizers.",

            16: "Sulfur is a yellow nonmetal used in many industrial processes.",

            17: "Chlorine is a halogen used in water treatment and chemical production.",

            18: "Argon is an inert gas commonly used in lighting and welding.",

            26: "Iron is a widely used metal and an important component of steel.",

            29: "Copper is a metal known for its excellent electrical and thermal conductivity.",

            47: "Silver is a precious metal with excellent electrical conductivity.",

            79: "Gold is a precious metal valued for its resistance to corrosion and its use in jewelry and electronics.",

            80: "Mercury is a metal that is liquid at room temperature.",

            92: "Uranium is a naturally occurring radioactive element."

        };

        return descriptions[number] ||
            name + " is classified as a " +
            category.toLowerCase() +
            ". It is one of the chemical elements found in the periodic table.";
    }


    // ==========================================
    // CLOSE POPUP
    // ==========================================

    function closePopup() {

        modalContainer.classList.remove("active");

        // RESTORE BACKGROUND SCROLLING

        document.body.style.overflow = "";
    }


    // ==========================================
    // CLICK ELEMENT TO OPEN POPUP
    // ==========================================

    elements.forEach(function (element) {

        element.addEventListener("click", function () {

            openPopup(element);

        });

    });


    // ==========================================
    // CLICK X BUTTON TO CLOSE
    // ==========================================

    closeModal.addEventListener("click", function () {

        closePopup();

    });


    // ==========================================
    // CLICK OUTSIDE POPUP TO CLOSE
    // ==========================================

    modalContainer.addEventListener("click", function (event) {

        // Close only when the overlay is clicked.
        // Clicking inside the popup will not close it.

        if (event.target === modalContainer) {

            closePopup();

        }

    });


    // ==========================================
    // ESCAPE KEY TO CLOSE
    // ==========================================

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            closePopup();

        }

    });

});