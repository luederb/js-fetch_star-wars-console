console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  console.log(data.count);
  console.log(`data: ${data} \ncount: ${data.count} \nnext: ${data.next}`);
  console.log(
    "data: ",
    data,
    "\ncount: ",
    data.count,
    "\nnext: ",
    data.next,
    "\ncolor of R2-D2's eye: ",
    data.results[2].eye_color
  );
}

fetchData();
