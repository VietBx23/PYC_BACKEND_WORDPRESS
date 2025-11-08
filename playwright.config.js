// Playwright config for Render (optional, can be omitted if not needed)
module.exports = {
  webServer: {
    command: 'python app.py',
    port: 5000,
    timeout: 120,
    reuseExistingServer: true,
  },
};
