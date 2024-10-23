export const getHomepageData = async () => {
  const url = process.env.NEXT_PUBLIC_BASE_API_URL + "/homepage";

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    //TODO: Add error logging
    console.error("An error occurred while fetching data from the API", error);
    return null;
  }
};
