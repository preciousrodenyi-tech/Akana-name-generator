document.getElementById("akanaForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Retrieve input values
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = document.getElementById("year").value;
    const gender = document.getElementById("gender").value;

    // Validation
    if (day < 1 || day > 31) {
        alert("Day must be between 1 and 31");
        return;
    }
    if (month < 1 || month > 12) {
        alert("Month must be between 1 and 12");
        return;
    }
    if (!gender) {
        alert("Please select a gender");
        return;
    }

    // Split year into CC and YY
    const CC = parseInt(year.substring(0, 2));
    const YY = parseInt(year.substring(2, 4));

    // Formula
    const d = ((4 * CC - 2 * CC - 1) + (45 * YY) + (1026 * (month + 1)) + day) % 7;

    // Day of week mapping
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Akan names
    const maleNames = ["Matthew", "James", "Caleb", "Mark", "John", "Peter", "Luke"];
    const femaleNames = ["Ann", "Joan", "Damaris", "Grace", "Faith", "Precious", "Alicia"];

    const dayName = days[d];
    const akanName = gender === "male" ? maleNames[d] : femaleNames[d];

    // Display result
    document.getElementById("result").textContent =
        `You were born on a ${dayName}. Your Akan name is ${akanName}.`;
});
