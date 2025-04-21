import{r,a as l,j as t}from"./index-Snrv6sE5.js";import{d,G as c}from"./index-CCsuDWpy.js";const p=new c({apiKey:"AIzaSyAfTciGt4WMBbZBUNo85V5tVa7edz3xl3E"});async function x(o,e){const n=await p.models.generateContent({model:"gemini-2.0-flash",contents:`You are a professional Career Counselor.

                    Your task is to explain the career path of ${e} to a student in a friendly, humanized, and easy-to-understand tone.

                    Cover the following sections in depth:

                    Introduction: Give a detailed overview of the field of ${e}.

                    Importance: Explain why ${e} is crucial in today's world and industries.

                    Role: Describe what a typical ${e} does in day-to-day work.

                    What to Study: Mention key skills, topics, and knowledge areas someone must study to become a ${e}.

                    Salary: Provide information about average salaries globally and factors affecting them (like experience, region).

                    Return the output strictly as a JSON array, where each element is an object with exactly two fields:

                    "title": (string) — the title of the section (e.g., "Introduction")

                    "description": (string) — the detailed human-like explanation of that section.

                    Important Instructions:

                    Write in a friendly but professional tone, as if mentoring a student.

                    Do not use any headings or markdown syntax like ### or bullet points.

                    Ensure it feels like a conversation, not just textbook information.

                    Only output pure valid JSON — no additional text, markdown, explanations, or formatting.

                    Make sure the JSON is directly parsable.
        `}),a=n.candidates[0].content.parts[0].text.replace(/^```json\s*/i,"").replace(/^```/,"").replace(/```$/,"").replace(/^JSON\s*/i,"").trim();return localStorage.setItem(e,a),o(JSON.parse(a)),n.candidates[0].content.parts[0].text}function f(){const[o,e]=r.useState([]),n=l(),{title:a}=n.state||{};return r.useEffect(()=>{const s=localStorage.getItem(a);s?e(JSON.parse(s)):x(e,a)},[a]),t.jsxs("div",{className:"w-full h-full",children:[t.jsx("div",{className:"bg-gradient-to-r from-teal-400 to-blue-600  shadow-xl w-full",children:t.jsx("h1",{className:"p-8 text-3xl md:text-5xl font-extrabold font-poppins text-white drop-shadow-sm text-center",children:a})}),o.length>0?o.map((s,i)=>t.jsxs("div",{className:"p-4 sm:p-10",children:[t.jsx("h1",{className:"text-2xl md:text-3xl font-poppins font-bold text-gray-800 mb-4 tracking-tight",children:s.title}),t.jsx("hr",{className:"w-1/3 border-t-2 border-teal-500 rounded-md"}),t.jsx("p",{className:"text-base sm:text-lg mb-8 font-poppins leading-relaxed",children:s.description})]},i)):t.jsx("div",{className:"py-4 sm:py-8 text-teal-600 font-semibold text-xl sm:text-2xl",children:t.jsx(d.Typewriter,{words:["Loading..."],loop:!1,cursor:"|",cursorBlinking:!0,typeSpeed:30})})]})}export{f as default};
