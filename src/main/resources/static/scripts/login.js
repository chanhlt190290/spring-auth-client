$(document).ready(function() {
  if (!getUrlParameter("logout")) {
    var form = document.createElement("form");
    var element1 = document.createElement("input");
    var element2 = document.createElement("input");

    element1.style.visibility = "hidden";
    element2.style.visibility = "hidden";

    form.method = "POST";
    form.action = "/login";

    element1.value = getCookie("token");
    element1.name = "username";
    form.appendChild(element1);

    element2.value = getCookie("email");
    element2.name = "password";
    form.appendChild(element2);

    document.body.appendChild(form);

    form.submit();
  } else {
    document.getElementById("loginBtn").style.visibility = "visible";
  }

  $("#loginBtn").click(function() {
    window.location = "/login";
    this.visibility = "hidden";
  });
});

var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split("&"),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split("=");

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
};

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
