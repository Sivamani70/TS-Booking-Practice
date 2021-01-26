import { Solution, BookTicket } from "./main";
/**
 * modify above line in compiled index.js file as below
 * import { Solution, BookTicket } from "./main.js";
 * /{{ vainila Js doesn't support module import without .js extension}}/
 */

const nameElement = document.getElementById("name") as HTMLInputElement;
const idElement = document.getElementById("id") as HTMLInputElement;
const numberElement = document.getElementById(
  "mobileNumber"
) as HTMLInputElement;
const ageElement = document.getElementById("age") as HTMLInputElement;
const cityElement = document.getElementById("cityName") as HTMLInputElement;
const dobElement = document.getElementById("dob") as HTMLInputElement;

document.getElementById("register")?.addEventListener("click", () => {
  const id = idElement.value;
  const name = nameElement.value;
  const number = numberElement.value;
  const age = ageElement.value;
  const dob = dobElement.value;
  const city = cityElement.value;

  if (
    id.length === 0 ||
    name.length === 0 ||
    number.length === 0 ||
    age.length === 0 ||
    dob.length === 0 ||
    city.length === 0
  ) {
    alert("Must specify all detials");
    return;
  }
  const solution = new Solution();
  solution.addCustomer(name, id, number, Number(age), dob, city);
  solution.displayById();
  clearFileds();
});

const clearFileds = () => {
  nameElement.value = "";
  idElement.value = "";
  numberElement.value = "";
  ageElement.value = "";
  dobElement.value = "";
  cityElement.value = "";
};

document.getElementById("bookTicket")?.addEventListener("click", () => {
  document.querySelector("section")?.classList.add("noise");
  document.querySelector(".bookTicket")?.classList.add("book");
});

document.getElementById("cnfrm")?.addEventListener("click", () => {
  const id = document.getElementById("resid") as HTMLInputElement;
  const mobileNumber = document.getElementById(
    "resMobileNumber"
  ) as HTMLInputElement;
  const source = document.getElementById("source") as HTMLInputElement;
  const destintation = document.getElementById(
    "destination"
  ) as HTMLInputElement;
  const doj = document.getElementById("doj") as HTMLInputElement;
  if (
    id.value.length === 0 ||
    mobileNumber.value.length === 0 ||
    source.value.length === 0 ||
    destintation.value.length === 0 ||
    doj.value.length === 0
  ) {
    alert("Enter all fields");
    return;
  }

  const bookTicket = new BookTicket();
  bookTicket.reserveTicket(
    id.value,
    mobileNumber.value,
    source.value,
    destintation.value,
    doj.value,
    new Date().getTime().toString()
  );
  (function () {
    id.value = "";
    mobileNumber.value = "";
    source.value = "";
    destintation.value = "";
    doj.value = "";
  })();

  document.querySelector("section")?.classList.remove("noise");
  document.querySelector(".bookTicket")?.classList.remove("book");
});
