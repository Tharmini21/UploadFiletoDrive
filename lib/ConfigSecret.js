const config = {}

config.oauthurl = "https://accounts.google.com/o/oauth2/auth"

config.tokenurl = "https://oauth2.googleapis.com/token"

config.Scope = [
    "https://www.googleapis.com/auth/drive",
    "https://www.googleapis.com/auth/drive.file",
    "https://www.googleapis.com/auth/drive.appdata"
];

config.ClientId = "218866420163-28if048id8aij2l4iu567poivgvr1a87.apps.googleusercontent.com"
config.Clientsecret = "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"

config.redirect_uri = "https://system.converse.ai/api/settings/oauth/oauth2callback"

module.exports = config;

