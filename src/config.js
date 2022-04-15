import path from 'path'
import merge from 'lodash/merge'

const requireProcessEnv = (name) => {
    if (!process.env[name]) {
        throw new Error('You must set the ' + name + ' environment variable')
    }
    return process.env[name]
}

exports.module = {}