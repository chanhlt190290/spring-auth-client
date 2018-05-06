

function logout() {
  var form = document.createElement("form");
  form.method = "POST";
  form.action = "/logout";
  document.body.appendChild(form);
  form.submit();
}

$(document).ready(function() {
  $("#logoutBtn").click(function() {
    // firebase.auth().signOut();
    logout();
  });
});
