import data from './data'

export default (type = null, id = null) => {
  if (type) {
    if (id === null) {
      return data[type]
    }

    return data[type].find(function(obj) {
      // eslint-disable-next-line
      return obj.id == id
    })
  } else {
    let uniqueData = []
    let savedIds = []

    Object.values(data).map(type => {
      uniqueData = uniqueData.concat(
        type.filter(item => {
          const isUnique = !savedIds.includes(item.id)
          savedIds.push(item.id)
          return isUnique
        }),
      )
    })

    return uniqueData
  }
}
