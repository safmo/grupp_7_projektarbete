function addSkill(skill) {
  const progressbar = `
  <div class="progress__item">
    <p class="progress__text" style="width:${skill.lvl}%" data-value="${skill.lvl}">${skill.skill}</p>
    <div class="progress__wrapper">
      <div class="progress__bar" style="width: ${skill.lvl}%" title="${skill.skill}" role="progressbar"
        aria-valuetext="${skill.skill} skill level ${skill.lvl}%" aria-valuenow="${skill.lvl}" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>
    `;
  return progressbar;
}

function addSkills(skills) {
  let output = "";
  skills.forEach(function (skill) {
    output += addSkill(skill);
  });
  return output;
}

const progressbarArea = document.querySelector(".progress");

skills = [
  {
    skill: "CSS",
    lvl: "96",
  },
  {
    skill: "HTML",
    lvl: "92",
  },
  {
    skill: "SVG",
    lvl: "72",
  },
  {
    skill: "Python",
    lvl: "63",
  },
  {
    skill: "JavaScript",
    lvl: "56",
  },
];

progressbarArea.insertAdjacentHTML("beforeend", addSkills(skills));
