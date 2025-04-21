import{r as i,F as j,u as C,j as e}from"./index-CYl2Pb4U.js";import{G as S}from"./index-CcM53O3_.js";import{d as A}from"./index-CHUGNRrM.js";const w=new S({apiKey:"AIzaSyAfTciGt4WMBbZBUNo85V5tVa7edz3xl3E"});async function O(s,n,a,r,l,c,d,u,p){if(r<5){const o=(await w.models.generateContent({model:"gemini-2.0-flash",contents:`Act as a professional Career Counselor.Ask one question at a time based on previous answers and 

                Important:

                questions and questions should be humanized and small without symbols. Ask at most 6 questions.Be friendly and professional.
                Also Provide with a very small and easy understanding example to explain the question.
                User's Responses:
                questions asked:${n} , answers given:${s}.`})).candidates[0].content.parts[0].text;a(o),l(),c([...n,o]),d(!1),console.log(n)}else{const o=(await w.models.generateContent({model:"gemini-2.0-flash",contents:`You are a professional AI Career Counselor.

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
                Questions: ${n}
                Answers: ${s}
            `})).candidates[0].content.parts[0].text.replace(/^```json\s*/i,"").replace(/^```/,"").replace(/```$/,"").replace(/^JSON\s*/i,"").trim();u(JSON.parse(o)),p("/MyCareerPath")}}function J(){const{value:s,changeValue:n,question:a,changeQuestion:r,count:l,changeCount:c,answers:d,changeAnswers:u,questions:p,changeQuestions:h,careeroptions:o,changeCareerOptions:b}=i.useContext(j),[v,f]=i.useState(!1),x=i.useRef(),m=C();function g(t){if(s){r("Evaluating..."),x.current.focus(),console.log(s);const y=[...d,s];u(y),O(y,p,r,l,c,h,f,b,m),n("")}}function N(t){t.key==="Enter"&&g()}return i.useEffect(()=>{if(localStorage.getItem("career")){const t=JSON.parse(localStorage.getItem("career"));m(`/careerPath/${t}`);return}o.length>0&&m("/MyCareerPath")}),e.jsxs("div",{className:"bg-gray-100 flex flex-col items-center justify-center",children:[e.jsx("div",{className:"flex justify-center p-5",children:e.jsxs("h1",{className:"text-2xl md:text-3xl font-poppins font-bold h-10 p-5",children:["Fill this form to"," ",e.jsx("b",{className:"text-teal-600 font-semibold",children:"Find your Career Path"})]})}),e.jsxs("div",{className:"bg-white w-200 h-150 m-2 shadow-xl flex flex-col",children:[e.jsxs("div",{className:"m-2 p-20",children:[e.jsx("div",{className:"py-8 text-teal-600 font-semibold text-2xl",children:v?e.jsx("span",{children:a}):e.jsx(A.Typewriter,{words:[a],cursorBlinking:!0,cursorStyle:"|",typeSpeed:30,onFinishedTyped:()=>f(!0)},a)}),e.jsx("input",{ref:x,type:"text",className:"m-2 p-1 border-b-2 w-full font-poppins focus:outline-none",value:s,onChange:t=>{n(t.target.value)},onKeyDown:t=>N(t)})]}),e.jsx("button",{className:"bg-teal-600 ml-auto mx-20 hover:text-white font-poppins font-semibold w-20 h-8 rounded-xl hover:bg-teal-700 hover:scale-110",onClick:t=>{g()},children:"Next"})]})]})}export{J as default};
