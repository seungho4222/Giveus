// import { randomBytes } from 'crypto';
import { ec as EC } from 'elliptic'; // ES6 모듈로 가져오기
import { keccak256 } from 'web3-utils'; // ES6 모듈로 가져오기

const ellipticCurve = new EC('secp256k1');

// 랜덤한 32바이트(256비트)를 생성하여 개인키로 사용
export function createPrivateKey(): string {
    const privateKeyBytes = new Uint8Array(32);
    window.crypto.getRandomValues(privateKeyBytes);
    const privateKeyHex = Array.from(privateKeyBytes).map(byte => byte.toString(16).padStart(2, '0')).join('');
    return privateKeyHex;
}

// 공개키 생성
export function getPublicKey(privateKey: string): string {
  const keypair = ellipticCurve.keyFromPrivate(privateKey, 'hex');
  const publicKey = keypair.getPublic('hex');
  return publicKey;
}

// 주소 생성
export function getEthereumAddress(publicKey: string): string {
  const publickeyBuffer = new TextEncoder().encode(publicKey);
  const hash = keccak256(publickeyBuffer.slice(1)); // 버퍼 슬라이스에서 시작 바이트를 생략합니다.
  const address = '0x' + hash.substring(26);
  return address;
}

let privateKey: string = createPrivateKey();
const publicKey: string = getPublicKey(privateKey);
const address: string = getEthereumAddress(publicKey);

console.log('생성된 개인키:', privateKey);
console.log('생성된 공개키:', publicKey);
console.log('생성된 주소:', address);

// 아래 코드는 에러가 발생하지 않도록 수정되었습니다.
