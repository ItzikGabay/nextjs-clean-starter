/**
 * API health route
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @return {Object} health status
 */
export default function handler(req, res) {
  return res.status(200).json({ status: 200 });
}
