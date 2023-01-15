// validation script here
const reg = / [a-z] /gi;

// Second way to create a Regular Expression
// const reg2 = new RegExp(/ [a-z] /,"gi");

// ---------------------------------------

// All inputs
const inputs = document.querySelectorAll("input");
// console.log(inputs)

const patterns = {
  telephone: /^\d{11}$/,
  username: /^[a-z\d]{5,12}$/i,
  password:/^[\w@-]{8,20}$/,
  slug:/^[a-z\d-]{8,20}$/,
  email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

// validate
const validate = (field, regex) => {
  // console.log(regex.test(field.value));
  console.log(field.className);
  if (regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    // console.log(patterns[e.target.name])
    // console.log('key pressed : ', e.key , e.target.name)
    validate(e.target, patterns[e.target.name]);
  });
});
