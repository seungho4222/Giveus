import { useEffect, useState } from 'react'
import Web3, { Uint } from 'web3'
import FundRaisingContract from '../assets/data/FundRaising.json'
import Button from '@/common/button/Button'
import { Input } from '@/common/input/Input'

const BlockchainTest = () => {

  const ETHEREUM_RPC_URL = 'https://rpc.ssafy-blockchain.com'
  const privateKey =
    'ccde9fd1e91c71a46ebca973189dec872dfc408852dd2078244b7e5c61b5990c'
  const hospitalAddress = '0x395950AD0039Df7232a37EE11FA92ec93F58F1fa'
  const contractAddress = '0xB4718410f291fDeD9DEEb674829FEE9416B21F3B'
  // const LOCAL_RPC_URL = 'HTTP://127.0.0.1:7545';

  // Web3.js를 사용하여 블록체인 네트워크와 연결..
  const web3 = new Web3(Web3.givenProvider || ETHEREUM_RPC_URL)
  // const web3 = new Web3(new Web3.providers.HttpProvider(ETHEREUM_RPC_URL));

  // 스마트 계약 인스턴스 생성
  const contractInstance = new web3.eth.Contract(
    FundRaisingContract.abi, // ABI
    contractAddress, // 스마트 계약 주소(CA)
  )

  // createFunding 함수 호출
  const createFunding = async () => {
    try {
      // 펀딩 정보를 저장할 때 필요한 매개변수 설정
      const goalAmount = 100000000 // 예시: 목표 금액
      const startTime = '20240327'
      const endTime = '20240404'
      const title = '소아암 5세(남)' // 예시: 펀딩 제목
      const hospitalName = '싸피병원' // 병원 이름
      const nonce = await web3.eth.getTransactionCount(hospitalAddress)
      const gasPrice = await web3.eth.getGasPrice() // 현재 가스가격

      // 트랜잭션 객체 생성
      const txObject = {
        nonce: web3.utils.toHex(nonce),
        // gasPrice: web3.utils.toWei('0.01', 'gwei'), // 송신자가 gas당 지불하고자 하는 비용
        gasPrice: gasPrice, // 송신자가 gas당 지불하고자 하는 비용
        gasLimit: 30000000, // 송신자가 트랜잭션 실행을 위해 지불할 용의가 있는 gas비용 최대치
        value: 0, // 송신자에서 수신자로 전송되는 금액
        from: hospitalAddress,
        to: contractAddress,
        data: contractInstance.methods
          .createFunding(
            goalAmount,
            startTime,
            endTime,
            title,
            hospitalAddress,
            hospitalName,
          )
          .encodeABI(),
      }
      console.log(txObject)

      // 개인키 활용하여 트랜잭션 서명 : 트랜잭션 유효성 검증
      const signedTx = await web3.eth.accounts.signTransaction(
        txObject,
        privateKey,
      )
      console.log('서명된 트랜잭션 생성', signedTx)

      // 서명된 트랜잭션 전송
      const txReceipt = await web3.eth.sendSignedTransaction(
        signedTx.rawTransaction,
      )
      console.log('트랜잭션 전송 성공:', txReceipt)
    } catch (error) {
      console.error('Error creating funding:', error)
    }
  }

  // 펀딩 정보 조회 함수 추가
  const getFundingInfo = async () => {
    try {
      const index = 0 // 조회할 펀딩 인덱스 설정
      const result = await contractInstance.methods.getFunding(index).call()
      console.log('펀딩 정보:', result)
    } catch (error) {
      console.error('Error fetching funding info:', error)
    }
  }

  const addDonor = async (
    index: number,
    donorName: string,
    date: number,
    amount: number,
  ) => {
    try {
      // 함수를 호출할 때 필요한 트랜잭션 매개변수 설정
      const nonce = await web3.eth.getTransactionCount(hospitalAddress)
      const gasPrice = await web3.eth.getGasPrice()

      // 트랜잭션 객체 생성
      const txObject = {
        nonce: web3.utils.toHex(nonce),
        gasPrice: gasPrice,
        gasLimit: 30000000,
        value: 0,
        from: hospitalAddress,
        to: contractAddress,
        data: contractInstance.methods
          .addDonation(index, donorName, date, amount)
          .encodeABI(),
      }

      // 개인키를 사용하여 트랜잭션 서명
      const signedTx = await web3.eth.accounts.signTransaction(
        txObject,
        privateKey,
      )
      console.log('서명된 트랜잭션 생성', signedTx)

      // 서명된 트랜잭션 전송
      const txReceipt = await web3.eth.sendSignedTransaction(
        signedTx.rawTransaction,
      )
      console.log('트랜잭션 전송 성공:', txReceipt)
    } catch (error) {
      console.error('Error adding donor:', error)
    }
  }

  // 기부자 추가 버튼 클릭 시 호출되는 함수
  const handleAddDonor = async () => {
    const index = 0 // 펀딩 인덱스 설정 (원하는 값으로 변경)
    const donorName = '이하늬' // 추가할 기부자 이름 설정 (원하는 값으로 변경)
    const date = Date.now()
    const amount = 9500
    await addDonor(index, donorName, date, amount)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center' , gap: '40px' }}>
      <Button
        $backgroundColor={'blue'}
        width={'200px'}
        height={'100px'}
        $borderRadius={'10px'}
        $children={'펀딩 정보 저장'}
        onButtonClick={createFunding}
      ></Button>
      <Button
        $backgroundColor={'blue'}
        width={'200px'}
        height={'100px'}
        $borderRadius={'10px'}
        $children={'펀딩 데이터 조회'}
        onButtonClick={getFundingInfo}
      ></Button>
      {/* <Input id={''} placeholder={''} value={''} onInputChange={handleAddDonor} /> */}
      <Button
        $backgroundColor={'blue'}
        width={'200px'}
        height={'100px'}
        $borderRadius={'10px'}
        $children={'기부자 추가'}
        onButtonClick={handleAddDonor}
      ></Button>
    </div>
  )
}

export default BlockchainTest
