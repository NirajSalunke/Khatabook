const express = require("express");
const app = express();
const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  fs.readdir("files", (err, files) => {
    // const files = ["16-8-2024.txt", "17-8-2024.txt"];
    const dates = files.map((file) => file.replace(".txt", ""));
    // console.log(dates);
    res.render("index", { fileNames: dates });
  });
});

app.get("/create", (req, res) => {
  const data = req.body.khata;
  const currentDate = new Date();

  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  //   console.log(`${day}-${month}-${year}`);
  const fileName = `${day}-${month}-${year}`;
  res.render("create", { message: fileName });
});
app.post("/create", (req, res) => {
  const data = req.body.khata;
  const currentDate = new Date();

  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  //   console.log(`${day}-${month}-${year}`);
  const fileName = `${day}-${month}-${year}`;
  //   console.log(data);
  fs.writeFile(`./files/${fileName}.txt`, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      // console.log("File created successfully");
      res.redirect("/");
      //   alert("Created Successfully");
    }
  });
});

app.get("/edit/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  fs.readFile(`./files/${fileName}.txt`, "utf8", (err, data) => {
    if (err) {
      res.send(err);
    } else {
      // console.log(data);
      res.render("edit", { textData: data, message: fileName });
    }
  });
});

app.post("/edit/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  const data = req.body.khata;
  // console.log(data);

  fs.writeFile(`./files/${fileName}.txt`, data, (err) => {
    if (err) {
      // console.log(err);
      res.send("something went wrong try again");
    } else {
      // console.log("File updated succesfully");
      res.redirect("/");
    }
  });
});

app.get("/delete/:fileName", (req, res) => {
  // res.send(req.params.fileName);
  const fileName = req.params.fileName;
  // fileName.slice(0, 4);
  // const data = fileName.slice(0, fileName.length - 4);
  // console.log(data);
  res.render("delete", { fileN: fileName });
  // res.send(data);
});

app.post("/delete/:fileName", (req, res) => {
  const fileName = `${req.params.fileName}.txt`;

  fs.unlink(`./files/${fileName}`, (err) => {
    if (err) {
      res.send("Something got wrong try again");
    } else {
      // console.log("Files Deleted Succesfully");
      res.redirect("/");
    }
  });
});
app.listen(3000);
