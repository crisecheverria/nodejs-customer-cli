const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
const db = mongoose.connect(
  "mongodb://crisecheverria:justohot123@ds119018.mlab.com:19018/nodecli",
  { useNewUrlParser: true }
);

// Import model
const Customer = require("./models/customer");

// Add customer
const addCustomer = customer => {
  Customer.create(customer).then(customer => {
    console.info("New Customer Added!");
  });
};

// Update Customer
const updateCustomer = (_id, customer) => {
  Customer.update({ _id }, customer).then(customer => {
    console.info("Customer Updated");
  });
};

// Remove Customer
const removeCustomer = _id => {
  Customer.remove({ _id }).then(customer => {
    console.info("Customer Removed");
  });
};

// List Customers
const listCustomers = () => {
  Customer.find().then(customers => {
    console.info(customers);
    console.info(`${customers.length} matches`);
  });
};

// Find Customer
const findCustomer = name => {
  // Case insensitive
  const search = new RegExp(name, "i");
  Customer.find({
    $or: [{ firstname: search }, { lastname: search }]
  }).then(customer => {
    console.info(customer);
    console.info(`${customer.length}  matches`);
  });
};

// Export All Methods
module.exports = {
  addCustomer,
  findCustomer,
  updateCustomer,
  removeCustomer,
  listCustomers
};
