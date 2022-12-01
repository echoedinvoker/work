const fs = require("fs");

const accounts = JSON.parse(
  fs.readFileSync(`${__dirname}/account.json`, "utf-8")
);
const store = JSON.parse(fs.readFileSync(`${__dirname}/store.json`, "utf-8"));
const logs = JSON.parse(fs.readFileSync(`${__dirname}/log.json`, "utf-8"));
const permissions = JSON.parse(
  fs.readFileSync(`${__dirname}/permissions.json`, "utf-8") // permissions.json is defined by dukelo
);

// Get specific account by input userId
const inputMail = "mattchang@iotnet.com.tw"; // maybe user login input
const rawAccount = accounts.find((acc) => acc.userId === inputMail);

// Get user permission
const [permission] = [...new Map(Object.entries(permissions))].find((el) =>
  el[1].find((el) => el === inputMail)
);
const account = { permission, ...rawAccount };

// Superuser
if (account.permission === "superuser") {
  console.log("I am Superuser!");
}

// Leader

if (account.permission === "leader") {
  console.log("I am Leader!");
  // All group user signin situation
  // All group user execution situation
  // ALl group user upload situation(but if user edit a lot, upload numbers make no sense, but calculate)
  // no need to split data, only need to filter raw data to fit permission

  // All group user skills(more sense than upload) in store(need to include some other informations:
  // like used number and not limit to group only,
  // first uploaded time)
  // no need to split data, only need to filter raw data to fit permission

  // filter raw json data to fit permssion, don't think the meaning of data here.
}

// Member

if (account.permission === "member") {
  console.log("I am Member!");
}
