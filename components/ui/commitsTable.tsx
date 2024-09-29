"use client";
import React, { useEffect, useState } from "react";

interface GitHubEvent {
  type: string;
  repoName: string;
  repoUrl: string;
  createdDate: string;
  authorName: string;
  authorUrl: string;
  title?: string;
  state?: string;
  pullRequestTitle?: string;
  reviewState?: string;
  commentBody?: string;
  forkedRepoName?: string;
}

const CommitsTable: React.FC = () => {
  const [events, setEvents] = useState<GitHubEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/commits");
        const data: GitHubEvent[] = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const difference = Math.abs(now.getTime() - date.getTime());
    const hours = Math.floor(difference / (1000 * 60 * 60));
    if (hours < 24) return `${hours} hours ago`;
    const days = Math.floor(hours / 24);
    return `${days} days ago`;
  };

  const renderEventDescription = (event: GitHubEvent) => {
    switch (event.type) {
      case "PushEvent":
        return ` pushed a commit to `;
      case "PullRequestEvent":
        return ` ${
          event.state === "open" ? "opened" : "closed"
        } a pull request "${event.title}" in `;
      case "IssuesEvent":
        return ` ${event.state === "open" ? "opened" : "closed"} an issue "${
          event.title
        }" in `;
      case "ForkEvent":
        return ` forked the repository `;
      case "PullRequestReviewEvent":
        return ` reviewed pull request (${event.reviewState}) in `;
      case "PullRequestReviewCommentEvent":
        return ` commented on pull request in `;
      default:
        return ` did something in ${event.repoName}`;
    }
  };

  return (
    <div className="container max-w-[95%] lg:max-w-[85%]  mx-auto mb-8 p-1 md:p-8">
      <h1 className="text-[3rem] bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold mb-8">
        Github Contributions
      </h1>

      {loading ? (
        <p>Loading...</p>
      ) : events.length === 0 ? (
        <p>No recent events found.</p>
      ) : (
        <div className="min-w-full text-stone-300 text-sm border border-white/[0.2] h-auto rounded-xl p-6">
          <table className="mx-auto">
            <thead className=""></thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={index} className="">
                  <td className="border-b border-white/[0.2] px-4 py-4">
                    <a
                      href={`https://github.com/${event.authorName}`}
                      target="_blank"
                      rel="noreferrer"
                      className=" hover:underline"
                    >
                      @{event.authorName}
                    </a>{" "}
                    {renderEventDescription(event)}{" "}
                    <a
                      href={`https://github.com/${event.repoName}`}
                      className=" underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {event.repoName}
                    </a>
                    <span className="text-neutral-500 text-sm ">
                      {" "}
                      {formatTimeAgo(event.createdDate)}
                    </span>
                  </td>
                </tr>
              ))}
              <tr>
                <td className="py-4 px-2">
                  <a
                    href="https://github.com/atiqurx"
                    target="_blank"
                    className="hover:underline"
                  >
                    Show More Contributions..{" "}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CommitsTable;
