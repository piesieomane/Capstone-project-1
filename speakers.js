const speakers = [
  {
    name: 'Piesie Omane Yeboah',
    profile: 'Senior Chart Analyst',
    image: 'images/professor-1.jpg',
    description:
      'Trading for 5years now. Trades with technical. very good at trading',
  },
  {
    name: 'Hannah Ansah',
    profile: 'Senior Chart Analyst',
    image: 'images/professor-2.jpg',
    description:
      'Trading for 5years now. Trades with technical and fundamental analysis. She also has an E-commerse business',
  },
  {
    name: 'Osei Yeboah',
    profile: 'Chart Analyst',
    image: 'images/professor-3.jpg',
    description:
      'Photographer, philantropist who also does wee in Forex trading, cyr',
  },
  {
    name: 'Ato Kwasi',
    profile: 'Senior Chart Analyst',
    image: 'images/professor-4.jpg',
    description:
      'Trading for 5years now. Trades with technical. very good at trading',
  },
  {
    name: 'Sarah Asimeng',
    profile: 'Chart Analyst',
    image: 'images/professor-5.jpg',
    description:
      'Photographer, philantropist who also does wee in Forex trading, cyr',
  },
  {
    name: 'Charlotte Esinam',
    profile: 'Senior Chart Analyst',
    image: 'images/professor-6.jpg',
    description:
      'She operates a joint venture called FIP (Forever in Profit) ,ohio-DC',
  },
];

speakers.forEach((element) => {
  const speakers = document.querySelector('.grid');
  const speaker = document.createElement('div');
  speaker.innerHTML = `
    <div class="parent">
      <img src="images/chess.png" class="dev-bg-tiles" alt="chess" />
      <img src="${element.image}" alt="" class="developer-image" />
    </div>
    <div class="developer-info">
      <h3 class="developer-name">${element.name}</h3>
      <p class="developer-followers">${element.profile}</p>
      <hr class="divider" />
      <p class="developer-details">
        ${element.description}
      </p>
    </div>
  </div>`;

  speakers.appendChild(speaker);
  speaker.classList.add('developer');
});
