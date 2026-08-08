import { expect, test } from "@playwright/test";

test.describe("SETOUCHI AZURE landing page", () => {
  test("shows every section without runtime errors or horizontal overflow", async ({
    page,
  }) => {
    const runtimeErrors: string[] = [];
    const consoleErrors: string[] = [];

    page.on("pageerror", (error) => runtimeErrors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") consoleErrors.push(message.text());
    });

    await page.goto("/");
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: "瀬戸内の静けさに、 泊まる。",
      }),
    ).toBeVisible();

    for (const sectionId of [
      "concept",
      "stay",
      "dining",
      "experience",
      "spa",
      "access",
      "booking",
    ]) {
      const section = page.locator(`#${sectionId}`);
      await section.scrollIntoViewIfNeeded();
      await expect(section).toBeVisible();
    }

    const dimensions = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth,
    }));
    expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.innerWidth);
    expect(runtimeErrors).toEqual([]);
    expect(consoleErrors).toEqual([]);
  });

  for (const width of [768, 900, 1024]) {
    test(`keeps the main sections stable at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto("/");

      for (const sectionId of [
        "concept",
        "stay",
        "dining",
        "experience",
        "spa",
        "access",
        "booking",
      ]) {
        const section = page.locator(`#${sectionId}`);
        await expect(section).toBeVisible();

        const box = await section.boundingBox();
        expect(box).not.toBeNull();
        expect(box!.x).toBeGreaterThanOrEqual(-0.5);
        expect(box!.x + box!.width).toBeLessThanOrEqual(width + 0.5);
      }

      const dimensions = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        innerWidth: window.innerWidth,
      }));
      expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.innerWidth);
    });
  }
});
