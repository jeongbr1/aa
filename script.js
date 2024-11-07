window.onload = function() {
    window.open("https://act-att.tistory.com/", "_blank");
};

const questions = [
    { 
        question: "주말에 가장 선호하는 활동은 무엇인가요?", 
        choices: [
            { text: "친구들과 활발하게 어울리기", type: "방글핑" },
            { text: "집에서 책이나 영화를 즐기기", type: "하츄핑" },
            { text: "새로운 취미나 활동에 도전하기", type: "차차핑" },
            { text: "가족과 함께 시간을 보내기", type: "믿어핑" }
        ]
    },
    { 
        question: "새로운 사람을 만났을 때, 당신의 첫 반응은?", 
        choices: [
            { text: "먼저 다가가서 말을 건다", type: "방글핑" },
            { text: "상대방이 다가오기를 기다린다", type: "하츄핑" },
            { text: "상황에 따라 다르다", type: "차차핑" },
            { text: "주변 분위기를 먼저 살핀다", type: "믿어핑" }
        ]
    },
    { 
        question: "스트레스를 받을 때, 당신은 어떻게 해소하나요?", 
        choices: [
            { text: "운동이나 야외 활동을 한다", type: "방글핑" },
            { text: "음악을 듣거나 예술 활동을 한다", type: "하츄핑" },
            { text: "친구들과 대화를 나눈다", type: "차차핑" },
            { text: "혼자만의 시간을 가진다", type: "믿어핑" }
        ]
    },
    { 
        question: "팀 프로젝트에서 당신의 역할은?", 
        choices: [
            { text: "팀을 이끄는 리더", type: "방글핑" },
            { text: "세부 사항을 꼼꼼히 챙기는 관리자", type: "믿어핑" },
            { text: "창의적인 아이디어를 제시하는 기획자", type: "하츄핑" },
            { text: "팀원들을 격려하는 분위기 메이커", type: "차차핑" }
        ]
    },
    { 
        question: "여행을 계획할 때, 당신의 스타일은?", 
        choices: [
            { text: "철저한 계획을 세운다", type: "믿어핑" },
            { text: "즉흥적으로 떠난다", type: "방글핑" },
            { text: "대략적인 계획만 세운다", type: "하츄핑" },
            { text: "동행자의 의견을 따른다", type: "차차핑" }
        ]
    },
    { 
        question: "친구가 고민을 털어놓을 때, 당신의 반응은?", 
        choices: [
            { text: "현실적인 조언을 해준다", type: "믿어핑" },
            { text: "공감하며 들어준다", type: "하츄핑" },
            { text: "함께 해결책을 찾아본다", type: "방글핑" },
            { text: "유머로 분위기를 전환한다", type: "차차핑" }
        ]
    },
    { 
        question: "새로운 기술이나 트렌드에 대한 당신의 태도는?", 
        choices: [
            { text: "적극적으로 배우고 활용한다", type: "차차핑" },
            { text: "필요할 때만 습득한다", type: "믿어핑" },
            { text: "관심은 있지만 천천히 접근한다", type: "하츄핑" },
            { text: "기존 방식을 선호한다", type: "방글핑" }
        ]
    },
    { 
        question: "중요한 결정을 내릴 때, 당신은 무엇을 중시하나요?", 
        choices: [
            { text: "논리와 사실", type: "믿어핑" },
            { text: "직관과 감정", type: "하츄핑" },
            { text: "주변 사람들의 의견", type: "차차핑" },
            { text: "자신의 가치관", type: "방글핑" }
        ]
    },
    { 
        question: "파티에서 당신의 모습은?", 
        choices: [
            { text: "중심에서 분위기를 이끈다 ", type: "방글핑" },
            { text: "조용히 대화를 나눈다", type: "하츄핑" },
            { text: " 다양한 사람들과 교류한다", type: "차차핑" },
            { text: "한두 명과 깊은 대화를 나눈다", type: "믿어핑" }
        ]
    },
    { 
        question: "목표를 설정할 때, 당신의 접근 방식은?", 
        choices: [
            { text: "구체적인 계획을 세운다", type: "믿어핑" },
            { text: "큰 그림을 그리고 유연하게 접근한다", type: "하츄핑" },
            { text: "도전적인 목표를 설정한다", type: "차차핑" },
            { text: " 현실적인 목표를 설정한다", type: "방글핑" }
        ]
    },
    // 나머지 질문들도 동일하게 추가
];

const characterDescriptions = {
    "방글핑": {
        description: `
            <strong>MBTI 유형 설명:</strong> ENFJ (정의로운 사회운동가)<br><br>
            <strong>성격:</strong> 방글핑은 언제나 긍정적이며, 친구들에게 활기를 불어넣어 주는 성격이야. 사람들과 어울리는 걸 좋아하고, 강한 리더십과 함께 다른 사람들을 격려해주는 따뜻한 마음을 가지고 있어.<br><br>
            <strong>연애 스타일:</strong> 방글핑은 파트너와의 정서적 유대감을 중요시하며, 서로에게 긍정적인 영향을 주는 관계를 원해. 사랑을 표현할 때도 적극적이고 헌신적인 편이야.<br><br>
            <strong>궁합:</strong> INFJ, INTJ와 잘 맞아. 방글핑의 외향적인 성향이 내성적인 상대방에게 새로운 경험을 제공하고, 차분한 상대방의 성향이 방글핑을 안정적으로 지지해 줄 수 있어.<br><br>
            <strong>혈액형 설명:</strong> O형<br><br>
            <strong>성격:</strong> O형인 방글핑은 활발하고 사교적인 성격으로, 주위 사람들에게 긍정적인 에너지를 전해. 리더십이 강하고 목표 지향적인 성격을 가졌어.<br><br>
            <strong>연애 스타일:</strong> 방글핑은 파트너를 향한 사랑을 과감하게 표현하며, 즐거움이 넘치는 연애를 즐겨. 파트너와 함께하는 시간을 소중히 여기고, 사랑을 통해 성장을 이루려 해.<br><br>
            <strong>궁합:</strong> A형, B형과 궁합이 좋아. 방글핑의 활기찬 성격이 신중한 A형이나 개성 넘치는 B형과 상호 보완적으로 작용해.
        `,
        mbti: "ENFJ",
        bloodType: "O형",
        imageUrl: "https://i.namu.wiki/i/fO4V5OzikUFb2Q_O48Od4oav8R4d3wjad-Q2wtc87mmEEQZthKw-Y_jEXU7pAoWF-j31ne5gnCyJHjRh_M7zhKG21d9k0IYyB3L0ZDO1z1kqkRPghN-sT1beMntY_8BqpnzObeXbmEBDDH4kXGI6AQ.webp"
    },

    "하츄핑": {
        description: `
            <strong>MBTI 유형 설명:</strong> INFP (열정적인 중재자)<br><br>
            <strong>성격:</strong> 하츄핑은 감수성이 풍부하고 창의적인 성격이야. 깊이 있는 감정을 지니고 있어 공감력이 뛰어나며, 혼자만의 시간을 소중히 여기는 내성적인 성향이 강해.<br><br>
            <strong>연애 스타일:</strong> 하츄핑은 진정한 소울메이트를 찾으려 해. 연애할 때 감정적으로 깊이 연결되기를 원하며, 연인의 내면을 이해하고 싶어 해.<br><br>
            <strong>궁합:</strong> ENFJ, ENTJ와 궁합이 좋아. 하츄핑의 따뜻한 감성과 상대방의 리더십이 서로의 장점을 돋보이게 할 수 있어.<br><br>
            <strong>혈액형 설명:</strong> AB형<br><br>
            <strong>성격:</strong> AB형인 하츄핑은 독특하고 예술적인 감각이 있으며, 사려 깊고 차분한 면이 있어. 자주 혼자만의 시간을 가지며, 타인의 감정을 잘 이해해.<br><br>
            <strong>연애 스타일:</strong> 감정을 중시하며, 특별한 사람에게 마음을 열어 깊은 교감을 원해. 하지만 너무 급하게 다가오는 상대보다는 천천히 다가오는 사람에게 끌려.<br><br>
            <strong>궁합:</strong> A형, B형과 조화를 이루어. AB형의 섬세한 면을 상대방이 보완해 주고, 반대로 상대방에게 따뜻한 감정을 전달할 수 있어.
        `,
        mbti: "INFP",
        bloodType: "AB형",
        imageUrl: "https://i.namu.wiki/i/YuDctxlUaYvnvaxFAIt3KJqeZhFU4A4oUJabgsHbcw7dc6zA-Epp3Toda6AZLIavJs3ROLCIWssd_3BOkzKCggD9ZEhIWiy3frDPRz9D-UsvponOaAnmIe3XSPcXNdJgtJIdYL9wwUdmMi5cSIuaBw.webp"
       
    },
    "멋지핑": {
        description: `
            <strong>MBTI 유형 설명:</strong> ENTP (논쟁을 즐기는 변론가)<br><br>
            <strong>성격:</strong> 멋지핑은 창의적이고 논리적이며, 도전과 탐구를 즐기는 성격이야. 남들 앞에서 주목받는 걸 좋아하며, 자유롭고 독창적인 생각으로 주변 사람들을 놀라게 하는 편이야.<br><br>
            <strong>연애 스타일:</strong> 멋지핑은 지적인 대화를 통해 파트너와 함께 성장하는 연애를 추구해. 연애할 때 유머와 재치가 넘치며, 새로운 경험을 함께 하고 싶어 해.<br><br>
            <strong>궁합:</strong> INFJ, INTJ와 궁합이 좋아. 멋지핑의 활기찬 에너지가 상대방에게 큰 자극이 되고, 상대방의 차분함이 멋지핑의 자유로운 성향을 잘 다듬어줄 수 있어.<br><br>
            <strong>혈액형 설명:</strong> B형<br><br>
            <strong>성격:</strong> B형인 멋지핑은 독창적이고 활발한 성격이야. 자유롭고 개성 넘치는 면모로 항상 새로운 경험을 추구해.<br><br>
            <strong>연애 스타일:</strong> 멋지핑은 자주적인 연애를 선호하며, 지나치게 구속받는 걸 싫어해. 파트너와 함께 유쾌한 순간을 많이 만들며, 연애에서도 자유로운 관계를 유지하길 원해.<br><br>
            <strong>궁합:</strong> A형, O형과 잘 어울려. B형의 개성과 활발한 성향이 신중한 A형이나 외향적인 O형과 상호 보완적 관계를 만들 수 있어.
        `,
        mbti: "ENTP",
        bloodType: "B형",
        imageUrl: "https://example.com/bangleping.jpg"
    },
    "믿어핑": {
        description: `
            <strong>MBTI 유형 설명:</strong> ISTJ (청렴결백한 논리주의자)<br><br>
            <strong>성격:</strong> 믿어핑은 책임감이 강하고 꼼꼼한 성격으로, 친구들에게 듬직한 존재야. 실용적이고 계획적인 성향으로 언제나 일관성 있게 행동하고 전통을 중요하게 여겨.<br><br>
            <strong>연애 스타일:</strong> 안정적이고 신뢰감을 주는 연애를 선호해. 감정보다는 행동으로 사랑을 표현하고, 평소에도 파트너를 세심하게 배려하며 안정적인 관계를 유지하려고 해.<br><br>
            <strong>궁합:</strong> ESFP, ESTP와 상호 보완적인 관계를 형성해. 믿어핑은 상대방에게 신뢰와 안정감을 제공하고, 활발한 성격의 파트너는 믿어핑에게 활력을 줄 수 있어.<br><br>
            <strong>혈액형 설명:</strong> A형<br><br>
            <strong>성격:</strong> A형인 믿어핑은 조용하고 신중한 성격으로, 자신에게 주어진 역할을 충실히 해내는 스타일이야. 꼼꼼하고 배려 깊은 면모가 돋보여.<br><br>
            <strong>연애 스타일:</strong> 신뢰와 책임감을 바탕으로 한 연애를 좋아해. 연애 초반엔 서서히 마음을 여는 편이며, 헌신적이고 안정적인 관계를 만들어 가려고 해.<br><br>
            <strong>궁합:</strong> O형, AB형과 잘 맞아. A형의 신중한 성격이 활발하고 자유로운 상대방과 서로를 보완할 수 있어.
        `,
        mbti: "ISTJ",
        bloodType: "A형",
        imageUrl: "https://i.namu.wiki/i/78fm4ftBvESY-wrQQO5a7QyNZLbFaHZgzEucu2c6o2WJRlkSC9UYADJK0E7hA-8IvU8BCkWZccRBt71M3vFl2DX42lxsXmWi3C8HY_5cHEPlbZ-rOG83WDC5OuA2VhUseRA4Kh48H7mDw17nebX7QQ.webp"
    },
    "차차핑": {
        description: `
            <strong>MBTI 유형 설명:</strong> ISFP (호기심 많은 예술가)<br><br>
            <strong>성격:</strong> 차차핑은 유연하고 상황에 잘 적응하는 성격으로, 주위 사람들에게 친근감을 주며 배려심이 깊어. 언제나 밝고 긍정적인 태도로 분위기를 조화롭게 만들며, 협력과 조화를 중시해.<br><br>
            <strong>연애 스타일:</strong> 차차핑은 자유롭고 유쾌한 연애를 선호하며, 파트너와 함께할 때 자연스럽고 편안한 관계를 추구해. 감정 표현이 풍부하고, 상대방과 감정적으로 깊이 연결되기를 원해.<br><br>
            <strong>궁합:</strong> ESFP, ESTJ와 잘 어울려. 차차핑의 따뜻하고 유연한 성격이 외향적이고 활동적인 상대방과 조화를 이루며, 서로에게 긍정적인 영향을 줄 수 있어.<br><br>
            <strong>혈액형 설명:</strong> O형<br><br>
            <strong>성격:</strong> O형인 차차핑은 활달하고 사교적인 성격으로, 주변 사람들에게 긍정적인 에너지를 전해. 상황에 잘 적응하며, 친근감과 배려심이 돋보이는 편이야.<br><br>
            <strong>연애 스타일:</strong> 차차핑은 파트너와 함께하는 순간을 즐기며, 유연하고 자유로운 연애를 선호해. 강한 구속보다는 서로에게 자연스럽게 끌리는 관계를 중요하게 여겨.<br><br>
            <strong>궁합:</strong> A형, B형과 궁합이 좋아. 차차핑의 자유롭고 따뜻한 성격이 신중한 A형이나 개성 강한 B형과 서로를 보완할 수 있어.
        `,
        mbti: "ISFP",
        bloodType: "O형",
        imageUrl: "https://i.namu.wiki/i/QUvPCOjYZV9AfVyOEnH9gn6YLdyC_0uwO2po6wYXOVhEnP8NF52uPO7mOkMfWcjwij0gC8pirhO_ySLKHtp8arnFB0QQlN0TKJTYL46yDoIQcOhGghHViZlL6xX09BBQTdcLrjcHL9JPYddTh0euKQ.webp"
    }
};

let currentQuestion = 0;
const score = {
    "방글핑": 0,
    "하츄핑": 0,
    "멋지핑": 0,
    "믿어핑": 0,
    "차차핑": 0
};

document.addEventListener("DOMContentLoaded", () => {
    displayQuestion();
});

function displayQuestion() {
    const questionText = document.getElementById("question");
    const choicesContainer = document.getElementById("choices");

    const current = questions[currentQuestion];
    questionText.innerText = current.question;
    choicesContainer.innerHTML = "";

    current.choices.forEach(choice => {
        const button = document.createElement("button");
        button.innerText = choice.text;
        button.addEventListener("click", () => selectChoice(choice.type));
        choicesContainer.appendChild(button);
    });
}

function selectChoice(type) {
    score[type]++;
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("question-container").classList.add("hidden");
    const resultContainer = document.getElementById("result-container");
    const resultText = document.getElementById("result-text");

    // 가장 높은 점수를 받은 캐릭터를 결과로 설정
    const result = Object.keys(score).reduce((a, b) => score[a] > score[b] ? a : b);
   

    // characterDescriptions에서 결과 캐릭터의 설명을 가져와 표시
    const characterInfo = characterDescriptions[result];
    resultText.innerHTML = `
        <h2 class="result-title">당신은 ${result}입니다!</h2>
        <div class="result-image-container">
            <img src="${characterInfo.imageUrl}" alt="${result}" class="result-image">
        </div>
        <div class="result-description">
            ${characterInfo.description}
        </div>
    `;

    resultContainer.classList.remove("hidden");
}
