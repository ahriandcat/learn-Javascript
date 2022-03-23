const person = [
  {
    id: 2,
    name: "Vuong Do",
    gender: "male",
    age: 22,
    email: "qwerty@gmail.com",
    phone: "0123456789",
  },
  {
    id: 1,
    name: "Do Vuong",
    gender: "male",
    age: 22,
    email: "qwerty@gmail.com",
    phone: "0987654321",
  },
];

function createPerson(person) {
  const $template = $(
    document.querySelector(".person-item-template").content
  ).clone();

  $template.find(".person-id").text(person.id);
  $template.find(".person-fullname").text(person.name);
  $template.find(".person-gender").text(person.gender);
  $template.find(".person-age").text(person.age);
  $template.find(".person-email").text(person.email);
  $template.find(".person-phone").text(person.phone);

  return $template;
}
function createList() {
  const list = person.map(function (person) {
    return createPerson(person);
  });

  return list;
}
function render() {
  const $list = $(".person-list");
  const list = createList();

  $list.append(list);
}

function createNewPerson(id, name, gender, age, email, phone) {
  person.push({
    id,
    name,
    gender,
    age,
    email,
    phone,
  });
  return person[person.length - 1];
}

function handleFormSubmit(e) {
  e.preventDefault();
  const $inputId = $(".input-id");
  const id = $inputId.val().trim();
  const $inputFullName = $(".input-name");
  const name = $inputFullName.val().trim();
  const $inputGender = $(".input-gender");
  const gender = $inputGender.val().trim();
  const $inputAge = $(".input-age");
  const age = $inputAge.val().trim();
  const $inputEmail = $(".input-email");
  const email = $inputEmail.val().trim();
  const $inputPhone = $(".input-phone");
  const phone = $inputPhone.val().trim();
  console.log(id, name, gender, age, email, phone);
  const newPerson = createNewPerson(id, name, gender, age, email, phone);
  const $new = createPerson(newPerson);
  $(".person-list").prepend($new);
  $inputId.val("");
  $inputFullName.val("");
  $inputGender.val("");
  $inputAge.val("");
  $inputEmail.val("");
  $inputPhone.val("");
}

function renderInput() {
  $(".button").on("click", function () {
    $(".add-input").css("display", "block");
    $(".cancel").on("click", function () {
      //   $(".add-input").val("");
      $(".add-input").css("display", "none").val("");
    });
  });
}

$(function () {
  $(".form").on("submit", handleFormSubmit);
  render();
  renderInput();
});
