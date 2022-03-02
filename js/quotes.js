const quotes = [
    {
        quote: '만족할 줄 아는 사람은 진정한 부자이고, 탐요그러운 사람은 진실로 가난한 사람이다.',
        author: '솔론',
    },
    {
        quote: '영원히 살 것처럼 꿈꾸고 오늘 죽을 것처럼 살아라',
        author: '제임스 딘',
    },
    {
        quote: '<지금이 최악>이라고 말할 힘이 있다면 아직은 최악이 아니다.',
        author: '윌리엄 셰익스피어',
    },
    {
        quote: '인생은 자전거를 타는 것과 같다. 계속 페달을 밟는 한 넘어질 염려는 없다.',
        author: '클라우드 페퍼',
    },
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = `${todaysQuote.quote} - `;
author.innerText = todaysQuote.author;