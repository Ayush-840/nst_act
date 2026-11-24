const OldPerson = (name, time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(name);
    }, time);
  });
};

const YoungPerson = (name, time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(name);
    }, time);
  });
};

async function execution(
  oldPersonName,
  oldPersonTime,
  person1Name,
  person1Time,
  person2Name,
  person2Time
) {
  // 1. Wait for OldPerson order to complete sequentially before taking others
  const oldResult = await OldPerson(oldPersonName, oldPersonTime);
  console.log(oldResult);

  // 2. Start both YoungPerson orders concurrently so whichever finishes first logs first
  const p1 = YoungPerson(person1Name, person1Time).then((res) => {
    console.log(res);
    return res;
  });

  const p2 = YoungPerson(person2Name, person2Time).then((res) => {
    console.log(res);
    return res;
  });

  await Promise.all([p1, p2]);
}