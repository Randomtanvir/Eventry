export const replaceMongoIdInArray = (array) => {
  const mapedArr = array
    .map((item) => {
      return {
        id: item._id.toString(),
        ...item,
      };
    })
    .map(({ _id, ...rest }) => rest);
  return mapedArr;
};

export const replaceMongoIdInObject = (obj) => {
  const { _id, ...updateObj } = { ...obj, id: obj._id.toString() };
  return updateObj;
};
