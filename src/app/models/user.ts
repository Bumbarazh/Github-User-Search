export interface User {
    avatar_url?: string,
    company?: string,
    created_at: string,
    blog?: string,
    login: string,
    name: string,
    twitter_username?:string,
    public_repos: number,
    public_gists: number,
    followers: number,
    location?: string,
    bio?: string
}