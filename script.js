const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


// Question 1

const cat = {
    firstName: "Cat",
    age: "10",
    complain: function () {
        console.log("Meow!");
    }
};
cat.complain();

// Question 2

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Question 3

heading.style.fontSize = "2em";

//Question 4

heading.classList.add("subheading");

//Question 5

const allP = document.querySelectorAll("p");
for (let i = 0; i < allP.length; i++) {
    allP[i].style.color = "red";
}

//Question 6

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";

//Question 7

function catsList(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }

}
catsList(cats);

//Question 8

const catContainer = document.querySelector(".cat-container");

function createCats(cats) {
    for (let i = 0; i < cats.length; i++) {

        if (!cats[i].age) {
            cats[i].age = "Age unknown";
        }

        catContainer.innerHTML += "<div>" + "<h3>" + cats[i].name + "</h3>" + "<p>" + cats[i].age + "</p>" + "</div>";
    }
}
createCats(cats);





