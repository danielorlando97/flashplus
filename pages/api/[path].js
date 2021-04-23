import { baseUrl, find } from '../../api.complement/directory.services'

export default (req, res) => {
  console.log(req.query)
  const { path } = req.query

  res.status(200).json(find("/" + path))
}
