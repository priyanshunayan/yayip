async function handle(e) {
  console.log(e.keyCode);
  if (e.keyCode === 13) {
    let base_url = "https://yayip.herokuapp.com/?url=";
    const value = document.getElementById("domain").value;
    const url = base_url + value;
    let respose = await fetch(url);
    if (respose.ok) {
      // if HTTP-status is 200-299
      // get the response body (the method explained below)
      let json = await respose.json();
      console.log(json.ip[0]);
      document.getElementById("ip").innerHTML = json.ip[0];
    } else {
      alert("HTTP-Error: " + respose.status + "\n Please try again :) ");
    }
    console.log("Enter was pressed");
  }
  // alert("hey there");
  // document.getElementById("ip").innerHTML = "";
}
