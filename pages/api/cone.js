// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import calcVerts from '../../utils/calcVerts.js'

export default function handler(req, res) {
  const [height, radius, segments] = JSON.parse(req.body);
  const coneData = calcVerts(Number(height), Number(radius), Number(segments))

  res.status(200).json(coneData);
}
