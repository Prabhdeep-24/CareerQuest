import{r as l,F as N,u as b,j as e}from"./index-CRZP_CCF.js";import{G as v}from"./index-CcM53O3_.js";import{d as j}from"./index-Da2A4b6e.js";const g=new v({apiKey:"AIzaSyAfTciGt4WMBbZBUNo85V5tVa7edz3xl3E"});async function C(s,t,a,r,i,c,d,p,u){if(r<5){const n=(await g.models.generateContent({model:"gemini-2.0-flash",contents:`Act as a professional Career Counselor.Ask one question at a time based on previous answers and 

                Important:

                questions and questions should be humanized and small without symbols. Ask at most 6 questions.Be friendly and professional.
                
                User's Responses:
                questions asked:${t} , answers given:${s}.`})).candidates[0].content.parts[0].text;a(n),i(),c([...t,n]),d(!1),console.log(t)}else{const n=(await g.models.generateContent({model:"gemini-2.0-flash",contents:`You are a professional AI Career Counselor.

                Based on the following user responses, suggest exactly 3 careers.

                Return the output as a RAW JSON array of 3 objects.  
                Each object should have exactly these keys:
                - "title" (string, 2-3 words, e.g., "Software Developer")
                - "description" (string, short friendly description personalized to user's strengths)
                - "image (url): provide the url of a real image from the internet in context to the title" 

                Important Instructions:
                - Only return pure valid JSON, no explanation, no introduction, no markdown.
                - No words like 'JSON', no extra symbols. Only the raw JSON.
                - Ensure the JSON array is directly parsable.

                User Responses:
                Questions: ${t}
                Answers: ${s}
            `})).candidates[0].content.parts[0].text.replace(/^```json\s*/i,"").replace(/^```/,"").replace(/```$/,"").replace(/^JSON\s*/i,"").trim();p(JSON.parse(n)),u("/MyCareerPath")}}function k(){const{value:s,changeValue:t,question:a,changeQuestion:r,count:i,changeCount:c,answers:d,changeAnswers:p,questions:u,changeQuestions:h,careeroptions:n,changeCareerOptions:y}=l.useContext(N),[w,f]=l.useState(!1),x=l.useRef(),m=b();return l.useEffect(()=>{if(localStorage.getItem("career")){const o=JSON.parse(localStorage.getItem("career"));m(`/careerPath/${o}`);return}n.length>0&&m("/MyCareerPath")}),e.jsxs("div",{className:"bg-gray-100 flex flex-col items-center justify-center",children:[e.jsx("div",{className:"flex justify-center p-5",children:e.jsxs("h1",{className:"text-2xl md:text-3xl font-poppins font-bold h-10 p-5",children:["Fill this form to"," ",e.jsx("b",{className:"text-teal-600 font-semibold",children:"Find your Career Path"})]})}),e.jsxs("div",{className:"bg-white w-200 h-150 m-2 shadow-xl flex flex-col",children:[e.jsxs("div",{className:"m-2 p-20",children:[e.jsx("div",{className:"py-8 text-teal-600 font-semibold text-2xl",children:w?e.jsx("span",{children:a}):e.jsx(j.Typewriter,{words:[a],cursorBlinking:!0,cursorStyle:"|",typeSpeed:30,onFinishedTyped:()=>f(!0)},a)}),e.jsx("input",{ref:x,type:"text",className:"m-2 p-1 border-b-2 w-full font-poppins focus:outline-none",value:s,onChange:o=>{t(o.target.value)}})]}),e.jsx("button",{className:"bg-teal-600 ml-auto mx-20 hover:text-white font-poppins font-semibold w-20 h-8 rounded-xl hover:bg-teal-700 hover:scale-110",onClick:()=>{r("Evaluating..."),x.current.focus(),console.log(s);const o=[...d,s];p(o),C(o,u,r,i,c,h,f,y,m),t("")},children:"Next"})]})]})}export{k as default};
