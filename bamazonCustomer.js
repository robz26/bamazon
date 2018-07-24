var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Welcome to Bamazon");
    console.log("-----------------------------------------------------------------");
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(`Product ID:        ${res[i].item_id}`);
            console.log(`Product name:      ${res[i].product_name}`);
            console.log(`Department:        ${res[i].department_name}`);
            console.log(`Price:             $${res[i].price}`);
            console.log(`Stock:             ${res[i].stock_quantity}`);
            console.log("-----------------------------------------------------------------");
        }
        Customer();
    })

})

function Customer() {

    inquirer.prompt([{
        name: "ID",
        type: "input",
        message: "What is the ID of the product you wish to purchase?",
        validate: function (input) {
            return (10 >= input >= 1);
        }
    },
    {
        name: "amount",
        type: "input",
        message: "How many items would you like?"
    }
    ]).then(answers => {

        var product_id = answers.ID;
        connection.query(`SELECT * FROM products WHERE item_id = ?`, [product_id], function (err, res) {
            if (err) throw err;

            if (res[0].stock_quantity - answers.amount < 0) {
                console.log("Not enough items in stock");
                Customer();
            } else {
                var TotalCost = answers.amount * res[0].price;
                var RemainingStock = res[0].stock_quantity - answers.amount;
                connection.query(`UPDATE products SET stock_quantity = ? WHERE item_id = ?`, [RemainingStock, res[0].item_id], function (err, res) {
                    if (err) throw err;
                })
                console.log("-------------- Your Order is Placed --------------");
                console.log(`Total Cost is: ${TotalCost.toFixed(2)}`);
                console.log(`You will recieve: ${answers.amount}x ${res[0].product_name}`);
                console.log("--------------------------------------------------");
                connection.end();
            }

        })
    })

}