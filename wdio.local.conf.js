import { config } from './wdio.conf'
import { join } from 'path';

config.maxInstances = 1

config.capabilities = [
    {
        platformName: 'Android',
        platformVersion: '11',
        orientation: 'PORTRAIT',
        automationName: 'UiAutomator2',
        app: join(process.cwd(), './ApiDemos-debug.apk'),
    }
]

config.services = ["appium"]

exports.config = config