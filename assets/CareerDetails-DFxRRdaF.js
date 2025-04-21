import{r as i,a as r,j as t}from"./index-CIlH8VAY.js";import{G as l}from"./index-CcM53O3_.js";import{d}from"./index-TE-agS_H.js";const c=new l({apiKey:"AIzaSyAfTciGt4WMBbZBUNo85V5tVa7edz3xl3E"});async function p(a,e){const n=await c.models.generateContent({model:"gemini-2.0-flash",contents:`You are a professional Career Counselor.

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
        `}),o=n.candidates[0].content.parts[0].text.replace(/^```json\s*/i,"").replace(/^```/,"").replace(/```$/,"").replace(/^JSON\s*/i,"").trim();return console.log(JSON.parse(o)),a(JSON.parse(o)),n.candidates[0].content.parts[0].text}function h(){const[a,e]=i.useState([]),n=r(),{title:o}=n.state||{};return i.useEffect(()=>{p(e,o)},[]),t.jsx("div",{className:"w-full h-full",children:a.length>0?a.map((s,u)=>t.jsxs("div",{className:"p-10",children:[t.jsx("h1",{className:"text-2xl md:text-3xl font-poppins font-bold text-gray-800 mb-4 tracking-tight",children:s.title}),t.jsx("hr",{className:"w-1/3 border-t-2 border-teal-500 rounded-md"}),t.jsx("p",{className:"text-lg text-xl mb-8 font-poppins leading-relaxed",children:s.description})]})):t.jsx("div",{className:"py-8 text-teal-600 font-semibold text-2xl",children:t.jsx(d.Typewriter,{words:["Loading..."],loop:!1,cursor:"|",cursorBlinking:!0,typeSpeed:30})})})}export{h as default};
