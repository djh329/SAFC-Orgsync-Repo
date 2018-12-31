function generate_guidelines() {
  var links = generate_links(full_guidelines)
  var glines = generate_list(full_guidelines)
  document.getElementById("guidelines").appendChild(links)
  document.getElementById("guidelines").appendChild(glines)
}
