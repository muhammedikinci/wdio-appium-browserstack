import { config } from './wdio.conf'

config.user = ""
config.key = ""

config.capabilities = [
    {
        platformName: "Android",
        os_version: "9",
        deviceName: 'Google Pixel 3',
        platformVersion: '9',
        automationName: 'UiAutomator2',
        device: "Google Pixel 3",
        app: "bs://",
        "browserstack.local" : false
    }
]

config.services = ["browserstack"]
config.maxInstances = 1

delete config.port

exports.config = config