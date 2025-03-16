// JavaScript for handling modals (popup windows)

// Get modal elements
var simplificationModal = document.getElementById("simplificationModal");
var complianceModal = document.getElementById("complianceModal");
var draftingModal = document.getElementById("draftingModal");

// Get open modal buttons
var openSimplificationModal = document.getElementById("openSimplificationModal");
var openComplianceModal = document.getElementById("openComplianceModal");
var openDraftingModal = document.getElementById("openDraftingModal");

// Get close buttons
var closeSimplification = document.getElementById("closeSimplification");
var closeCompliance = document.getElementById("closeCompliance");
var closeDrafting = document.getElementById("closeDrafting");

// Open Simplification Modal
openSimplificationModal.onclick = function() {
    simplificationModal.style.display = "block";
}

// Open Compliance Modal
openComplianceModal.onclick = function() {
    complianceModal.style.display = "block";
}

// Open Drafting Modal
openDraftingModal.onclick = function() {
    draftingModal.style.display = "block";
}

// Close Simplification Modal
closeSimplification.onclick = function() {
    simplificationModal.style.display = "none";
}

// Close Compliance Modal
closeCompliance.onclick = function() {
    complianceModal.style.display = "none";
}

// Close Drafting Modal
closeDrafting.onclick = function() {
    draftingModal.style.display = "none";
}

// Close modal if user clicks outside modal content
window.onclick = function(event) {
    if (event.target == simplificationModal) {
        simplificationModal.style.display = "none";
    }
    if (event.target == complianceModal) {
        complianceModal.style.display = "none";
    }
    if (event.target == draftingModal) {
        draftingModal.style.display = "none";
    }
}
