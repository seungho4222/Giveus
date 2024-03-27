// 입력된 주민등록번호의 앞자리에서 생년월일 정보를 추출하여 나이를 계산하는 함수
function calculateAge(birth,gender) {
    // 주민등록번호에서 생년월일 정보를 추출
    const birthYear = parseInt(birth.substr(0, 2)); // 년도의 뒷 두 자리
    const birthMonth = parseInt(birth.substr(2, 2));
    const birthDay = parseInt(birth.substr(4, 2));

    // 현재 날짜 정보를 가져오기
    const today = new Date();
    const currentYear = today.getFullYear() % 100; // 년도의 뒷 두 자리
    const currentMonth = today.getMonth() + 1; // getMonth()는 0부터 시작하므로 1을 더해줌
    const currentDay = today.getDate();

    // 생년월일을 기준으로 현재 나이 계산
    let age = null;
    if (gender === '1' || gender === '2') {
        age = currentYear + 100 - birthYear
        // 생일이 지나지 않은 경우 한 살을 뺌
        if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
            age--;
        }
    } else if (gender === '3' || gender === '4') {
        age = currentYear - birthYear;
        console.log(birthYear);
        if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
            age--;
        }
    }
    return age;
}

// // 주민등록번호 앞자리 예시
// const idNumber = '970101'; // YYMMDD 형식

// // 나이 계산
// const age = calculateAge(idNumber,'1');
// console.log("나이:", age);