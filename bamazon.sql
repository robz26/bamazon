CREATE DATABASE IF NOT EXISTS bamazon;

USE bamazon;

CREATE TABLE IF NOT EXISTS products (
    item_id INT AUTO_INCREMENT NOT NULL
    , product_name VARCHAR(200)
    , department_name VARCHAR(50)
    , price DEC (10,2)
    , stock_quantity INT (10)
    , PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Totally Never Eaten 13.5-PC Set McNuggets","Food", 3.38, 1);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Vintage Potatoes","Decorative Food", 13.75, 1231);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Batman BatCave Toilet Seat Cover","Other", 12.45, 17);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("SnapChat Dog Filter Face Mask","Basic Costumes", 9.99, 156);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Brawndo the Thirst Multilator","Plants", 2.99, 5455);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Real Fake Master Sword Replica","Decorative Weaponry", 475.95, 3);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Skull of Gul'dan","Demonology Accessories", 20.02, 2);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Blinker Fluid","Automotive", 11.11, 600);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Invisible Cloak","Wizarding Essentials", 149.99, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Plumbus","Plumbi", 6.50, 37);