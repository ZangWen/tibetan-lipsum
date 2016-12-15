# tibetan-lipsum

[![Build Status](https://travis-ci.org/karmapa/tibetan-lipsum.svg?branch=master)](https://travis-ci.org/karmapa/tibetan-lipsum)

Tibetan lorem ipsum generator

###Usage
num defines the number of sentences(default num is 8). Each sentence consists of 3 to 20 syllables
```
//command line
npm run gen-lipsum num
//or
node index.js num

node index.js 10    //generated 10 sentences
node index.js 1     //generated 1 sentences
node index.js       //generated 8 sentences
node index.js abc   //generated 8 sentences
```
```javascript
//as node_modules
//command line
npm i tibetan-lipsum

//.js
var genLipsumText = require('tibetan-lipsum').genLipsumText;
var text = genLipsumText(num);
```

output example:
```
།ཅགས་གརྨེསད་བཡལས་བབན་བསྒོངས་འལྐེའས་དརྗེག་རྣོལ་མརྣསས་གལྟའས་གསྦོའས་འསྡེསས་མརྗཽསས་འཉོའས་ངབད་མརྫེབ་གརྙནད་གརྐབས་གསྩཻལད། །ལྤག་ཡང་དཉམད་གལྟསད་དསྦའས་ལྟརས་དལྒདད་གསྨངས་སྟེསས་འཧབ་རྣཽམད་མཆད་ཨའ་བཡད་བཆངས་འད། །བལྡངད་ཕ་དལྕེད་དསྨ་བཉལས་དཞད་ལྷབད་དཚརས་མལྟནད་ཡག་འལྗལ་རྫཻད་དལྒགད་འརྟཽལད། །འལྷགས་མམབ་ཕར་གལྷཻའད་དསྡད་ཐལས་འལྕནས་བལྕོངད་མསྣལ། །མབལད་འཡམ་མརྟོར་དམ་གཕངད་དརྗཻལས་ཛང་ནམ་འརྗཽའས་གལབད་མལྒའ་གརྣེལད་འཚཽརད་དནཽནས་འསྩནས།
```
