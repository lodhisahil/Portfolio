import React, { useEffect, useState } from "react";

const LeetCode = () => {
  // -----------------------------------------
  // LeetCode Stats
  // -----------------------------------------
  const stats = {
    totalSolved: 266,
    streak: 123,
    activeDays: 236,
    easy: 108,
    medium: 142,
    hard: 16,
  };

  // -----------------------------------------
  // Demo Activity Data
  // Replace / connect this with your
  // LeetCode API data later.
  // -----------------------------------------
  const [activityData, setActivityData] = useState({});

  useEffect(() => {
  const fetchLeetCodeData = async () => {
    try {
      const response = await fetch("/api/leetcode");

      if (!response.ok) {
        throw new Error("Failed to fetch LeetCode data");
      }

      const result = await response.json();

      const calendar =
        result.data.matchedUser.userCalendar.submissionCalendar;

      const parsedCalendar = JSON.parse(calendar);

      const formattedData = {};

      Object.entries(parsedCalendar).forEach(
        ([timestamp, count]) => {
          const date = new Date(Number(timestamp) * 1000);

          const year = date.getUTCFullYear();
          const month = String(
            date.getUTCMonth() + 1
          ).padStart(2, "0");
          const day = String(
            date.getUTCDate()
          ).padStart(2, "0");

          const dateKey = `${year}-${month}-${day}`;

          formattedData[dateKey] = count;
        }
      );

      setActivityData(formattedData);
    } catch (error) {
      console.error(
        "Failed to fetch LeetCode data:",
        error
      );
    }
  };

  fetchLeetCodeData();
}, []);

  // const today = new Date();

  // -----------------------------------------
  // Format date as YYYY-MM-DD
  // -----------------------------------------
  const formatDateKey = (date) => {
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const day = String(date.getUTCDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  // -----------------------------------------
  // Get number of days in month
  // -----------------------------------------
  const getDaysInMonth = (year, month) => {
    return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  };

  // -----------------------------------------
  // Generate ONE month
  //
  // Sunday = row 1
  // Monday = row 2
  // ...
  // Saturday = row 7
  //
  // Each column = one week
  // -----------------------------------------
  const generateMonth = (year, month) => {
    const firstDate = new Date(Date.UTC(year, month, 1));

    const daysInMonth = getDaysInMonth(year, month);

    // 0 = Sunday
    // 1 = Monday
    // ...
    // 6 = Saturday
    const firstDayOfWeek = firstDate.getUTCDay();

    const totalCells = firstDayOfWeek + daysInMonth;

    const numberOfWeeks = Math.ceil(totalCells / 7);

    const weeks = [];

    for (let weekIndex = 0; weekIndex < numberOfWeeks; weekIndex++) {
      const week = [];

      for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
        const dayNumber =
          weekIndex * 7 + dayIndex - firstDayOfWeek + 1;

        // Empty cell before month starts
        // or after month ends
        if (dayNumber < 1 || dayNumber > daysInMonth) {
          week.push(null);
          continue;
        }

        const date = new Date(
          Date.UTC(year, month, dayNumber)
        );

        const dateKey = formatDateKey(date);

        week.push({
          date: dateKey,
          count: activityData[dateKey] || 0,
        });
      }

      weeks.push(week);
    }

    return weeks;
  };

  // -----------------------------------------
  // Generate 13 months
  //
  // IMPORTANT:
  // Current month is ALWAYS the last block.
  // -----------------------------------------
  const generateMonths = () => {
    const today = new Date();

    const endYear = today.getUTCFullYear();
    const endMonth = today.getUTCMonth();

    // Start 12 months before current month
    const startDate = new Date(
      Date.UTC(endYear, endMonth - 12, 1)
    );

    const months = [];

    let currentYear = startDate.getUTCFullYear();
    let currentMonth = startDate.getUTCMonth();

    while (
      currentYear < endYear ||
      (currentYear === endYear &&
        currentMonth <= endMonth)
    ) {
      months.push({
        year: currentYear,
        month: currentMonth,

        label: new Date(
          Date.UTC(currentYear, currentMonth, 1)
        ).toLocaleString("en-US", {
          month: "short",
          timeZone: "UTC",
        }),

        weeks: generateMonth(
          currentYear,
          currentMonth
        ),
      });

      currentMonth++;

      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
    }

    return months;
  };

  const months = generateMonths();

  // -----------------------------------------
  // Activity Level
  // -----------------------------------------
  const getActivityLevel = (count) => {
    if (count === 0) return 0;
    if (count <= 2) return 1;
    if (count <= 4) return 2;
    if (count <= 7) return 3;

    return 4;
  };

  // -----------------------------------------
  // Difficulty Percentage
  // -----------------------------------------
  const easyPercentage =
    (stats.easy / stats.totalSolved) * 100;

  const mediumPercentage =
    (stats.medium / stats.totalSolved) * 100;

  const hardPercentage =
    (stats.hard / stats.totalSolved) * 100;

  return (
    <section className="mt-16">
      {/* ------------------------------------ */}
      {/* Heading */}
      {/* ------------------------------------ */}
      <div className="mb-8 text-center">
        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-cyan-300">
          Problem Solving
        </p>

        <h2 className="text-3xl font-bold text-white md:text-4xl">
          My{" "}
          <span className="text-cyan-300">
            LeetCode Journey
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          Consistently solving problems and improving my
          data structures and algorithm skills.
        </p>
      </div>

      {/* ------------------------------------ */}
      {/* Main Stats */}
      {/* ------------------------------------ */}
      <div className="grid gap-4 sm:grid-cols-3">
        {/* Total Solved */}
        <div className="rounded-2xl border border-white/15 bg-white/5 p-6 text-center backdrop-blur-xl transition duration-300 hover:border-cyan-300/40 hover:bg-white/10">
          <p className="text-sm text-gray-400">
            Problems Solved
          </p>

          <p className="mt-2 text-4xl font-bold text-white">
            {stats.totalSolved}
          </p>

          <p className="mt-1 text-sm text-cyan-300">
            Total Problems
          </p>
        </div>

        {/* Streak */}
        <div className="rounded-2xl border border-white/15 bg-white/5 p-6 text-center backdrop-blur-xl transition duration-300 hover:border-cyan-300/40 hover:bg-white/10">
          <p className="text-sm text-gray-400">
            Current Streak
          </p>

          <p className="mt-2 text-4xl font-bold text-white">
            {stats.streak}
          </p>

          <p className="mt-1 text-sm text-cyan-300">
            Days
          </p>
        </div>

        {/* Active Days */}
        <div className="rounded-2xl border border-white/15 bg-white/5 p-6 text-center backdrop-blur-xl transition duration-300 hover:border-cyan-300/40 hover:bg-white/10">
          <p className="text-sm text-gray-400">
            Active Days
          </p>

          <p className="mt-2 text-4xl font-bold text-white">
            {stats.activeDays}
          </p>

          <p className="mt-1 text-sm text-cyan-300">
            Coding Days
          </p>
        </div>
      </div>

      {/* ------------------------------------ */}
      {/* Difficulty */}
      {/* ------------------------------------ */}
      <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl md:p-8">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-white">
            Problems Solved
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            Difficulty breakdown
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {/* Easy */}
          <div className="rounded-xl border border-white/10 bg-black/20 p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-green-400">
                Easy
              </span>

              <span className="text-2xl font-bold text-white">
                {stats.easy}
              </span>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-green-400"
                style={{
                  width: `${easyPercentage}%`,
                }}
              />
            </div>

            <p className="mt-2 text-xs text-gray-500">
              {easyPercentage.toFixed(1)}% of total
            </p>
          </div>

          {/* Medium */}
          <div className="rounded-xl border border-white/10 bg-black/20 p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-yellow-400">
                Medium
              </span>

              <span className="text-2xl font-bold text-white">
                {stats.medium}
              </span>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-yellow-400"
                style={{
                  width: `${mediumPercentage}%`,
                }}
              />
            </div>

            <p className="mt-2 text-xs text-gray-500">
              {mediumPercentage.toFixed(1)}% of total
            </p>
          </div>

          {/* Hard */}
          <div className="rounded-xl border border-white/10 bg-black/20 p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-red-400">
                Hard
              </span>

              <span className="text-2xl font-bold text-white">
                {stats.hard}
              </span>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-red-400"
                style={{
                  width: `${hardPercentage}%`,
                }}
              />
            </div>

            <p className="mt-2 text-xs text-gray-500">
              {hardPercentage.toFixed(1)}% of total
            </p>
          </div>
        </div>
      </div>

      {/* ------------------------------------ */}
      {/* Contribution Calendar */}
      {/* ------------------------------------ */}
      <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl md:p-8">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-white">
            Submission Activity
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            My coding activity over the past year
          </p>
        </div>

        {/* Calendar Scroll Area */}
        <div className="overflow-x-auto pb-3">
          <div className="min-w-max">
            <div className="flex gap-5">
              {months.map((monthData) => {
                /*
                 * Every week has:
                 *
                 * 7 cells × 12px
                 * 6 gaps × 4px
                 *
                 * = 108px for 7-week theoretical width
                 *
                 * Actual width is calculated from
                 * number of weeks in this month.
                 */
                const blockWidth =
                  monthData.weeks.length * 12 +
                  (monthData.weeks.length - 1) * 3;

                return (
                  <div
                    key={`${monthData.year}-${monthData.month}`}
                    className="shrink-0"
                  >
                    {/* -------------------------------- */}
                    {/* Month Name */}
                    {/* -------------------------------- */}
                    <div
                      className="mb-3 text-center text-sm text-gray-400"
                      style={{
                        width: `${blockWidth}px`,
                      }}
                    >
                      {monthData.label}
                    </div>

                    {/* -------------------------------- */}
                    {/* Month Calendar */}
                    {/* -------------------------------- */}
                    <div className="flex gap-[3px]">
                      {monthData.weeks.map(
                        (week, weekIndex) => (
                          <div
                            key={weekIndex}
                            className="flex flex-col gap-1"
                          >
                            {week.map(
                              (day, dayIndex) => {
                                /*
                                 * Empty cells are kept
                                 * invisible so the calendar
                                 * alignment remains correct.
                                 */
                                if (!day) {
                                  return (
                                    <div
                                      key={dayIndex}
                                      className="h-3 w-3"
                                    />
                                  );
                                }

                                const level =
                                  getActivityLevel(
                                    day.count
                                  );

                                const colors = [
                                  "bg-white/5",
                                  "bg-cyan-400/20",
                                  "bg-cyan-400/40",
                                  "bg-cyan-400/70",
                                  "bg-cyan-300",
                                ];

                                return (
                                  <div
                                    key={day.date}
                                    title={`${day.date}: ${day.count} submissions`}
                                    className={`h-3 w-3 rounded-[3px] ${colors[level]} transition duration-200 hover:scale-125`}
                                  />
                                );
                              }
                            )}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ------------------------------------ */}
        {/* Legend */}
        {/* ------------------------------------ */}
        <div className="mt-6 flex items-center justify-end gap-2 text-xs text-gray-400">
          <span>Less</span>

          <div className="h-3 w-3 rounded-[3px] bg-white/5" />

          <div className="h-3 w-3 rounded-[3px] bg-cyan-400/20" />

          <div className="h-3 w-3 rounded-[3px] bg-cyan-400/40" />

          <div className="h-3 w-3 rounded-[3px] bg-cyan-400/70" />

          <div className="h-3 w-3 rounded-[3px] bg-cyan-300" />

          <span>More</span>
        </div>
      </div>
    </section>
  );
};

export default LeetCode;