export function filterObjectArrayWithObject(objectArrayToFilter, filterObjectSettings) {
  let processedObjectArray = [...objectArrayToFilter]

  //iterate through filterObjectSettings key:value pairs
  for (const [filterKey, filterValue] of Object.entries(filterObjectSettings)) {
    switch (filterKey) {
      case 'priceMin':
        processedObjectArray = processedObjectArray.filter(
          (processedObject) => processedObject.price >= filterValue,
        )
        break
      case 'priceMax':
        processedObjectArray = processedObjectArray.filter(
          (processedObject) =>
            processedObject.price <= (filterValue === '' ? Infinity : filterValue),
        )
        break
      case 'spaceMin':
        processedObjectArray = processedObjectArray.filter(
          (processedObject) => processedObject.squareMeters >= filterValue,
        )
        break
      case 'spaceMax':
        processedObjectArray = processedObjectArray.filter(
          (processedObject) =>
            processedObject.squareMeters <= (filterValue === '' ? Infinity : filterValue),
        )
        break

      default:
        //single value filter
        processedObjectArray = processedObjectArray.filter((processedObject) =>
          String(processedObject[filterKey]).includes(filterValue),
        )
        break
    }
  }

  return processedObjectArray
}
