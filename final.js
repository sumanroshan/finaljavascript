let api = document.querySelector(".api");

api.innerHTML = "Loading...";

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {

        api.innerHTML = "<h2>Products Loaded Successfully!</h2>";

        products.forEach(product => {

            let card = document.createElement("div");

            card.innerHTML = `
                <h2>Product ID: ${product.id}</h2>

                <h3>${product.title.slice(0, 50)}</h3>

                <p>Price: $${product.price}</p>

                <p>${product.description.slice(0, 100)}</p>

                <img src="${product.image}" width="200px">
            `;

            card.className = "card";

            api.appendChild(card);

        });

    })
    .catch(error => {
        api.innerHTML = `
            <p style="color: red;">Error loading products!</p>
        `;
    })
    .finally(() => {
        console.log("API request completed");
    });