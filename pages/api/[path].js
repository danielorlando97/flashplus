import { baseUrl, find } from '../../api.complement/directory.services'

export default (req, res) => {
  let { path } = req.query
  
  res.status(200).json(find(path))
}
