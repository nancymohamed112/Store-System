let products = [];

function addProduct() {
    let input = document.getElementById("productInput").value;

    if (input === "") {
        alert("Enter product name");
        return;
    }

    products.push(input);
    document.getElementById("productInput").value = "";
    alert("Product Added ✅");
}

function showProducts() {
    let list = document.getElementById("productList");
    list.innerHTML = "";

    for (let i = 0; i < products.length; i++) {
        let li = document.createElement("li");
        li.textContent = products[i];
        list.appendChild(li);
    }
}

function updateProduct() {
    let oldName = prompt("Enter product name to update:");
    let newName = prompt("Enter new name:");

    let index = products.indexOf(oldName);

    if (index !== -1) {
        products[index] = newName;
        alert("Product Updated");
    } else {
        alert("Product not found");
    }
}

function deleteProduct() {
    let name = prompt("Enter product name to delete:");

    let index = products.indexOf(name);

    if (index !== -1) {
        products.splice(index, 1);
        alert("Product Deleted");
    } else {
        alert("Product not found");
    }
}