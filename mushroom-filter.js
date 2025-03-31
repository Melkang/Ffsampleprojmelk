// 1. Select all cards that need to be filtered.

const cards = document.querySelectorAll(".mushroom-guide .card");

// 2. Get the dropdown (select) elements used for filtering.
const seasonalFilter = document.querySelector("#season"); // Dropdown for selecting seasons
const edibleFilter = document.querySelector("#edible"); // Dropdown for filtering edibility
const noResultsMessage = document.querySelector(".no-matches"); // Message to show when no matching cards are found (initially hidden)

// 3. Create an object to store the currently selected filter values.
const currentFilters = {
  season: "all", // Default value: Show all seasons
  edible: "all", // Default value: Show all edibility options
};

// 4. Assign unique transition names to each card for smooth animations.
cards.forEach((card, index) => {
  const mushroomId = `mushroom-${index + 1}`;
  card.style.viewTransitionName = `mushroom-card-${mushroomId}`;
});
// 5. Attach event listeners to both filters.
//    When the user selects a different option, the `updateFilter` function runs.
seasonalFilter.addEventListener("change", updateFilter);
edibleFilter.addEventListener("change", updateFilter);

// 6. Function to update the filter values and trigger filtering.
function updateFilter(e) {
  const filterType = e.target.name; // Get the name (either "season" or "edible")
  currentFilters[filterType] = e.target.value; // Update the selected filter value

  // console.log(currentFilters); // Display the updated filters in the console for debugging
  // 7. Apply a smooth transition if supported by the browser
  if (!document.startViewTransition) {
    filterCards(); // If transitions are not supported, filter immediately
    return;
  }
  // 8. Run filtering inside a transition effect
  document.startViewTransition(() => filterCards());
}

// 9. Function to filter cards based on the selected filter values.
function filterCards() {
  let hasVisibleCards = false; // Tracks if any cards remain visible

  // 10. Loop through each card element and check if it matches the filters.
  cards.forEach((card) => {
    // 11. Extract season and edibility data attributes from the card.
    const season = card.querySelector("[data-season]").dataset.season;
    const edible = card.querySelector("[data-edible]").dataset.edible;

    // Debugging: Uncomment to see each card's attributes
    // console.log(`Card: Season = ${season}, Edible = ${edible}`);

    // 12. Compare the selected filter values with the card’s data attributes.
    // If the selected filter is "all", it should match everything.
    const matchesSeason = currentFilters.season === season;
    const matchesEdible = currentFilters.edible === edible;

    // 13. Determine whether to show or hide the card based on filter matches.
    if (
      (matchesEdible || currentFilters.edible === "all") &&
      (matchesSeason || currentFilters.season === "all")
    ) {
      card.hidden = false; // Show the card
      hasVisibleCards = true; // At least one card is visible
    } else {
      card.hidden = true; // Hide the card
    }

    // 14. Show "No results" message if no cards match the filters.
    if (hasVisibleCards) {
      noResultsMessage.hidden = true;
    } else {
      noResultsMessage.hidden = false;
    }
  });
}

// 15. Function to ensure filtering is only enabled when JavaScript is active.
//     Without JavaScript, the filters will remain hidden, displaying all cards.
function enableFiltering() {
  seasonalFilter.hidden = false;
  edibleFilter.hidden = false;
}

// 16. Enable filtering when the script loads.
enableFiltering();
