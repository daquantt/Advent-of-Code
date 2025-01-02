const userInput = document.querySelector("#user-input");
const result = document.querySelector("#result1");
const result2 = document.querySelector("#result2");
const submit = document.querySelector("#submit-button");
const clear = document.querySelector("#clear-button");

const root = [{ name: "root", type: "folder", size: 0 }];

let currentFolder = root;
let previousFolder = root;
let rootBranch = "";

function calculateFolderSize(folder) {
  let size = 0;

  for (let item in folder) {
    //if items in folder is an object and type = file, add size value to size variable
    if (folder[item].type === "file") {
      size += folder[item].size;
    }

    if (Array.isArray(folder[item])) {
      size += folder[item][0].size;
    }
  }
  //assign size variable to folder size
  folder[0].size = size;
}

function createFolder(string) {
  let folderName = string.replace("dir ", "");
  //set prev folder as curr folder to store as parent key
  previousFolder = currentFolder;
  //in curr folder create new folder with folderName, type, parent, size, root branch
  currentFolder[folderName] = [{ name: folderName, type: "folder", parent: previousFolder, size: 0, branch: "" }];
  //set rootBranch - if the parent folder name = root, set branch to created folder name
  if (currentFolder[folderName][0].parent[0].name === "root") {
    currentFolder[folderName][0].branch = folderName;
  } else {
    //else set branch to current folder branch. sets all lower branches to root branch
    currentFolder[folderName][0].branch = currentFolder[0].branch;
  }
  // console.log("createfolder " + folderName);
  // console.log(currentFolder[folderName]);
}

function createFile(string) {
  //get file name and size
  const sizeAndFilename = string.split(" ");
  const fileName = sizeAndFilename[1];
  const size = Number(sizeAndFilename[0]);
  // console.log(fileName, size);
  //create file in current folder
  currentFolder[fileName] = { name: fileName, type: "file", size: size };
  //recalculate folder size each time a file is created
  calculateFolderSize(currentFolder);
  // console.log(currentFolder[[fileName]]);
}

submit.addEventListener("click", () => {
  //split on double line to get start stack and reorder procedure
  let inputArray = userInput.value.split(/\n/);
  // console.log(inputArray);

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
      // console.log("cd into " + directory);
      //change folder
      currentFolder = currentFolder[directory];
      // console.log("curr dir ", currentFolder);
    }

    //change directory to previous directory eg. $ cd ..
    if (item.match(/\$\scd\s\.\./)) {
      // console.log("cd out 1 level");
      //change folder by setting currentFolder to its parent key
      currentFolder = currentFolder[0].parent;
      // console.log("current folder is ", currentFolder);
    }

    //create folders
    if (item.match(/dir\s\w/)) {
      createFolder(item);
    }

    //create files
    if (item.match(/^\d+/)) {
      createFile(item);
    }
  });
  // result.innerText = `Result = ${message.join("")}`;

  //Part Two

  // result2.innerText = `Result = ${message2.join("")}`;
  console.log(root);
  // console.log(root[0].size);
  const sizeValues = extractSizeValues(root);
  console.log(sizeValues);

  let branches = [];
  sizeValues.forEach((item) => {
    branches.push(item.branch);
  });
  const uniqueBranches = [...new Set(branches).values()];
  console.log(uniqueBranches);

  uniqueBranches.forEach((branch) => {
    let array = [];
    sizeValues.forEach((item) => {
      if (item.branch === branch) {
        array.push(item);
      }
    });
    console.log(array);
  });
});

//build recursive function to get folder sizes for each level
function extractSizeValues(obj, result = []) {
  if ("0" in obj && obj[0].size < 100000 && obj[0].size > 0) {
    // console.log(obj[0]);
    result.push({ branch: obj[0].branch, parent: obj[0].parent[0].name, name: obj[0].name, size: obj[0].size });
  }
  for (let item in obj) {
    if ("0" in obj) {
      extractSizeValues(obj[item], result);
    }
  }

  return result;
}

clear.addEventListener("click", () => {
  userInput.value = "";
});
