module.exports = isCollaborator

/**
 * List all contributors in the repo.
 *
 * @param {import('probot').Context<'pull_request'>} context
 * @param {string} user
 */
async function isCollaborator(
  context,
  username,
) {
  const { octokit } = context
  const { owner, repo } = context.repo()

  let { status } = await octokit.repos.checkCollaborator({
    owner,
    repo,
    username,
  })

  return status === 204
}
