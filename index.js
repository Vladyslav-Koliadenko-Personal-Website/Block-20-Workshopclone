const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
    const rootElement = document.getElementById("root");
    
    // Add an h1 element with text "FREELANCERS"
    const heading = document.createElement("h1");
    heading.textContent = "FREELANCERS";
    rootElement.appendChild(heading);

    // Create an unordered list element
    const userList = document.createElement("ul");

    // Loop through the users array and create li elements
    users.forEach(user => {
        const listItem = document.createElement("li");
        listItem.textContent = `${user.name}, ${user.age}, ${user.occupation}`;
        userList.appendChild(listItem);
    });

    // Append the unordered list to the HTML document
    rootElement.appendChild(userList);
}

// Call the main function
main();
