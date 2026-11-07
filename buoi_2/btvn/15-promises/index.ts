const fetchData = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
};

fetchData().then((data) => {
  console.log(data);
});

async function getData(): Promise<void> {
  try {
    const data = await fetchData();
    console.log("Async/await:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getData();

const fetchWithError = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Something went wrong"));
    }, 1000);
  });
};

fetchWithError()
  .then((data) => console.log(data))
  .catch((err) => console.error(err.message));
