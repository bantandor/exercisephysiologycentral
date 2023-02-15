let itemIds = ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8"];
let dropBoxIds = ["dropbox1", "dropbox2", "dropbox3", "dropbox4", "dropbox5", "dropbox6", "dropbox7", "dropbox8"];
let resultDiv = document.getElementById("result");
let itemContainer = document.getElementsByClassName("items-container")[0];
let originalPositions = {};

for (let i = 0; i < itemIds.length; i++) {
    let item = document.getElementById(itemIds[i]);
    originalPositions[itemIds[i]] = item.nextSibling;
    item.addEventListener("dragstart", function(event) {
        event.dataTransfer.setData("text", event.target.id);
    });
}

for (let i = 0; i < dropBoxIds.length; i++) {
  let dropbox = document.getElementById(dropBoxIds[i]);
  dropbox.addEventListener("dragover", function(event) {
      event.preventDefault();
  });
  dropbox.addEventListener("drop", function(event) {
    event.preventDefault();
    let id = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(id));
    if (itemIds.indexOf(id) === dropBoxIds.indexOf(event.target.id)) {
        resultDiv.innerHTML = "Correct";
        resultDiv.style.color = "green";
        document.getElementById(id).style.color = "#3A1807";
        event.target.style.backgroundColor = "green";
    } else {
        resultDiv.innerHTML = "Incorrect";
        resultDiv.style.color = "red";
        event.target.style.backgroundColor = "white";
        let item = document.getElementById(id);
        itemContainer.insertBefore(item, originalPositions[id]);
    }
    });
}
