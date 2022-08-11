// let output_elm = document.querySelector(".output");

// function output(message) {
//   output_elm.prepend(message + "\n");
// }

let images_elm = document.querySelector(".images");

function addImg(src) {
  const image = document.createElement("img");
  image.src = src;
  images_elm.append(image);
}

function addTxt(randomTexts) {
    const txtElement = document.createElement("div");
    txtElement.classList.add('textPosts');
    txtElement.textContent = randomTexts;
    images_elm.append(txtElement);
  }

function addAuthor(randomAuthor) {
    const author = document.createElement("div");
    author.classList.add('authorDiv');
    author.textContent = randomAuthor;
    images_elm.append(author);
}

  

const createPost = () => {
    const post = document.createElement("div");

    // dispatchEvent.classname = "postDiv";
    // let newDiv = document.createElement.posts('div');
    // newDiv.innerText = 'test';
}

window.onload = (event) => {
    createPost();
  };


