import { expect, test } from "@playwright/test";

test("captures the full page for human visual review", async ({
  page,
}, testInfo) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });

  await page.goto("/");
  await expect(page.getByRole("main")).toBeVisible();

  const revealItems = page.locator(".reveal");
  const revealItemCount = await revealItems.count();

  for (let index = 0; index < revealItemCount; index += 1) {
    const revealItem = revealItems.nth(index);
    await revealItem.scrollIntoViewIfNeeded();
    await expect(revealItem).toHaveClass(/is-visible/);
  }

  await page.locator("#top").scrollIntoViewIfNeeded();

  await page.screenshot({
    path: testInfo.outputPath("setouchi-azure-full-page.png"),
    fullPage: true,
    animations: "disabled",
  });

  expect(errors).toEqual([]);
});
