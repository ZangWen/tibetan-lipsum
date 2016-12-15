const pre = ['ག', 'ད', 'བ', 'མ', 'འ', ''];
const sup = ['ར', 'ལ', 'ས'];
const root1 = ['ྐ', 'ྒ', 'ྔ', 'ྗ', 'ྙ', 'ྟ', 'ྡ', 'ྣ', 'ྦ', 'ྨ', 'ྫ'];
const root2 = ['ྐ', 'ྒ', 'ྔ', 'ྕ', 'ྗ', 'ྟ', 'ྡ', 'ྤ', 'ྦ', 'ྷ'];
const root3 = ['ྐ', 'ྒ', 'ྔ', 'ྙ', 'ྟ', 'ྡ', 'ྣ', 'ྤ', 'ྦ', 'ྨ', 'ྩ'];
const root4 = ['ཀ', 'ཁ', 'ག', 'ང', 'ཅ', 'ཆ', 'ཇ', 'ཉ', 'ཏ', 'ཐ', 'ད', 'ན', 'པ', 'ཕ', 'བ', 'མ', 'ཙ', 'ཚ', 'ཛ', 'ཝ', 'ཞ', 'ཟ', 'འ', 'ཡ', 'ར', 'ལ', 'ཤ', 'ས', 'ཧ', 'ཨ'];
const sub = ['ེ', 'ཻ', 'ོ', 'ཽ', '', '', '', '', ''];
const post = ['ག', 'ང', 'ད', 'ན', 'བ', 'མ', 'འ', 'ར', 'ལ', 'ས', ''];
const ppost = ['ད', 'ས', ''];

function randomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const genLipsumSylArr = [genLipsumSyl1, genLipsumSyl2, genLipsumSyl3, genLipsumSyl4, genLipsumSyl5, genLipsumSyl6];

function genLipsumText(count) {
  const sentenceCount = (count / 1) || 8;
  let arr = [];
  for(let i = 0; i < sentenceCount; i++) {
    arr.push(genLipsumSentence());
  }
  const text = arr.join(' ');
  return text;
}

function genLipsumSentence() {
  let arr = [];
  const sylCounts = Math.floor(Math.random() * 17) + 3; //sentence between 3 and 20 syl
  for(let i = 1; i <= sylCounts; i++) {
    arr.push(randomElement(genLipsumSylArr)());
  }
  const sentence = '།' + arr.join('་') + '།';
  return sentence;
}

function genLipsumSyl1() {
  const syl = randomElement(pre) + sup[0] + randomElement(root1) +
    randomElement(sub) + randomElement(post) +
    randomElement(ppost);
  return syl;
}

function genLipsumSyl2() {
  const syl = randomElement(pre) + sup[1] + randomElement(root2) +
    randomElement(sub) + randomElement(post) +
    randomElement(ppost);
  return syl;
}

function genLipsumSyl3() {
  const syl = randomElement(pre) + sup[2] + randomElement(root3) +
    randomElement(sub) + randomElement(post) +
    randomElement(ppost);
  return syl;
}

function genLipsumSyl4() {
  const syl = randomElement(root4) + randomElement(post);
  return syl;
}

function genLipsumSyl5() {
  const syl = randomElement(pre) + randomElement(root4) +
    randomElement(post) + randomElement(ppost);
  return syl;
}

function genLipsumSyl6() {
  const syl = randomElement(pre) + randomElement(root4) + randomElement(sub) +
    randomElement(post) + randomElement(ppost);
  return syl;
}

module.exports = {
  genLipsumText: genLipsumText
};
