const inpassword = document.querySelector(".password");
const button = document.querySelector("#btn");
const email = document.querySelector(".email");
const url = "http://localhost:3000/recover";
const password = inpassword;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
inpassword.style.display = "none";
button.addEventListener("click", () => {
  if (!emailRegex.test(email.value)) {
    console.log("yes");
    return alert("Please enter a valid email");
  }
  const putmethod = async () => {
    const config = {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: email.value.toLowerCase(),
        password: password.value,
      }),
    };
    const putresponse = await fetch(url, config);
    const response = await putresponse.json();
    console.log(response);
    if (response.message !== null) {
      inpassword.style.display = "block";
    } else {
      const confirmUser = confirm("Account not found\nDo you want to signup?");
      if (confirmUser) {
        window.location.replace("/signup");
      }
    }
  };
  putmethod();
});
