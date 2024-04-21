const sample = {
  firstName: "Alex",
  lastName: "Kor",
  fullName: "Alex Kor",
  skills: new Set(["html", "css", "javascript"]),
};

const notCustomizedOutput = JSON.stringify(sample);

console.log(
  "Not customized output of JSON.stringify object that contains Set",
  notCustomizedOutput,
);

const outputCustomizationCallback = (key, value) => {
  // Exclude key "fullName"
  if (key === "fullName") {
    return undefined;
  }

  // Serialize Set
  if (value instanceof Set) {
    return Array.from(value);
  }

  return value;
};

const customizedOutput = JSON.stringify(sample, outputCustomizationCallback);

console.log(
  "Customized output of JSON.stringify object that contains Set",
  customizedOutput,
);
