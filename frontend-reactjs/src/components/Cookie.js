export function setCookie(name, value, daysToExpire) {
  const date = new Date();
  date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000); // Calculate expiration time
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`; // Set the cookie
}
export function getCookie(name) {
  const cookieName = `${name}=`;
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.startsWith(cookieName)) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return null;
}
export function clearCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
export function checkLogin() {
  const cookie = getCookie("user");
  if (cookie != null) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
}
