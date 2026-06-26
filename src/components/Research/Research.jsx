import React from "react";
import { motion } from "framer-motion";
import { FiFileText } from "react-icons/fi";
import { FaAward } from "react-icons/fa";
import research from "../../data/research";
import "./Research.css";

function Research() {

return (

<section
id="research"
className="research"
>

<div className="research-header">

<span>
RESEARCH WORK
</span>

<h2>
Publications
</h2>

<p>
Published research papers showcasing my
interest in Machine Learning, Artificial
Intelligence and Cyber Security.
</p>

</div>

<div className="research-grid">

{research.map((item,index)=>(

<motion.div

key={item.id}

className="research-card"

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.7,
delay:index*.2
}}

>

<div className="research-number">

0{item.id}

</div>

<h3>

{item.title}

</h3>

<p>

{item.description}

</p>

<div className="research-tags">

{item.domain.map((tag,id)=>(

<span key={id}>

{tag}

</span>

))}

</div>

<div className="research-links">

<a
href={item.paper}
target="_blank"
rel="noreferrer"
>

<FiFileText />

View Paper

</a>

<a
href={item.certificate}
target="_blank"
rel="noreferrer"
>

<FaAward />

Certificate

</a>

</div>

</motion.div>

))}

</div>

</section>

)

}

export default Research;