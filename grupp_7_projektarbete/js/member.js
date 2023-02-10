function memberThumbnail(member) {
  const thumbnail = `
  <div class="thumbnail">
    <header class="thumbnail__header">
      <h4 class="thumbnail__title thumbnail__title--tertiary">${member.first_name} ${member.last_name}</h4>
      <p class="thumbnail__text thumbnail__text--right"><a href="mailto:${member.mail}@du.se"
          title="Mail ${member.first_name} ${member.last_name}">${member.mail}@du.se</a>
      </p>
    </header>           
    <div class="thumbnail__image-container">
      <picture class="thumbnail__image">
        <source
          type="image/webp"
          srcset="
            ./img/informative/member/${member.id}/webp/${member.id}_256.webp 256w,
            ./img/informative/member/${member.id}/webp/${member.id}_860.webp 860w"
          sizes="
            (min-width: 1600px) calc(12.29vw - 18px),
            (min-width: 1200px) calc(20vw - 15px),
            (min-width: 1000px) calc(28.89vw - 16px),
            (min-width: 780px) 45vw,
            (min-width: 480px) calc(50vw - 26px),
            calc(100vw - 38px)" />
        <source 
          type="image/jpg"
          srcset="
            ./img/informative/member/${member.id}/jpg/${member.id}_256.jpg 256w,
            ./img/informative/member/${member.id}/jpg/${member.id}_860.jpg 860w"
          sizes="
            (min-width: 1600px) calc(12.29vw - 18px),
            (min-width: 1200px) calc(20vw - 15px),
            (min-width: 1000px) calc(28.89vw - 16px),
            (min-width: 780px) 45vw,
            (min-width: 480px) calc(50vw - 26px),
            calc(100vw - 38px)" />
        <img 
          src="./img/informative/member/${member.id}/jpg/${member.id}860.jpg"
          width="860" height="860"
          alt="Image of ${member.first_name} ${member.last_name}">
      </picture>
      <a class="thumbnail__link" href="./account.html" title="Link to ${member.first_name} ${member.last_name} profile">Go to profile</a>
    </div>
  </div>
  `;
  return thumbnail;
}

function addMemberThumbnails(members) {
  let output = "";
  members.forEach(function (member) {
    output += memberThumbnail(member);
  });
  return output;
}

const gallery = document.querySelector(".gallery");

members = [
  {
    id: "000001",
    first_name: "Robin",
    last_name: "Vredeskog",
    mail: "a2z",
  },
  {
    id: "000002",
    first_name: "Jane",
    last_name: "Sarani",
    mail: "a2z",
  },
  {
    id: "000003",
    first_name: "Nynaeve",
    last_name: "Al'Meara",
    mail: "a2z",
  },
  {
    id: "000004",
    first_name: "Ida",
    last_name: "Olsen",
    mail: "a2z",
  },
  {
    id: "000005",
    first_name: "Jonathan",
    last_name: "Eriksson",
    mail: "a2z",
  },
  {
    id: "000006",
    first_name: "Isak",
    last_name: "Rapp",
    mail: "a2z",
  },
  {
    id: "000007",
    first_name: "Min",
    last_name: "Farshaw",
    mail: "a2z",
  },
  {
    id: "000008",
    first_name: "Filippa",
    last_name: "Masonei",
    mail: "a2z",
  },
  {
    id: "000009",
    first_name: "Elayne",
    last_name: "Trakand",
    mail: "a2z",
  },
  {
    id: "000010",
    first_name: "Perrin",
    last_name: "Aybara",
    mail: "a2z",
  },
  {
    id: "000011",
    first_name: "Tuon",
    last_name: "Athaem",
    mail: "a2z",
  },
  {
    id: "000012",
    first_name: "Kamarile",
    last_name: "Maradim",
    mail: "a2z",
  },
  {
    id: "000013",
    first_name: "Fail",
    last_name: "Bashere",
    mail: "a2z",
  },
  {
    id: "000014",
    first_name: "Tom",
    last_name: "Bombadill",
    mail: "a2z",
  },
  {
    id: "000015",
    first_name: "Elan",
    last_name: "Morin Tedronai",
    mail: "a2z",
  },
  {
    id: "000016",
    first_name: "Mierin",
    last_name: "Eronaile",
    mail: "a2z",
  },
  {
    id: "000017",
    first_name: "Barid Bel",
    last_name: "Medar",
    mail: "a2z",
  },
];

gallery.insertAdjacentHTML("beforeend", addMemberThumbnails(members));
