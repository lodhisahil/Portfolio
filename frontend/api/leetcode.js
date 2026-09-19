export default async function handler(req, res) {
  try {
    const response = await fetch("https://leetcode.com/graphql/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0",
      },
      body: JSON.stringify({
        query: `
          query userCalendar($username: String!) {
            matchedUser(username: $username) {
              userCalendar {
                submissionCalendar
              }
            }
          }
        `,
        variables: {
          username: "lodhi___sahil",
        },
      }),
    });

    if (!response.ok) {
      return res.status(response.status).json({
        error: "LeetCode request failed",
      });
    }

    const data = await response.json();

    return res.status(200).json(data);
  } catch (error) {
    console.error("LeetCode API Error:", error);

    return res.status(500).json({
      error: "Failed to fetch LeetCode data",
    });
  }
}