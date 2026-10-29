# Midterm - Web Programming

**Name:** Saad
**Roll number:** FA24-BCS-117

## My numbers

- N = 17
- BP = 600 + 17 = **617px**
- H = (17 x 7) mod 360 = **119** (accent colour: `hsl(119, 70%, 45%)`)
- K = (17 mod 3) + 3 = **5** columns
- Max adds per product = (17 mod 4) + 2 = **3**
- Exam date = 29 Oct 2026, so the latest delivery date = 15 Nov 2026

## Files changed

- `index.html` - mega-menu in navbar, bag icon linked to checkout, cart badge and mini-cart markup, script link
- `product.html` - mega-menu in navbar, bag icon linked to checkout
- `style.css` - accent variable, mega-menu CSS, checkout CSS, cart CSS
- `checkout.html` - new file (Task 2)
- `script.js` - new file (Task 3)

## Task 1 - Mega-menu

I added a "Shop by Category" item to the navbar with 5 columns (Men, Women, Kids, Apparel, Sale), each with a heading and 4 links in a `<ul>`. From 617px up, the panel is `position: absolute` with `left: 0; right: 0; top: 100%`, so it is full width under the navbar and does not push the page down. It has a high `z-index` so it sits above the cards. It opens with `:hover` and `:focus-within`, so Tab alone opens it, and a small invisible strip above the panel keeps it open while the pointer moves in. Below 617px, the same 5 groups are `<details>` / `<summary>` accordions inside the hamburger menu, closed by default. I removed `navbar-expand-lg` and wrote my own media query so the navbar switches at 617px instead of Bootstrap's 992px.

## Task 2 - Checkout form

I created `checkout.html`, linked from the bag icon. It has two fieldsets, "Contact" and "Delivery", each with a legend, and every input has a label joined with `for` / `id`. The phone field uses `pattern="03[0-9]{2}-[0-9]{7}"`, and the date uses `min="2026-10-29"` and `max="2026-11-15"`. Errors (red border and message) use `:user-invalid`, so they appear only after the user interacts with a field. From 617px up the fieldsets sit side by side and each label is in a left column using CSS Grid. Below 617px it is one column with labels above the inputs. The submit button is full width at every size.

## Task 3 - Cart badge and mini cart

I created `script.js` in plain JavaScript. Clicking "Add to Cart" reads the name and price from the card and pushes them into a `cart` array. The bag icon shows a badge with the number of items. Clicking the bag icon toggles a mini-cart panel that lists each item with a Remove button and the total calculated with `reduce()`. One function, `updateCart()`, redraws the badge, list, total and buttons, so Remove updates everything at once. Each product can be added at most 3 times; after that its button says "Limit reached" and is disabled until one is removed.

## AI tools used

Claude (Anthropic)
