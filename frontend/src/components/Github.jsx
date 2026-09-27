import React, { useEffect, useRef, useState } from "react";

const GitHub = () => {
  const [activityData, setActivityData] = useState({});
  const [stats, setStats] = useState({
    contributions: 0,
    activeDays: 0,
    streak: 0,
  });

  const heatmapRef = useRef(null);

  const username = "lodhisahil";

  // -----------------------------------------
  // Fetch GitHub Contribution Data
  // -----------------------------------------
  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}`
        );

        const result = await response.json();

        const formattedData = {};

        result.contributions.forEach((item) => {
          formattedData[item.date] = {
            count: item.count,
            level: item.level,
          };
        });

        setActivityData(formattedData);

        const currentYear = new Date().getFullYear();

        const contributions =
          result.total?.[currentYear.toString()] || 0;

        const activeDays = result.contributions.filter(
          (item) =>
            item.date.startsWith(currentYear.toString()) &&
            item.count > 0
        ).length;

        // Current streak
        let streak = 0;

        const today = new Date();

        while (true) {
          const dateKey = formatDateKey(today);
          const contribution = formattedData[dateKey];

          if (contribution && contribution.count > 0) {
            streak++;
            today.setDate(today.getDate() - 1);
          } else {
            break;
          }
        }

        setStats({
          contributions,
          activeDays,
          streak,
        });
      } catch (error) {
        console.error("GitHub API Error:", error);
      }
    };

    fetchGitHubData();
  }, []);

  // -----------------------------------------
  // Date Formatter
  // -----------------------------------------
  const formatDateKey = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  // -----------------------------------------
  // Auto scroll to latest month
  // -----------------------------------------
  useEffect(() => {
    const scrollToLatest = () => {
      const container = heatmapRef.current;

      if (!container) return;

      container.scrollLeft =
        container.scrollWidth - container.clientWidth;
    };

    const timer = setTimeout(scrollToLatest, 100);

    window.addEventListener("resize", scrollToLatest);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", scrollToLatest);
    };
  }, [activityData]);

  // -----------------------------------------
  // Generate days for month
  // -----------------------------------------
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // -----------------------------------------
  // Generate one month
  // -----------------------------------------
  const generateMonth = (year, month) => {
    const daysInMonth = getDaysInMonth(year, month);

    const firstDay = new Date(year, month, 1).getDay();

    const weeks = [];

    let currentWeek = [];

    // Empty spaces before first day
    for (let i = 0; i < firstDay; i++) {
      currentWeek.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);

      const dateKey = formatDateKey(date);

      currentWeek.push({
        date: dateKey,
        day,
        count: activityData[dateKey]?.count || 0,
        level: activityData[dateKey]?.level || 0,
      });

      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    }

    // Remaining empty spaces
    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push(null);
      }

      weeks.push(currentWeek);
    }

    return weeks;
  };

  // -----------------------------------------
  // Generate last 13 months
  // -----------------------------------------
  const generateMonths = () => {
    const months = [];

    const currentDate = new Date();

    for (let i = 12; i >= 0; i--) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - i,
        1
      );

      months.push({
        year: date.getFullYear(),
        month: date.getMonth(),
        name: date.toLocaleString("default", {
          month: "short",
        }),
        weeks: generateMonth(
          date.getFullYear(),
          date.getMonth()
        ),
      });
    }

    return months;
  };

  const months = generateMonths();

  // -----------------------------------------
  // Contribution level
  // -----------------------------------------
  const getLevelClass = (level) => {
    switch (level) {
      case 1:
        return "bg-cyan-400/20";

      case 2:
        return "bg-cyan-400/40";

      case 3:
        return "bg-cyan-400/70";

      case 4:
        return "bg-cyan-300";

      default:
        return "bg-white/5";
    }
  };

  // -----------------------------------------
  // UI
  // -----------------------------------------
  return (
    <section className="mt-20">
      {/* Heading */}
      <div className="mb-8 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
          Open Source
        </p>

        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Github <span className="text-cyan-300">Activity</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          My coding activity, contributions and consistency
          across GitHub.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {/* Contributions */}
        <div className="rounded-2xl border border-white/15 bg-white/5 p-6 text-center backdrop-blur-xl">
          <p className="text-sm text-gray-400">
            Contributions
          </p>

          <p className="mt-3 text-3xl font-bold text-white">
            {stats.contributions}
          </p>

          <p className="mt-1 text-sm text-cyan-300">
            This Year
          </p>
        </div>

        {/* Current Streak */}
        <div className="rounded-2xl border border-white/15 bg-white/5 p-6 text-center backdrop-blur-xl">
          <p className="text-sm text-gray-400">
            Current Streak
          </p>

          <p className="mt-3 text-3xl font-bold text-white">
            {stats.streak}
          </p>

          <p className="mt-1 text-sm text-cyan-300">
            Days
          </p>
        </div>

        {/* Active Days */}
        <div className="rounded-2xl border border-white/15 bg-white/5 p-6 text-center backdrop-blur-xl">
          <p className="text-sm text-gray-400">
            Active Days
          </p>

          <p className="mt-3 text-3xl font-bold text-white">
            {stats.activeDays}
          </p>

          <p className="mt-1 text-sm text-cyan-300">
            This Year
          </p>
        </div>

        {/* GitHub Profile */}
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer"
          className="group rounded-2xl border border-white/15 bg-white/5 p-6 text-center backdrop-blur-xl transition duration-300 hover:border-cyan-300/50 hover:bg-cyan-300/10"
        >
          <p className="text-sm text-gray-400">
            GitHub Profile
          </p>

          <p className="mt-3 text-xl font-bold text-white transition group-hover:text-cyan-300">
            View Profile ↗
          </p>

          <p className="mt-1 text-sm text-cyan-300">
            @{username}
          </p>
        </a>
      </div>

      {/* Contribution Heatmap */}
      <div className="mt-8 rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400">
              Contribution Activity
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Last 13 months
            </p>
          </div>

          {/* Legend */}
          <div className="hidden items-center gap-2 text-xs text-gray-500 sm:flex">
            <span>Less</span>

            <div className="h-3 w-3 rounded-sm bg-white/5" />
            <div className="h-3 w-3 rounded-sm bg-cyan-400/20" />
            <div className="h-3 w-3 rounded-sm bg-cyan-400/40" />
            <div className="h-3 w-3 rounded-sm bg-cyan-400/70" />
            <div className="h-3 w-3 rounded-sm bg-cyan-300" />

            <span>More</span>
          </div>
        </div>

        {/* Heatmap */}
        <div
          ref={heatmapRef}
          className="overflow-x-auto pb-3"
        >
          <div className="min-w-max">
            <div className="flex gap-5">
              {months.map((monthData, monthIndex) => {
                const blockWidth =
                  monthData.weeks.length * 14 +
                  (monthData.weeks.length - 1) * 4;

                return (
                  <div
                    key={`${monthData.year}-${monthData.month}`}
                    className="shrink-0"
                    style={{
                      width: `${blockWidth}px`,
                    }}
                  >
                    {/* Month Name */}
                    <div
                      className="mb-3 text-center text-xs font-medium text-gray-400"
                      style={{
                        width: `${blockWidth}px`,
                      }}
                    >
                      {monthData.name}
                    </div>

                    {/* Weeks */}
                    <div className="flex gap-1">
                      {monthData.weeks.map(
                        (week, weekIndex) => (
                          <div
                            key={weekIndex}
                            className="flex flex-col gap-1"
                          >
                            {week.map(
                              (day, dayIndex) => (
                                <div
                                  key={dayIndex}
                                  className={`h-3 w-3 rounded-sm ${
                                    day
                                      ? getLevelClass(
                                          day.level
                                        )
                                      : "bg-transparent"
                                  }`}
                                  title={
                                    day
                                      ? `${day.date}: ${day.count} contribution${
                                          day.count !== 1
                                            ? "s"
                                            : ""
                                        }`
                                      : ""
                                  }
                                />
                              )
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
      </div>
    </section>
  );
};

export default GitHub;