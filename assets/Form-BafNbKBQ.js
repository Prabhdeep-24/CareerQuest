import{r as i,F as j,u as C,j as e}from"./index-Snrv6sE5.js";import{d as S,G as A}from"./index-CCsuDWpy.js";const w=new A({apiKey:"AIzaSyAfTciGt4WMBbZBUNo85V5tVa7edz3xl3E"});async function O(s,n,a,r,l,c,d,u,p){if(r<5){const o=(await w.models.generateContent({model:"gemini-2.0-flash",contents:`Act as a professional Career Counselor.Ask one question at a time based on previous answers and 

                Important:

                questions and questions should be humanized and small without symbols. Ask at most 6 questions.Be friendly and professional.
                Also Provide with a very small and easy understanding example to explain the question.
                User's Responses:
                questions asked:${n} , answers given:${s}.`})).candidates[0].content.parts[0].text;a(o),l(),c([...n,o]),d(!1)}else{const o=(await w.models.generateContent({model:"gemini-2.0-flash",contents:`You are a professional AI Career Counselor.

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
            `})).candidates[0].content.parts[0].text.replace(/^```json\s*/i,"").replace(/^```/,"").replace(/```$/,"").replace(/^JSON\s*/i,"").trim();u(JSON.parse(o)),p("/MyCareerPath")}}function I(){const{value:s,changeValue:n,question:a,changeQuestion:r,count:l,changeCount:c,answers:d,changeAnswers:u,questions:p,changeQuestions:m,careeroptions:o,changeCareerOptions:b}=i.useContext(j),[v,h]=i.useState(!1),f=i.useRef(),x=C();function g(t){if(s){r("Evaluating..."),f.current.focus();const y=[...d,s];u(y),O(y,p,r,l,c,m,h,b,x),n("")}}function N(t){t.key==="Enter"&&g()}return i.useEffect(()=>{if(localStorage.getItem("career")){const t=JSON.parse(localStorage.getItem("career"));x(`/careerPath/${t}`);return}o.length>0&&x("/MyCareerPath")}),e.jsxs("div",{className:"bg-gray-100 flex flex-col items-center justify-center min-h-screen p-4",children:[e.jsx("div",{className:"flex justify-center p-5",children:e.jsxs("h1",{className:"text-xl md:text-2xl lg:text-3xl font-poppins font-bold text-center",children:["Fill this form to"," ",e.jsx("b",{className:"text-teal-600 font-semibold",children:"Find your Career Path"})]})}),e.jsxs("div",{className:"bg-white w-full max-w-2xl m-2 shadow-xl flex flex-col p-6 sm:p-10 rounded-xl",children:[e.jsxs("div",{className:"m-2",children:[e.jsx("div",{className:"py-8 text-teal-600 font-semibold text-lg md:text-2xl",children:v?e.jsx("span",{children:a}):e.jsx(S.Typewriter,{words:[a],cursorBlinking:!0,cursorStyle:"|",typeSpeed:30,onFinishedTyped:()=>h(!0)},a)}),e.jsx("input",{ref:f,type:"text",className:"m-2 p-2 border-b-2 w-full font-poppins focus:outline-none text-base md:text-lg",value:s,onChange:t=>{n(t.target.value)},onKeyDown:t=>N(t)})]}),e.jsx("button",{className:"bg-teal-600 ml-auto mr-2 mb-2 hover:text-white font-poppins font-semibold w-24 h-10 rounded-xl hover:bg-teal-700 hover:scale-105 transition-transform duration-200",onClick:t=>{g()},children:"Next"})]})]})}export{I as default};
