const pre = ['ག', 'ད', 'བ', 'མ', 'འ', ''];
const sup = ['ར', 'ལ', 'ས'];
const root1 = ['ྐ', 'ྒ', 'ྔ', 'ྗ', 'ྙ', 'ྟ', 'ྡ', 'ྣ', 'ྦ', 'ྨ', 'ྫ'];
const root2 = ['ྐ', 'ྒ', 'ྔ', 'ྕ', 'ྗ', 'ྟ', 'ྡ', 'ྤ', 'ྦ', 'ྷ'];
const root3 = ['ྐ', 'ྒ', 'ྔ', 'ྙ', 'ྟ', 'ྡ', 'ྣ', 'ྤ', 'ྦ', 'ྨ', 'ྩ'];
const root4 = ['ཀ', 'ཁ', 'ག', 'ང', 'ཅ', 'ཆ', 'ཇ', 'ཉ', 'ཏ', 'ཐ', 'ད', 'ན', 'པ', 'ཕ', 'བ', 'མ', 'ཙ', 'ཚ', 'ཛ', 'ཝ', 'ཞ', 'ཟ', 'འ', 'ཡ', 'ར', 'ལ', 'ཤ', 'ས', 'ཧ', 'ཨ'];
const sub = ['ེ', 'ཻ', 'ོ', 'ཽ', '', '', '', '', ''];
const post = ['ག', 'ང', 'ད', 'ན', 'བ', 'མ', 'འ', 'ར', 'ལ', 'ས', ''];
const ppost = ['ད', 'ས', ''];

Array.prototype.randomElement = function () {
  return this[Math.floor(Math.random() * this.length)];
}

const genLipsumSylArr = [genLipsumSyl1, genLipsumSyl2, genLipsumSyl3, genLipsumSyl4, genLipsumSyl5, genLipsumSyl6];

function genLipsumText(count) {
  const sentenceCount = count = (count / 1) || 8;
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
    arr.push(genLipsumSylArr.randomElement()());
  }
  const sentence = '།' + arr.join('་') + '།';
  return sentence;
}

function genLipsumSyl1() {
  const syl = pre.randomElement() + sup[0] + root1.randomElement() +
    sub.randomElement() + post.randomElement() +
    ppost.randomElement();
  return syl;
}

function genLipsumSyl2() {
  const syl = pre.randomElement() + sup[1] + root2.randomElement() +
    sub.randomElement() + post.randomElement() +
    ppost.randomElement();
  return syl;
}

function genLipsumSyl3() {
  const syl = pre.randomElement() + sup[2] + root3.randomElement() +
    sub.randomElement() + post.randomElement() +
    ppost.randomElement();
  return syl;
}

function genLipsumSyl4() {
  const syl = root4.randomElement() + post.randomElement();
  return syl;
}

function genLipsumSyl5() {
  const syl = pre.randomElement() + root4.randomElement() +
    post.randomElement() + ppost.randomElement();
  return syl;
}

function genLipsumSyl6() {
  const syl = pre.randomElement() + root4.randomElement() + sub.randomElement() +
    post.randomElement() + ppost.randomElement();
  return syl;
}

module.exports = {
  genLipsumText: genLipsumText
};
