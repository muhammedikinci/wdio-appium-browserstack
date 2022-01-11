import { Given, Then } from '@cucumber/cucumber';

Given("Click to '{}' text", async function(text) {
  let element = await $(`//android.widget.TextView[@content-desc="${text}"]`)
  await element.click()
  await browser.pause(200)
})

Then("Write to text", async function () {
  const element = await $('//*[@class="android.widget.EditText"]');
  await element.setValue("test appium")
})