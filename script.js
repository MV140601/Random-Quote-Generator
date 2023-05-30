const btnel = document.getElementById("btn")
const quoteel = document.getElementById("quote")
const authorel = document.getElementById("author")

const apiurl = "https://api.quotable.io/random"

async function getquote() {
  try {
    quoteel.innerText = "LOADING YOUR QUOTE ....";
    authorel.innerText = "Loading....";
    btnel.disabled = true;
    const response = await fetch(apiurl);
    const data = await response.json();
    const quotecontent = data.content;
    const authorname = data.author;
    quoteel.innerText = quotecontent;
    authorel.innerText = "~" + authorname;
    btnel.disabled = false;
  } catch (error) {
    console.log(error)
    quoteel.innerText = "an error occured please try again later";

  }

}
btnel.addEventListener("click", getquote)