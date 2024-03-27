
// import * as FormData from 'form-data';
// const FormData = require('form-data');
import axios from 'axios'
const uuid = crypto.randomUUID()
const invokeUrl = 'https://76mjhq6gjw.apigw.ntruss.com/custom/v1/29548/b76957781f2da1d145048bfe53cec9dff5380d89f1a338f6e71daad7f674490a/infer'
const secretKey = 'U0tLVG1qcnNjZVNsYU9EaFBtUWtSaEx3c1pNVkR3b0I='


export function requestWithBase64(base64Data:string) {
  const message = {
    version: 'V2',
    requestId: uuid, // unique string
    timestamp: 0,
    lang: 'ko',
    images: [
      {
        format: 'png',
        data: base64Data, // image base64 string(only need part of data). Example: base64String.split(',')[1]
        name: 'diagnosis',
        templateIds: [29548]
      },
    ],
  };
  console.log('데이터',base64Data)
  console.log('메시지',message)

  axios
    .post(
      invokeUrl, // APIGW Invoke URL
      message,
      {
        headers: {
          'X-OCR-SECRET': secretKey, // Secret Key
          // 'Content-Type': 'application/json',
        },
      },
    )
    .then(res => {
      if (res.status === 200) {
        console.log('requestWithBase64 response:', res.data)
      }
    })
    .catch(e => {
      console.warn('requestWithBase64 error', e.response)
    })
}




export function requestWithFile(imageUrl: string) {
  const message = {
    images: [
      {
        format: 'png', // 파일 형식
        name: 'diagnosis', // 파일 이름
        templateIds: [29548] // 템플릿 ID
      },
    ],
    requestId: uuid, // 고유한 문자열 생성
    timestamp: Date.now(),
    version: 'V2',
  };

  // 이미지 URL을 fetch를 사용하여 가져오기
  fetch(imageUrl)
    .then((response) => response.blob())
    .then((blob) => {
      const file = new File([blob], 'FundingRegister.png'); // 이미지 파일 생성
      const formData = new FormData();
      formData.append('file', file);
      formData.append('message', JSON.stringify(message));

      axios
        .post(
          invokeUrl, // APIGW Invoke URL
          formData,
          {
            headers: {
              'X-OCR-SECRET': secretKey, // Secret Key
              // ...formData.getHeaders(),
            },
          },
        )
        .then((res) => {
          if (res.status === 200) {
            console.log('requestWithFile response:', res.data);
          }
        })
        .catch((e) => {
          console.warn('requestWithFile error', e.response);
        });
    })
    .catch((error) => {
      console.error('Error fetching image:', error);
    });
}

