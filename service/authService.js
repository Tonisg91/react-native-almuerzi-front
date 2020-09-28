import axios from 'axios'
import { Alert } from 'react-native'

class AuthService {
    constructor() {
        this.URL = 'https://serverless.tonisg91.vercel.app/api/auth'
    }

    successCB = (message, cb) => Alert.alert(
        'Exito',
        message,
        [
            {
                text: 'Ir a inicio',
                onPress: cb
            }
        ])

    errorCB = (message) => Alert.alert(
        'Error',
        message
    )


    async register(body, cb) {
        axios.post(`${this.URL}/signup`, body)
            .then(r => {
                if (r.data === 'Usuario creado con éxito.') return this.successCB(r.data, cb)
                this.errorCB(r.data)
            })
    }
}

export default new AuthService()