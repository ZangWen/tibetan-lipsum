//r_super1 = /^([གདབམའ]?)(ར)([ྐྒྔྕྗྙྟྡྣྦྨྫ])([ྭྱྲླཱ]*?)([ིེཻོཽུ]*?)([གངདནབམའརལས]?)([དས]?)$/;
//r_super2 = /^([གདབམའ]?)(ལ)([ྐྒྔྕྗྟྡྤྦྷ])([ྭྱྲླཱ]*?)([ིེཻོཽུ]*?)([གངདནབམའརལས]?)([དས]?)$/;
//r_super3 = /^([གདབམའ]?)(ས)([ྐྒྔྙྟྡྣྤྦྨྩ])([ྭྱྲླཱ]*?)([ིེཻོཽུ]*?)([གངདནབམའརལས]?)([དས]?)$/;
//r_only2 = /^([ཀཁགངཅཆཇཉཏཐདནཔཕབམཙཚཛཝཞཟའཡརལཤསཧཨ])([གངདནབམའརལས]?)$/;
//r_only3up = /^([གདབམའ]?)([ཀཁགངཅཆཇཉཏཐདནཔཕབམཙཚཛཝཞཟའཡརལཤསཧཨ])([གངདནབམའརལས]?)([དས]?)$/;
//r_vowel_sub = /^([གདབམའ]?)([ཀཁགངཅཆཇཉཏཐདནཔཕབམཙཚཛཝཞཟའཡརལཤསཧཨ])([ྭྱྲླཱ]*?)([ིེཻོཽུ]*?)([གངདནབམའརལས]?)([དས]?)$/;

const pre = ['ག', 'ད', 'བ', 'མ', 'འ', ''];
const sup = ['ར', 'ལ', 'ས'];
const root1 = ['ྐ', 'ྒ', 'ྔ', 'ྕ', 'ྗ', 'ྙ', 'ྟ', 'ྡ', 'ྣ', 'ྦ', 'ྨ', 'ྫ'];
const root2 = ['ྐ', 'ྒ', 'ྔ', 'ྕ', 'ྗ', 'ྟ', 'ྡ', 'ྤ', 'ྦ', 'ྷ'];
const root3 = ['ྐ', 'ྒ', 'ྔ', 'ྙ', 'ྟ', 'ྡ', 'ྣ', 'ྤ', 'ྦ', 'ྨ', 'ྩ'];
const root4 = ['ཀ', 'ཁ', 'ག', 'ང', 'ཅ', 'ཆ', 'ཇ', 'ཉ', 'ཏ', 'ཐ', 'ད', 'ན', 'པ', 'ཕ', 'བ', 'མ', 'ཙ', 'ཚ', 'ཛ', 'ཝ', 'ཞ', 'ཟ', 'འ', 'ཡ', 'ར', 'ལ', 'ཤ', 'ས', 'ཧ', 'ཨ'];
const sub = ['ེ', 'ཻ', 'ོ', 'ཽ', '', '', '', '', ''];
const post = ['ག', 'ང', 'ད', 'ན', 'བ', 'མ', 'འ', 'ར', 'ལ', 'ས', ''];
const ppost = ['ད', 'ས', ''];

Array.prototype.randomElement = function () {
  console.log(Math.floor(Math.random() * this.length));
  return this[Math.floor(Math.random() * this.length)];
}

const genLipsumSylArr = [genLipsumSyl1, genLipsumSyl2, genLipsumSyl3, genLipsumSyl4, genLipsumSyl5, genLipsumSyl6];

console.log(genLipsumText(8));

function genLipsumText(count) {
  let arr = [];
  for(let i = 0; i < count; i++) {
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
