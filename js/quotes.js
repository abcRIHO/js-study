const quotes = [
    {
        quote: '나는 천재다',
        author: '감마',
    },
    {
        quote: '요새 품고 사는 명언이 없음',
        author: '두부',
    },
    {
        quote: '양파는 갈릭이지 근데 마늘도 갈릭인데',
        author: '유자',
    },
    {
        quote: '초연결된 세계의 반복되는 위험을 어떻게 관리할 것인가?',
        author: '이언 골딘',
    },
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;