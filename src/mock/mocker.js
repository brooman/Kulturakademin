/* eslint-disable */
import data from './data'

export default Mocker = (type = null, id = null) => {
  if (type) {
    if (id === null) {
      return data[type]
    }

    return data[type].find(function(obj) {
      // eslint-disable-next-line
      return obj.id == id
    })
  }
  let uniqueData = []
  const savedIds = []

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
