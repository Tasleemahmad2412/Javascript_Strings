const Submitbtn = document.getElementById("submit");

Submitbtn.addEventListener("click", function (e) {
  const text = document.getElementById("text").value;
  const rows = text.split("\n");
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});

// underscore_case
//  first_name
// Some_Variable
//  calculate_AGE
// delayed_departure
