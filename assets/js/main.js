var terms = ["Eric Garner", "John Crawford III", "Michael Brown", "Ezell Ford", "Dante Parker", "Michelle Cusseaux", "Laquan McDonald", "Tanisha Anderson", "Akai Gurley", "Tamir Rice", "Rumain Brisbon", "Jerame Reid", "George Mann", "Matthew Ajibade", "Frank Smart", "Natasha McKenna", "Tony Robertson", "Anthony Hill",]; //array of terms to rotate
//not even close to adding all the names :(

function rotateTerm() {
  var ct = $("#rotate").data("term") || 0;
  $("#rotate").data("term", ct == terms.length -1 ? 0 : ct + 1).text(terms[ct]).fadeIn()
              .delay(2000).fadeOut(200, rotateTerm);
}
$(rotateTerm);