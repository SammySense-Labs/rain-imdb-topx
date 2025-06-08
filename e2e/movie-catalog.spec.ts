import { test, expect } from "@playwright/test";

test.describe("Movie Catalog Navigation", () => {
  test("should navigate through movie catalog and view different movies", async ({
    page,
  }) => {
    // Start at the catalog page
    await page.goto("/");

    // Wait for the movie grid to be visible
    await expect(
      page.getByRole("heading", { name: "Top 10 IMDb Movies" })
    ).toBeVisible();

    // Get all movie cards
    const movieCards = page.getByRole("link");
    const movieCount = await movieCards.count();

    // Ensure we have at least 2 movies to test with
    expect(movieCount).toBeGreaterThanOrEqual(2);

    // Click the first movie
    const firstMovie = movieCards.first();
    const firstMovieTitle = (await firstMovie.getAttribute("title")) || "";
    await firstMovie.click();

    // Verify we're on the movie details page
    await expect(page).toHaveURL(/\/movies\/\d+$/);
    await expect(
      page.getByRole("heading", { name: firstMovieTitle })
    ).toBeVisible();

    // Go back to the catalog
    await page.goBack();

    // Verify we're back on the catalog page
    await expect(page).toHaveURL("/");
    await expect(
      page.getByRole("heading", { name: "Top 10 IMDb Movies" })
    ).toBeVisible();

    // Click the second movie
    const secondMovie = movieCards.nth(1);
    const secondMovieTitle = (await secondMovie.getAttribute("title")) || "";
    await secondMovie.click();

    // Verify we're on the second movie's details page
    await expect(page).toHaveURL(/\/movies\/\d+$/);
    await expect(
      page.getByRole("heading", { name: secondMovieTitle })
    ).toBeVisible();
  });
});
