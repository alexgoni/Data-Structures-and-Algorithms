function collectStrings(obj) {
  let result = [];

  const helper = (obj) => {
    for (const key in obj) {
      if (typeof obj[key] === "string") {
        result.push(obj[key]);
      }

      if (obj[key] !== null && typeof obj[key] === "object") {
        helper(obj[key]);
      }
    }
  };

  helper(obj);
  return result;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj));
