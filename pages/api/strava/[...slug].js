import { useRouter } from 'next/router'

export default function handler (req, res) {
  const router = useRouter()
  const { slug } = req.query
  console.log(slug)
  router.push('/overview')

  res.end(`Post: ${slug.join(', ')}`)
}
