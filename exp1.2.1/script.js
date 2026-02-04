const textarea = document.getElementById("textInput");
const charCount = document.getElementById("charCount");

textarea.addEventListener("input", function () {
  const length = textarea.value.length;
  charCount.textContent = `Characters typed: ${length}`;
});
