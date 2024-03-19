import Navbar from '@common/Navbar'
import Layout from '@common/Layout'
import AlarmHeader from '@components/alarm/AlarmHeader'
import AlarmList from '@components/alarm/AlarmList'

const AlarmPage = () => {
  return (
    <>
      <Layout>
        <AlarmHeader />
        <AlarmList />
      </Layout>
      <Navbar current="alarm" />
    </>
  )
}

export default AlarmPage
