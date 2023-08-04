import GithubClient from "github-pinned"

const client = new GithubClient()

export async function getPinnedRepos() {
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN
    client.setToken(token as string)
    console.log("Token:", token)

    return await client.getPinnedRepos("kotiasv")
}
