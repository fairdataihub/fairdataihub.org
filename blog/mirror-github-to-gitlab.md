---
title: 'Don’t Put All Your Code in One Basket'
authors:
  - 'SanjaySoundarajan'
date: '2026-03-01'
category: 'Product'
heroImage: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
imageAuthor: '
Marc-Olivier Jodoin'
imageAuthorLink: 'https://unsplash.com/@marcojodoin'
subtitle: 'Why I Started Mirroring My GitHub Repos to GitLab (And You Maybe Should Too)'
tags:
  - GitHub
  - GitLab
  - Mirroring
  - Automation
  - CI/CD
---

## A Slightly Paranoid Thought

Every now and then, I see someone post on [r/github](https://www.reddit.com/r/github/):

> “My GitHub account was suspended and I don’t know why.”

Most of the time, there’s a reason. Automation, abuse detection, policy enforcement - all necessary. But automation isn’t perfect. False positives happen.

And that’s when it hits me:

**My entire developer history lives on GitHub.**

Years of commits. Side projects. Production systems. Organization repos. All in one place. Even a temporary lockout would hurt. A permanent one? I’d rather not find out. I’m not anti-GitHub. It’s an amazing platform. But relying on a single provider for everything feels risky.

---

## Why Mirror at All?

In serious cloud setups, critical data is replicated across providers. Redundancy isn’t paranoia - it’s normal.

Companies use:

- Multi-region storage on [AWS](https://aws.amazon.com/)
- Cross-provider backups on [Google Cloud](https://cloud.google.com/) or [Azure](https://azure.microsoft.com/)

If that’s standard for infrastructure, it makes sense for code too. My repos aren’t critical to the world. But they’re critical to me. So I built a simple solution to mirror everything to [GitLab](https://gitlab.com/) via my [gitlab-mirror](https://github.com/megasanjay/gitlab-mirror) repository. I’m using GitLab here because it’s a great alternative to GitHub and it’s free for open source projects. Right now this tool is GitLab-specific and uses the GitLab API under the hood, but I’d love to do a v2 with more general support for other Git hosting providers and self-hosted setups.

## What It Does

It performs a true Git-level mirror:

```bash
git clone --mirror <github-repo>
git push --mirror <gitlab-repo>
```

But automatically across every repository in a user or organization.

It mirrors:

- All branches
- All tags
- All refs
- Full commit history

It does not mirror issues, PRs, or Actions history. This is a Git backup - not a full GitHub clone. For disaster recovery, the Git history is what matters most.

### Real-World Tested

I’m actively using this.

Tested on:

- Personal GitHub: <https://github.com/megasanjay> -> <https://gitlab.com/megasanjay16>
- FAIR Data Innovations Hub Organization: <https://github.com/fairdataihub> -> <https://gitlab.com/groups/fairdataihub>

It works for both personal accounts and organizations, including private repos.

### How It Works (Quick Version)

On first run:

- Uses the GitHub REST API to list repos
- Creates missing projects in GitLab
- Mirrors everything

On later runs:

- Fetches updates
- Pushes changes
- Walks existing projects in GitLab and removes any repos that are no longer on GitHub, keeping GitLab as close to a real mirror as possible.

It’s idempotent. You can run it daily without breaking anything.

### Setup

Create a `.env`:

```bash
GITHUB_OWNER="your-user-or-org"
GITLAB_NAMESPACE="your-gitlab-user-or-group"
GH_TOKEN="github_pat_..."
GITLAB_TOKEN="glpat-..."
```

Run:

```bash
./mirror.sh
```

Or:

```bash
python3 mirror.py
```

You can automate it with cron and forget about it. For example, to run the mirror every night at 2 AM:

```bash
0 2 * * * cd /path/to/gitlab-mirror && /usr/bin/env bash mirror.sh >> /var/log/gitlab-mirror.log 2>&1
```

### Why Bother?

Maybe nothing will ever happen to your GitHub account. Probably nothing will. But the cost of setting this up is small. The cost of needing it and not having it is much higher.

Your code is:

- Your late nights
- Your experiments
- Your career history
- Your proof of work

That’s not something I want living in exactly one place.

**So I mirrored it.**

You might want to, too.

## Acknowledgements

Some of the content for this post was made better with the help of ChatGPT's writing tools.
