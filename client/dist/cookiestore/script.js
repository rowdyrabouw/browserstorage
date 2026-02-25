const setCookieButton = document.querySelector("#setCookie");
setCookieButton.addEventListener("click", async () => {
  const name = document.querySelector("#name").value;
  const value = document.querySelector("#value").value;
  await cookieStore.set(name, value);
  document.querySelector("#data").innerHTML = "Cookie created";
});

const deleteCookieButton = document.querySelector("#deleteCookie");
deleteCookieButton.addEventListener("click", async () => {
  const name = document.querySelector("#name").value;
  await cookieStore.delete(name);
  document.querySelector("#data").innerHTML = "Cookie deleted";
});
