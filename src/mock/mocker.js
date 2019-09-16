import data from './data'

export default (type = null, id = null) => {
  if (id === null) {
    return data[type]
  }

  return data[type].find(function(obj) {
    // eslint-disable-next-line
    return obj.id == id
  })
}
