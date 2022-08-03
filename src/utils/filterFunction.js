export function filterObjectArrayWithObject(objectArrayToFilter, filterObjectSettings) {
  let filteredObjects = [...objectArrayToFilter]

  //iterate through filterObjectSettings key:value pairs
  for (const [key, value] of Object.entries(filterObjectSettings)) {
    // price range filters
    if (key == 'priceMin') {
      filteredObjects = filteredObjects.filter((object) => object.price >= value)
    } else if (key == 'priceMax') {
      filteredObjects = filteredObjects.filter((object) => object.price <= value)
    }

    //single value filter
    else {
      filteredObjects = filteredObjects.filter((object) => String(object[key]).includes(value))
    }
  }

  return filteredObjects
}
