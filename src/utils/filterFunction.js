export function filterObjectArrayWithObject(objectArrayToFilter, filterObjectSettings) {
  let filteredObjects = [...objectArrayToFilter]

  //iterate through filterObjectSettings key:value pairs
  for (const [key, value] of Object.entries(filterObjectSettings)) {
    // price range filters
    if (key == 'priceMin') {
      filteredObjects = filteredObjects.filter((object) => object.price >= value)
    } else if (key == 'priceMax') {
      filteredObjects = filteredObjects.filter(
        (object) => object.price <= (value === '' ? Infinity : value),
      )
    }

    // space range filters
    else if (key == 'spaceMin') {
      filteredObjects = filteredObjects.filter((object) => object.squareMeters >= value)
    } else if (key == 'spaceMax') {
      filteredObjects = filteredObjects.filter(
        (object) => object.squareMeters <= (value === '' ? Infinity : value),
      )
    }

    //single value filter
    else {
      filteredObjects = filteredObjects.filter((object) => String(object[key]).includes(value))
    }
  }

  return filteredObjects
}
