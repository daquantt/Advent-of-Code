const userInput = document.querySelector("#user-input");
const result = document.querySelector("#result1");
const result2 = document.querySelector("#result2");
const submit = document.querySelector("#submit-button");
const clear = document.querySelector("#clear-button");

const root = [{ name: "root", type: "folder", totalSize: 0, size: 0, children: [] }];

submit.addEventListener("click", () => {
  //split on double line to get start stack and reorder procedure
  let inputArray = userInput.value.split(/\n/);
  console.log(inputArray);

  let currentFolder = root;
  let previousFolder = root;

  inputArray.forEach((item) => {
    //change directory to root
    if (item === "$ cd /") {
      currentFolder = root;
      previousFolder = root;
    }

    //change directory to move in 1 level eg. $ cd a
    if (item.match(/\$\scd\s\w/)) {
      //get directory letter and set currentFolder as directory
      let directory = item.replace("$ cd ", "");
      console.log("cd into " + directory);
      //change folder
      currentFolder = currentFolder[directory];
      console.log("curr dir ", currentFolder);
    }

    //change directory to previous directory eg. $ cd ..
    if (item.match(/\$\scd\s\.\./)) {
      console.log("cd out 1 level");
      //change folder by setting currentFolder to its parent key
      currentFolder = currentFolder.parent;
      console.log("current folder is ", currentFolder);
    }

    //create folders
    if (item.match(/dir\s\w/)) {
      let folderName = item.replace("dir ", "");
      //set prev folder as curr folder to store as parent key
      previousFolder = currentFolder;
      //in curr folder.children create new folder with folderName, type, parent
      console.log(currentFolder[0].children);
      currentFolder[0].children[folderName] = { name: folderName, type: "folder", parent: previousFolder, totalSize: 0, size: 0, children: [] };
      console.log("createfolder " + folderName);
    }

    //create files
    if (item.match(/^\d+/)) {
      //get file name and size
      const sizeAndFilename = item.split(" ");
      const fileName = sizeAndFilename[1];
      const size = Number(sizeAndFilename[0]);
      // console.log(fileName, size);
      //create file in current folder
      currentFolder[fileName] = { name: fileName, type: "file", size: size };
      console.log(currentFolder[[fileName]]);
    }
  });
  // result.innerText = `Result = ${message.join("")}`;

  //Part Two

  // result2.innerText = `Result = ${message2.join("")}`;
  console.log(root);
});

clear.addEventListener("click", () => {
  userInput.value = "";
});

// let currentFolder = root;
// for (const { command, path } of userInput) {
//     if (command === 'cd') {
//         // Change directory
//         currentFolder = currentFolder[path] || {};
//     } else if (command === 'mkdir') {
//         // Create a folder
//         currentFolder[path] = {};
//     } else if (command === 'touch') {
//         // Create a file (optional)
//         currentFolder[path] = 'file content'; // You can set any value here
//     }
// }
