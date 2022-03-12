export default function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}


function getCookie2(cookie, name) {
  const q = {};
  cookie
    ?.replace(/\s/g, "")
    .split(";")
    .map((i) => i.split("="))
    .forEach(([key, value]) => {
      q[key] = value;
    });
  return q[name] ?? null;
}