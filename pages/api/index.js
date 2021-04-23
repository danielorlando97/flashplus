import {mapper} from '../../api.complement/directory.services'

export default (req, res) => {

    res.status(200).json(mapper())
}