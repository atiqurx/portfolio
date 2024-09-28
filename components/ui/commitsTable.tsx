import { useEffect, useState } from 'react';

interface Commit {
  repoName: string;
  commitMessage: string;
  commitDate: string;
  repoUrl: string; 
  isPrivate: boolean; 
}

export default function CommitsTable() {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const response = await fetch('/api/commits');
        const data = await response.json();
        setCommits(data);
      } catch (error) {
        console.error('Error fetching commits:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCommits();
  }, []);

  const timeSince = (date: string) => {
    const seconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);
    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) return interval + " years ago";
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) return interval + " months ago";
    interval = Math.floor(seconds / 86400);
    if (interval > 1) return interval + " days ago";
    interval = Math.floor(seconds / 3600);
    if (interval > 1) return interval + " hours ago";
    interval = Math.floor(seconds / 60);
    if (interval > 1) return interval + " minutes ago";
    return seconds + " seconds ago";
  };

  // truncate commit message
  const truncateMessage = (message: string) => {
    return message.length > 40 ? `${message.substring(0, 40)}...` : message;
  };

  if (loading) {
    return <p>Loading commits...</p>;
  }

  return (
    <div>
      <h1>Recent Commits</h1>
      <div>
        {commits.map((commit, index) => (
          <p key={index}>
            {`atiqurx pushed "${truncateMessage(commit.commitMessage)}" to `}
            {commit.isPrivate ? (
              <span>{`${commit.repoName} (private)`}</span>
            ) : (
              <a href={commit.repoUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>
                {commit.repoName}
              </a>
            )}
            {` ${timeSince(commit.commitDate)}`}
          </p>
        ))}
      </div>
    </div>
  );
}
