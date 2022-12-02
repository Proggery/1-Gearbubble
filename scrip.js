// @ts-nocheck
const text = document.getElementById("text");
const button = document.getElementById("button");

let rootPod = document.getElementById("rootPod");
let rootPodFirst = document.getElementById("rootPodFirst");
let rootPodRandom = document.getElementById("rootPodRandom");
const copyButtonPod = document.getElementById("copyButtonPod");

let rootSocial = document.getElementById("rootSocial");
let rootSocialFirst = document.getElementById("rootSocialFirst");
let rootSocialRandom = document.getElementById("rootSocialRandom");
const copyButtonSocial = document.getElementById("copyButtonSocial");

const translateTextPod = () => {
  let strings = text.value;

  strings = strings.replace(/\s/g, "");

  strings = Array.from(new Set(strings.split("#"))).toString();

  strings = strings.substring(1);

  rootPod.innerText = strings;

  //   First 30 text
  const first30 = strings.split(",").slice(0, 30);
  rootPodFirst.innerText = first30;

  // Random 30 text
  strings = strings.split(",");
  const newStrings = [];
  const elements = 30;

  for (let i = 0; i < elements; i++) {
    newStrings.push(
      ...strings.splice(Math.floor(Math.random() * strings.length), 1)
    );
  }

  rootPodRandom.innerText = newStrings;
};

const copyTheTextPod = () => {
  navigator.clipboard.writeText(rootPod.value);
};

const translateTextSocial = () => {
  let strings = text.value;

  strings = strings.replace(/\s/g, "");

  strings = Array.from(new Set(strings.split("#"))).toString();

  let first30 = strings.split(",").slice(0, 31) + "";
  //   rootSocialFirst.innerText = first30;

  strings = strings.replaceAll(",", " #");
  first30 = first30.replaceAll(",", " #");
  strings = strings.substring(1);
  first30 = first30.substring(1);

  rootSocial.innerText = strings;
  rootSocialFirst.innerText = first30;

  // Random 30 text
  strings = strings.split(" ");
  let newStrings = [];
  const elements = 30;

  for (let i = 0; i < elements; i++) {
    newStrings.push(
      ...strings.splice(Math.floor(Math.random() * strings.length), 1)
    );
  }
  newStrings = newStrings + "";
  newStrings = newStrings.replaceAll(",", " ");

  rootSocialRandom.innerText = newStrings;
};

const copyTheTextSocial = () => {
  navigator.clipboard.writeText(rootPod.value);
};

button.addEventListener("click", translateTextPod);
copyButtonPod.addEventListener("click", copyTheTextPod);

button.addEventListener("click", translateTextSocial);
copyButtonPod.addEventListener("click", copyTheTextSocial);
