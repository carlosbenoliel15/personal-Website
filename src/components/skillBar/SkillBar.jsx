import React from 'react';
import './SkillBar.css';

function SkillsBar() {
  const frontEndSkills = [
    { title: 'HTML', value: 70 },
    { title: 'CSS', value: 70 },
    { title: 'JavaScript', value: 75 },
    { title: 'AngularJS', value: 55 },
    { title: 'ReactJS', value: 55 },
    { title: 'BootStrap', value: 40 },
    { title: 'Node', value: 40 }
  ];

  const backEndSkills = [
    { title: 'Java', value: 70 },
    { title: 'Python', value: 75 },
    { title: 'C', value: 30 },
    { title: 'SQL', value: 40 },
    { title: 'MongoDB', value: 65 },
    { title: 'Express', value: 60},
  ];

  const getStatus = (value) => {
    if (value >= 0 && value <= 50) {
      return 'Beginner';
    } else if (value > 50 && value <= 80) {
      return 'Intermediate';
    } else if (value > 80 && value <= 100) {
      return 'Expert';
    }
  };

  return (
    <section className="container container__SkillSBar">
      <div className="title-section" id="skills">
        <h2>SkillSets</h2>
        <h5>
          To learn more about these skills, check out my <a href="https://linkedin.com/in/carlos-martins-777b75236" >LinkedIn</a> page!
        </h5>
      </div>
      <div className="content-section">
        <div className="skil__container">
          <h2>Front-End Development</h2>
          {frontEndSkills.map((skill, index) => (
            <div className="skill-box" key={index}>
              <span className="title">
                {skill.title}
                <span className="level"> ({getStatus(skill.value)})</span>
              </span>
              <div className="skill-bar">
                <span
                  className={`skill-per ${skill.title.toLowerCase()} ${getStatus(skill.value)}`}
                  style={{ width: `${skill.value}%` }}
                ></span>
              </div>
            </div>
          ))}
        </div>

        <div className="skil__container">
          <h2>Back-End Development</h2>
          {backEndSkills.map((skill, index) => (
            <div className="skill-box" key={index}>
              <span className="title">
                {skill.title}
                <span className="level"> ({getStatus(skill.value)})</span>
              </span>
              <div className="skill-bar">
                <span
                  className={`skill-per ${skill.title.toLowerCase()} ${getStatus(skill.value)}`}
                  style={{ width: `${skill.value}%` }}
                ></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsBar;
