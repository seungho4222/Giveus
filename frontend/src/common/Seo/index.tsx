import { SeoType } from '@/types/commonType'
import { Helmet } from 'react-helmet-async'

const index = (props: SeoType) => {
  const { title, description, type } = props

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type} />
      <meta property="og:description" content={description} />
    </Helmet>
  )
}

export default index
