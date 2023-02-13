(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const C=[{id:1,question:"Which of the following is not a type of music notation?",options:["Standard notation","Tab notation","Morse code notation","Graphics notation"],answer:"Morse code notation",category:"music"},{id:2,question:"What is the most common time signature in classical music?",options:["3/4","4/4","5/4","6/8"],answer:"4/4",category:"music"},{id:3,question:"Which of the following is not a type of instrument in a symphony orchestra?",options:["Violin","Piano","Harp","Theremin"],answer:"Theremin",category:"music"},{id:4,question:"What is the most common key in pop music?",options:["C Major","G Major","D Major","A Major"],answer:"C Major",category:"music"},{id:5,question:"Which of the following is not a type of chord?",options:["Major","Minor","Diminished","Flat"],answer:"Flat",category:"music"},{id:6,question:"Which of the following is not a type of music genre?",options:["Jazz","Blues","Rock","Applesauce"],answer:"Applesauce",category:"music"},{id:7,question:"Which of the following is not a type of music theory?",options:["Harmony","Counterpoint","Form","Cooking"],answer:"Cooking",category:"music"},{id:8,question:"What is the most common tempo marking in classical music?",options:["Allegro","Andante","Adagio","Moderato"],answer:"Allegro",category:"music"},{id:9,question:"Which of the following is not a type of musical form?",options:["Sonata","Symphony","Concerto","Spaghetti"],answer:"Spaghetti",category:"music"},{id:10,question:"Which of the following is not a type of music notation software?",options:["Sibelius","Finale","MuseScore","Microsoft Word"],answer:"Microsoft Word",category:"music"}],q=[{id:21,question:"What is the correct syntax for an if statement in Python?",options:["if (condition):","if condition","if: condition","if condition:"],answer:"if condition:",category:"coding"},{id:22,question:"Which of the following is not a data type in JavaScript?",options:["String","Number","Boolean","ArrayList"],answer:"ArrayList",category:"coding"},{id:23,question:"Which of the following is used to declare a variable in Java?",options:["var","let","const","int"],answer:"int",category:"coding"},{id:24,question:"What is the correct syntax for a for loop in C#?",options:["for i = 0 to 10","for (i = 0; i <= 10; i++)","for (int i = 0; i <= 10)","for i in range(0, 10)"],answer:"for (i = 0; i <= 10; i++)",category:"coding"},{id:25,question:"Which of the following is not a looping structure in PHP?",options:["while","for","do-while","foreach"],answer:"foreach",category:"coding"},{id:26,question:"Which of the following is not a valid operator in C++?",options:["+","-","*","$"],answer:"$",category:"coding"},{id:27,question:"In which programming language is 'print' used for displaying output?",options:["Python","JavaScript","Java","C++"],answer:"Python",category:"coding"},{id:28,question:"What is the correct syntax for a function in Ruby?",options:["function name()","def name","function name","def name()"],answer:"def name()",category:"coding"},{id:29,question:"Which of the following is not a type of variable in Swift?",options:["Int","String","Double","Object"],answer:"Object",category:"coding"},{id:30,question:"In which programming language is '#' used for commenting?",options:["Python","JavaScript","Java","C++"],answer:"C++",category:"coding"}],s={music:C,"modern-art":[{id:11,question:"Which artist is known for coining the term 'Surrealism'?",options:["Pablo Picasso","Salvador Dali","Vincent van Gogh","Henri Matisse"],answer:"Salvador Dali",category:"modern-art"},{id:12,question:"Which movement is associated with the use of abstract forms and shapes in art?",options:["Impressionism","Expressionism","Futurism","Cubism"],answer:"Cubism",category:"modern-art"},{id:13,question:"Which artist is known for painting the work 'The Persistence of Memory'?",options:["Pablo Picasso","Salvador Dali","Vincent van Gogh","Henri Matisse"],answer:"Salvador Dali",category:"modern-art"},{id:14,question:"Which artist is known for creating the painting 'The Scream'?",options:["Vincent van Gogh","Salvador Dali","Edvard Munch","Claude Monet"],answer:"Edvard Munch",category:"modern-art"},{id:15,question:"What movement was associated with the use of bold, bright colors and thick brushstrokes?",options:["Impressionism","Expressionism","Fauvism","Cubism"],answer:"Fauvism",category:"modern-art"},{id:16,question:"What movement was associated with the use of bright colors, simplified forms, and a focus on movement and speed",options:["Impressionism","Futurism","Surrealism","Abstract Expressionism"],answer:"Futurism",category:"modern-art"},{id:17,question:"Which artist is known for creating the painting 'Water Lilies'?",options:["Claude Monet","Paul Cezanne","Paul Gauguin","Paul Klee"],answer:"Claude Monet",category:"modern-art"},{id:18,question:"Which artist is known for creating the painting 'Les Demoiselles d'Avignon'?",options:["Henri Matisse","Vincent van Gogh","Salvador Dali","Pablo Picasso"],answer:"Pablo Picasso",category:"modern-art"},{id:19,question:"Which artist is known for creating the painting 'Guernica'?",options:["Claude Mone","Paul Cezanne","Pablo Picasso","Vincent van Gogh"],answer:"Pablo Picasso",category:"modern-art"},{id:20,question:"Which artist is known for creating the sculpture 'The Thinker'?",options:["Auguste Rodin","Alexander Calder","Jean Arp","Henry Moore"],answer:"Auguste Rodin",category:"modern-art"}],coding:q};function T(t,e=!0,n=!1){const r=document.createElement("h1");return r.innerText=t,e&&(r.classList.add("heading-primary"),r.classList.remove("heading-sucess")),n&&(r.classList.remove("heading-primary"),r.classList.add("heading-success")),r}function u(t,e){t.innerHTML="",t.appendChild(e)}function d(t){const e=document.createDocumentFragment();for(let n=0;n<t.length;n++)e.appendChild(t[n]);return e}function b(t=!1,e){const n=document.createElement("div");n.classList.add("results-container");const r=T("Test report",!1,!0),i=document.createElement("ul");i.classList.add("results-list");const o=document.createElement("li"),a=document.createElement("li"),c=document.createElement("li"),m=document.createElement("li"),f=document.createElement("button");if(f.innerText="Return",f.classList.add("return-button"),f.addEventListener("click",()=>{v()}),t){const l=JSON.parse(window.localStorage.getItem(e));let{correctAnswers:p,totalQuestions:g,incorrectAnswers:w,score:h}=l;return o.innerText=`Total correct answers: ${p}`,a.innerText=`Total incorrect answers: ${w}`,c.innerText=`Total score: ${h}`,m.innerText=`Total questions: ${g}`,u(i,d([o,a,c,m,f])),u(n,d([r,i])),n}else{let l=0,p=s[currentTopicName].length,g=0;for(let h=0;h<s[currentTopicName].length;h++)s[currentTopicName][h].userAnswer===s[currentTopicName][h].answer&&(l+=1,g+=1);o.innerText=`Total correct answers: ${l}`,a.innerText=`Total incorrect answers: ${p-l}`,c.innerText=`Total score: ${g}`,m.innerText=`Total questions: ${p}`;const w={completed:!0,correctAnswers:l,incorrectAnswers:p-l,score:g,totalQuestions:p};return window.localStorage.setItem(currentTopicName,JSON.stringify(w)),u(i,d([o,a,c,m,f])),u(n,d([r,i])),n}}function x(){var e;const t=document.createElement("p");if(!((e=s[currentTopicName][currentTopicDataIndex])!=null&&e.question))throw new Error(`Data for topic with topicName ${currentTopicName} is not provided`);return t.innerText=`${s[currentTopicName][currentTopicDataIndex].question} 
(${currentTopicDataIndex+1} of ${s[currentTopicName].length} questions)`,t.title=t.innerText,t.classList.add("unselectable"),t}function A(t){if(!s[currentTopicName][currentTopicDataIndex].userAnswer){curUserAnswer=t.getAttribute("id");const e=document.getElementsByClassName("option");for(let n=0;n<e.length;n++)e[n].isSameNode(t)?t.classList.add("chosen-option"):e[n].classList.remove("chosen-option")}}function E(){var r;const t=document.createElement("ul"),e=(r=s[currentTopicName][currentTopicDataIndex])==null?void 0:r.options;if(!e)throw new Error(`Data for topic with topicName ${currentTopicName} is not provided`);const n=[];for(let i=0;i<e.length;i++){const o=document.createElement("input");o.classList.add("option"),o.setAttribute("type","radio"),o.tabIndex=0,o.setAttribute("name","answer"),o.setAttribute("id",e[i]);const a=document.createElement("label");a.innerText=e[i],a.setAttribute("for",e[i]);const c=document.createElement("li");c.appendChild(o),c.appendChild(a),s[currentTopicName][currentTopicDataIndex].userAnswer===a.innerText?(c.classList.add("chosen-answer"),o.setAttribute("checked",!0)):s[currentTopicName][currentTopicDataIndex].userAnswer&&(c.classList.add("not-allowed"),o.setAttribute("disabled",!0)),o.addEventListener("click",m=>A(m.target)),n.push(c)}return t.appendChild(d(n)),t.classList.add("option-list"),t}function L(){const t=document.createElement("div"),e=document.createElement("button"),n=document.createElement("button");return e.innerText="<",e.tabIndex=0,n.innerText=">",n.tabIndex=0,e.classList.add("question-controlls-button"),currentTopicDataIndex===0?e.classList.add("disabled"):e.classList.remove("disabled"),n.classList.add("question-controlls-button"),n.addEventListener("click",()=>{var r,i;if(s[currentTopicName][currentTopicDataIndex].userAnswer||curUserAnswer)if(currentTopicDataIndex===s[currentTopicName].length-1){s[currentTopicName][currentTopicDataIndex].userAnswer=(r=s[currentTopicName][currentTopicDataIndex].userAnswer)!=null?r:curUserAnswer,curUserAnswer=null;const o=document.getElementById("quiz-container");u(o,b())}else s[currentTopicName][currentTopicDataIndex].userAnswer=(i=s[currentTopicName][currentTopicDataIndex].userAnswer)!=null?i:curUserAnswer,curUserAnswer=null,currentTopicDataIndex+=1,y();else{const o=document.getElementsByClassName("option-list")[0];o.classList.add("not-valid"),setTimeout(()=>{o.classList.remove("not-valid")},400)}}),e.addEventListener("click",()=>{currentTopicDataIndex!==0&&(currentTopicDataIndex-=1,y())}),t.appendChild(d([e,n])),t.classList.add("controlls-container"),t}function N(){return{questionP:x(),optionsUl:E(),controlls:L()}}function y(){const t=document.getElementById("quiz-container"),e=document.createElement("div");e.classList.add("question-container");const n=document.createElement("div");n.classList.add("options-container");const r=document.createElement("div");r.classList.add("controlls-container");const{questionP:i,optionsUl:o,controlls:a}=N();e.appendChild(i),n.appendChild(o),r.appendChild(a),u(t,d([e,n,r]))}function I(t){var e;if((e=JSON.parse(window.localStorage.getItem(t)))!=null&&e.completed){const n=document.getElementById("quiz-container");u(n,b(!0,t))}else if(s[t])currentTopicName=t,currentTopicDataIndex=0,y();else throw new Error("No such topic were found...")}function D(){const t=document.getElementsByClassName("topic-button");if(t.length<=0)throw new Error("No topics buttons were found...");for(let e=0;e<t.length;e++)t[e].addEventListener("click",n=>I(n.target.dataset.topicName))}function v(){if(s){const t=document.createDocumentFragment();t.appendChild(T("Pick the topic"));const e=document.createElement("div");e.classList.add("topic-buttons-container");const n=Object.keys(s);for(let i=0;i<n.length;i++){const o=document.createElement("button");o.innerText=n[i].toUpperCase(),o.classList.add("topic-button"),o.dataset.topicName=n[i];const a=JSON.parse(window.localStorage.getItem(n[i]));a!=null&&a.completed?o.classList.add("solved"):o.classList.remove("solved"),e.appendChild(o)}t.appendChild(e);const r=document.getElementById("quiz-container");u(r,t),D()}else throw new Error("Container not found in the DOM tree, or data cannot be fetched")}window.currentTopicName=void 0;window.curUserAnswer=null;window.currentTopicDataIndex=0;v();