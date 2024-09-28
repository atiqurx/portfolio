import { NextResponse } from 'next/server';

const GITHUB_USERNAME = 'atiqurx';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN; 

export async function GET() {
  const headers = {
    Authorization: `token ${GITHUB_TOKEN}`,
  };

  try {
    // Fetching repositories
    const repoResponse = await fetch(`https://api.github.com/user/repos?per_page=100`, { headers });
    
    if (!repoResponse.ok) {
      console.error("Failed to fetch repositories:", repoResponse.status, repoResponse.statusText);
      return NextResponse.json({ message: 'Error fetching repositories' }, { status: 500 });
    }

    const repositories = await repoResponse.json();

    // Fetching commits for each repository
    const commitPromises = repositories.map(async (repo: any) => {
      const commitResponse = await fetch(
        `https://api.github.com/repos/${repo.full_name}/commits?author=${GITHUB_USERNAME}`,
        { headers }
      );

      if (!commitResponse.ok) {
        console.error(`Failed to fetch commits for ${repo.name}:`, commitResponse.status, commitResponse.statusText);
        return [];
      }

      const commits = await commitResponse.json();
      return commits.map((commit: any) => ({
        repoName: repo.name,
        repoUrl: repo.private ? "private" : repo.html_url, 
        commitMessage: commit.commit.message,
        commitDate: commit.commit.author.date,
        isPrivate: repo.private, 
      }));
    });

    const allCommits = await Promise.all(commitPromises);
    const flattenedCommits = allCommits.flat();

    // Sort commits by date in descending order
    const sortedCommits = flattenedCommits.sort((a, b) => new Date(b.commitDate).getTime() - new Date(a.commitDate).getTime());

    // Remove duplicates based on commitMessage, repoName, and commitDate
    const uniqueCommits = Array.from(new Map(sortedCommits.map(commit => [
      `${commit.commitMessage}|${commit.repoName}|${commit.commitDate}`, commit
    ])).values());

    // Take the latest 10 unique commits
    const latestCommits = uniqueCommits.slice(0, 10); 

    return NextResponse.json(latestCommits);
  } catch (error) {
    console.error("Error fetching commits:", error);
    return NextResponse.json({ message: 'Error fetching commits', error: (error as Error).message }, { status: 500 });
  }
}
