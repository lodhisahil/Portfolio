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
          query userLeetCodeData($username: String!) {
            matchedUser(username: $username) {
              userCalendar {
                submissionCalendar
              }

              submitStatsGlobal {
                acSubmissionNum {
                  difficulty
                  count
                  submissions
                }
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

    if (!data?.data?.matchedUser) {
      return res.status(404).json({
        error: "LeetCode user not found",
      });
    }

    const user = data.data.matchedUser;

    return res.status(200).json({
      calendar: user.userCalendar.submissionCalendar,

      stats: user.submitStatsGlobal.acSubmissionNum,
    });
  } catch (error) {
    console.error("LeetCode API Error:", error);

    return res.status(500).json({
      error: "Failed to fetch LeetCode data",
    });
  }
}