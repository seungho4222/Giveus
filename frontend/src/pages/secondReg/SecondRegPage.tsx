import * as s from '@pages/secondReg/SecondRegPage.styled'
import FullButton from '@/common/FullButton'
import HomeHeader from '@/components/home/HomeHeader'
import SecondRegImg from '@/components/secondReg/SecondRegImg'
import SecondRegContent from '@/components/secondReg/SecondRegContent'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { createSecondReg } from '@/apis/funding'
import { useNavigate, useParams } from 'react-router-dom'

const SecondRegPage = () => {
  const navigate = useNavigate()
  const [text, setText] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const { id } = useParams()

  const { mutate } = useMutation({
    mutationKey: ['createSecondReg'],
    mutationFn: createSecondReg,
    onSuccess(result) {
      console.log('등록 성공', result)
      navigate('/giveus/ok', { replace: true })
    },
    onError(error) {
      console.error('등록 실패:', error)
      alert('펀딩 등록에 실패하였습니다.내용을 다시 확인해주세요.')
    },
  })

  const handleCreateSecondReg = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (file) {
      const formData = new FormData()

      formData.append('file', file)

      formData.append(
        'fundingCreateReq',
        new Blob([JSON.stringify({ regId: id, content: text })], {
          type: 'application/json',
        }),
      )

      mutate(formData)
    }
  }

  return (
    <>
      <s.Container>
        <HomeHeader />
        <s.Title>추가 등록</s.Title>
        <SecondRegImg value={file} setValue={setFile} />
        <SecondRegContent value={text} setValue={setText} />
        <s.Form onSubmit={handleCreateSecondReg} encType="multipart/form-data">
          <FullButton text="2차 등록" disabled={false} onClick={() => {}} />
        </s.Form>
      </s.Container>
    </>
  )
}

export default SecondRegPage
