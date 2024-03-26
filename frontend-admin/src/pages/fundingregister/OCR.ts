
// import * as FormData from 'form-data';
// const FormData = require('form-data');
import axios from 'axios'

const uuid = crypto.randomUUID()
const invokeUrl = 'https://76mjhq6gjw.apigw.ntruss.com/custom/v1/29548/b76957781f2da1d145048bfe53cec9dff5380d89f1a338f6e71daad7f674490a/infer'
const secretKey = 'U0tLVG1qcnNjZVNsYU9EaFBtUWtSaEx3c1pNVkR3b0I='

export function requestWithBase64(base64Data:string) {
  axios
    .post(
      invokeUrl, // APIGW Invoke URL
      {
        images: [
          {
            format: 'PNG', // file format
            name: 'diagnosis', // image name
            data: base64Data.split(',')[1], // image base64 string(only need part of data). Example: base64String.split(',')[1]
            templateIds:[29548]
          },
        ],
        requestId: uuid, // unique string
        timestamp: Date.now(),
        version: 'V2',
        
      },
      {
        headers: {
          'X-OCR-SECRET': secretKey, // Secret Key
          'Content-Type':'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:3001',
        //   'Access-Control-Allow-Methods': 'post',
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

// export function requestWithFile() {
//   const file = '' // image file object. Example: fs.createReadStream('./example.png')
//   const message = {
//     images: [
//       {
//         format: 'PNG', // file format
//         name: 'diagnosis', // file name
//       },
//     ],
//     requestId: uuid, // unique string
//     timestamp: Date.now(),
//     version: 'V2',
//   }

//   const formData = new FormData()

//   formData.append('file', file)
//   formData.append('message', JSON.stringify(message))

//   axios
//     .post(
//       invokeUrl, // APIGW Invoke URL
//       formData,
//       {
//         headers: {
//           'X-OCR-SECRET': secretKey, // Secret Key
//           ...formData.getHeaders(),
//         },
//       },
//     )
//     .then(res => {
//       if (res.status === 200) {
//         console.log('requestWithFile response:', res.data)
//       }
//     })
//     .catch(e => {
//       console.warn('requestWithFile error', e.response)
//     })
// }

