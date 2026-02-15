const form = document.getElementById("ticketForm");
const tableBody = document.querySelector("#ticketTable tbody");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const problem = document.getElementById("problem").value.trim();

    if (!name || !problem) return;

    addTicket(name, problem);

    form.reset();
});

function addTicket(name, problem) {

    const row = document.createElement("tr");

    // Name cell
    const nameCell = document.createElement("td");
    nameCell.textContent = name;

    // Problem cell
    const problemCell = document.createElement("td");
    problemCell.textContent = problem;

    // Status cell
    const statusCell = document.createElement("td");
    statusCell.textContent = "Open";
    statusCell.classList.add("status-open");

    // Actions cell
    const actionCell = document.createElement("td");

    // Toggle button
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Close";
    toggleBtn.classList.add("action-btn", "toggle-btn");

    toggleBtn.addEventListener("click", function() {
        if (statusCell.textContent === "Open") {
            statusCell.textContent = "Closed";
            statusCell.classList.remove("status-open");
            statusCell.classList.add("status-closed");
            toggleBtn.textContent = "Reopen";
        } else {
            statusCell.textContent = "Open";
            statusCell.classList.remove("status-closed");
            statusCell.classList.add("status-open");
            toggleBtn.textContent = "Close";
        }
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("action-btn", "delete-btn");

    deleteBtn.addEventListener("click", function() {
        row.remove();
    });

    actionCell.appendChild(toggleBtn);
    actionCell.appendChild(deleteBtn);

    row.appendChild(nameCell);
    row.appendChild(problemCell);
    row.appendChild(statusCell);
    row.appendChild(actionCell);

    tableBody.appendChild(row);
}