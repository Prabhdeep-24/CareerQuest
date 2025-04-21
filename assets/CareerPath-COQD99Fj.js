import{a as d,b as p,r as i,j as e}from"./index-CdhNCFc0.js";import{d as m,G as u}from"./index-miLqGuR7.js";const h=new u({apiKey:"AIzaSyAfTciGt4WMBbZBUNo85V5tVa7edz3xl3E"});async function x(a,r){const s=(await h.models.generateContent({model:"gemini-2.0-flash",contents:` Given a career title, generate a well structured and well detailed  step-by-step career path in a format ready for a flowchart.

            Structure the output in clearly separated stages.
            For each stage, include:

            Stage Title (e.g., 'Learn Python Basics')

            What to Learn

            Best Free Resources (YouTube links, Coursera links, etc.)

            Output/Goal after completing this stage (e.g., 'Able to write basic Python programs')

            Maintain the order of learning: starting from basics to mastery.

            Format the output like this:

            [
            {
                "stage": "Foundation Stage",
                "title": "Learn Python Basics",
                "description": "Understand syntax, loops, conditionals, functions, data structures in Python.",
                "resources": [
                {"type": "YouTube", "name": "Python for Beginners – freeCodeCamp", "link": "https://youtu.be/rfscVS0vtbw"},
                {"type": "Coursera", "name": "Programming for Everybody", "link": "https://www.coursera.org/learn/python"}
                ],
                "goal": "Able to code basic programs and algorithms using Python."
            },
            {
                "stage": "Mathematical Foundation",
                "title": "Learn Statistics and Probability",
                ...
            },
            ...
            ]

            Output only the array JSON (no extra explanation).
            Keep it clean so it can be used to directly build a flowchart.

            Career Title: ${a}

            `})).candidates[0].content.parts[0].text.replace(/^```json\s*/i,"").replace(/^```/,"").replace(/```$/,"").replace(/^JSON\s*/i,"").trim();return r(JSON.parse(s)),s}function b(){d();let{title:a}=p();const[r,o]=i.useState([]);let s=i.useRef(null);return i.useEffect(()=>{localStorage.getItem("career")?o(JSON.parse(localStorage.getItem("careerPath"))):(async()=>{const n=await x(a,o);localStorage.setItem("careerPath",n),localStorage.setItem("career",JSON.stringify(a))})()},[a]),e.jsx("div",{className:"",children:r.length>0?e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:"bg-gradient-to-r from-teal-400 to-blue-600  shadow-xl w-full",children:e.jsx("h1",{className:"p-8 text-3xl md:text-5xl font-extrabold font-poppins text-white drop-shadow-sm text-center",children:a})}),r.map((t,c)=>{const n=s.current!==t.stage;return n&&(s.current=t.stage),e.jsxs("div",{className:"p-10 rounded-lg bg-white w-300 my-10 flex flex-col justify-center hover:scale-105 duration-300",children:[n&&e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"text-teal-600 text-2xl md:text-3xl font-poppins font-bold h-10 p-5",children:t.stage}),e.jsx("hr",{className:"w-1/3 border-t-2 border-teal-500 my-10  w-full rounded-md"})]}),e.jsx("h2",{className:"text-xl md:text-2xl font-poppins font-bold h-10 p-5",children:t.title}),e.jsx("p",{className:"p-5 text-xl font-poppins font-semibold",children:t.description}),e.jsx("ul",{className:"list-disc list-inside",children:t.resources.map((l,g)=>e.jsx("li",{className:"font-semibold fint-poppins px-15 py-2",children:e.jsxs("a",{href:l.link,target:"_blank",children:[l.name,"(",l.type,")"]})}))}),e.jsxs("p",{className:"px-10 font-semibold",children:["Goal: ",e.jsx("span",{className:"text-teal-600",children:t.goal})]})]})})]}):e.jsx("div",{className:"text-teal-600 font-semibold text-2xl",children:e.jsx(m.Typewriter,{words:["Generating..."],loop:!0,typeSpeed:30,cursor:"|",cursorBlinking:!0})})})}export{b as default};
