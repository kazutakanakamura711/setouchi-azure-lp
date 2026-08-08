import { expect, test } from "@playwright/test";

test("operates the mobile menu with keyboard and restores focus", async ({
  page,
}) => {
  await page.goto("/");
  const menuButton = page.getByTestId("menu-toggle");

  await expect(menuButton).toBeVisible();
  await menuButton.click();
  await expect(menuButton).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator("main")).toHaveAttribute("inert", "");
  await expect(page.locator("footer")).toHaveAttribute("inert", "");

  await page.keyboard.press("Escape");
  await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  await expect(menuButton).toBeFocused();
  await expect(page.locator("main")).not.toHaveAttribute("inert", "");
});
