const form = document.getElementById("ticketForm");
const tableBody = document.getElementById("ticketTable").getElementsByTagName("tbody")[0];

form.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent page reload

    // Get form values
    const name = document.getElementById("name").value;
    const problem = document.getElementById("problem").value;

    // Create new row
    const newRow = tableBody.insertRow();
    const nameCell = newRow.insertCell(0);
    const problemCell = newRow.insertCell(1);

    nameCell.textContent = name;
    problemCell.textContent = problem;

    // Clear form fields
    form.reset();
});
