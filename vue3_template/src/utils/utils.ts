import moment from 'moment'
import cryptojs from 'crypto-js'

export function md5(address: string) {
  const datetime = moment().format('YYYYMMDD')
  const sign = cryptojs
    .MD5(address + '.' + datetime)
    .toString()
    .substring(0, 10) // md5加密，取前10位
  return sign
}
