$(".save-note").on("click", function() {
  var saveNoteTitle = $(".note-title").val().trim();
  var saveNoteText = $(".note-textarea").val().trim();

  // Using a RegEx Pattern to remove spaces
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  saveNoteTitle = saveNoteTitle.replace(/\s+/g, "").toLowerCase();
  saveNoteText = saveNoteText.replace(/\s+/g, "").toLowerCase();

  // QUESTION: What does $.get do? What are the parameters it is expecting?
  $.get("/api/characters/" + savedNoteText, function(data) {
    console.log(data);
    if (data) {
      $(".note-title").text(data.title);
      $(".note-textarea").text(data.text);
    }
    else {
      $("#name").text("No note was not found.");
    }
  });
});

document.addEventListener("DOMcontentLoaded", () => {
  document.getElementById("btn").addEventListener("click", saveNoteTitle),
  document.getElementById("btn").addEventListener("click", saveNoteText);
}
)