import React from "react";
function Skills() {
    return (
        <div className="px-10 mt-40">
            <p className="uppercase tracking-wide opacity-70">Services</p>
            <p className="text-6xl font-bold mt-2 text-red-400">Skill set</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">
                {[
                    "Python",
                    "Javascript",
                    "React"
                ].map((skill, index) => (
                    <div key={index}
                        className="bg-[#15172e] p-8 rounded-2xl shadow-lg hover:shadow-red-500/20 hover:-y-2 transition transform duration-300 animate-fade-in"
                        >
                            <h4 className="text-xl font-semibold mb-3 text-red-400">{skill}</h4>
                            <p className="text-sm opacity-70 leading-related">
                                It is a long established fact that all reader will be distracted by readable content.
                            </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills;