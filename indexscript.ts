document.addEventListener("DOMContentLoaded", () => {
    const editableSections = document.querySelectorAll(".editable-section");
    const saveButton = document.getElementById("save-btn") as HTMLButtonElement;
  
    editableSections.forEach((section) => {
      section.addEventListener("focus", () => {
        section.classList.add("editing");
        saveButton.style.display = "inline-block";
      });
  
      section.addEventListener("blur", () => {
        section.classList.remove("editing");
      });
  
      section.addEventListener("input", () => {
        saveButton.disabled = false;
      });
    });
  
    saveButton.addEventListener("click", () => {
      saveChanges();
      saveButton.style.display = "none"; 
    });
  
    function saveChanges() {
      editableSections.forEach((section) => {
        const sectionId = section.id;
        const sectionContent = section.innerHTML;
  
        localStorage.setItem(sectionId, sectionContent);
        console.log(`Saved ${sectionId}:`, sectionContent);
      });
  
      alert("Changes saved successfully!");
    }
  
    // Load the saved content from localStorage if available
    editableSections.forEach((section) => {
      const savedContent = localStorage.getItem(section.id);
      if (savedContent) {
        section.innerHTML = savedContent;
      }
    });
  });